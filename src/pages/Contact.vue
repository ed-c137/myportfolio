<template>
  <div class="main">
    
    <Layout>
       
      <div class="contact-wrapper">
        <div class="left-block">
          <h1>Get in Touch</h1>
            <p>If you've got an inquiry for a job or project,drop me a line at <a href="mailto:hello@hello.com">hello@hello.com</a> or fill the form right here.</p>
        </div>
        <div class="right-block">
          <form
            name="contact"
            method="post"
            v-on:submit.prevent="handleSubmitForm"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div class="sender-info">
              <div class="form-group" >
                <label for="name" class="label" >Your name</label>
                <input type="text" name="name" v-model="form.name" />
                 <!-- <div class="input-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
                  <div class="error-msg">{{ error.$message }}</div>
                </div> -->
              </div>
              <div class="form-group" >
                <label for="email">Your email</label>
                <input type="email" name="email" v-model="form.email" />
                 <!-- <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                  <div class="error-msg">{{ error.$message }}</div>
                </div> -->
              </div>
            </div>

            <div class="form-group message-wrapper" >
              <label for="message">Message</label>
              <textarea name="message" v-model="form.message"></textarea>
              <!-- <div class="input-errors" v-for="(error, index) of v$.form.message.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div> -->
            </div>
            <!-- <div class="buttons-w">
              <button class="btn btn-primary">Login</button>
            </div> -->
            <div class="placehoder-wrap">
              <!-- <img src="https://via.placeholder.com/100x40/000000/FFFFFF/?text=09369"  alt=""> -->
              <img :src="cstring" height="40" width="100" alt="">
              <input type="text" placeholder=" Type Caphca" v-model="captured">
            </div>
            <div class="message" :class="{ error: isError, success: isSuccess }">{{ message }}</div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
         
    </Layout>
    
</div>
</template>

<script>
import SheetDB from 'sheetdb-js';
import axios from 'axios';

export default {
  data() {
    return {
      cData: [
        { 'name' : '01386' },
        { 'name' : '37287' },
        { 'name' : '27390' },
        { 'name' : '62939' },
        { 'name' : '32692' },
      ],
      cNum: null,
      cstring: null,
      captured: null,
      isError: false,
      isSuccess: false,
      message: '', 
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    },

    selectCapchca(){
      let x = Math.floor((Math.random() * 4) + 1);
      let y = x - 1;
      this.cNum = y;
      let iname = this.cData[y].name;
      this.cstring = `https://via.placeholder.com/200x80.png/000000/FFFFFF/?text=${iname}`
    },
   
    validtxt(name) {
      let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
      if (validNamePattern.test(name)){
        return true;
      }
      return false;
    },
    handleSubmitForm(){
     let name = this.form.name;
     let email = this.form.email;
     let message = this.form.message;
      let that = this;
    //   SheetDB.create('https://sheetdb.io/api/v1/jvxqz4upthz7a', { sheet: 'Sheet1', data:{
    //     name: name, email : email, message: message
    //   }}).then(function(result){
    //     console.log(result);
    //     that.$router.push('/success');
    // }, function(error){
    //   console.log(error);
    // });
    if(this.cData[this.cNum].name == this.captured ){
        axios.post('https://sheetdb.io/api/v1/jvxqz4upthz7a',{ sheet: 'Sheet1', data:{
          name: name, email : email, message: message
        }}).then( response => {
          console.log(response.data);
          if(response.data.created >= 1){
            this.isSuccess = true;
            this.message = `Thanks ${this.form.name}! I will get back to you`
          }
      });
    } else {
      this.isError = true;
      this.message = "The capthca didnt match the image"
      console.log('capchca didnt match');
    }

    }
  

  },
  // created(){
  //   SheetDB.read('https://sheetdb.io/api/v1/jvxqz4upthz7a', {}).then(function(result){
  //     console.log(result);
  //   }, function(error){
  //     console.log(error);
  //   });
  // }
  created(){
    this.selectCapchca();
  }

}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/function";
  .contact-wrapper{
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-around;
    margin-top: 1rem;
    padding-bottom: 1rem;
    .left-block{
      max-width: 45ch;
      flex: 1;
      padding-right: 0.5rem;
      @include for-phone-only {
      
        h1{
          margin-top: 0.5rem;
        }
      }
    }
    .right-block{
      max-width: 400px;
      width: 100%;
      padding: 1rem;
      padding-top: 1rem;
      padding-top: 0;
      border-radius: 4px;
      // border: 1px solid rgba(255,255,255,0.7);
      background-color: var(--color-accent-bg);;
      border: 1px solid rgba(0,0,0,0.1);
      form{
        padding: 1rem;
        .form-group{
          display: flex;
          flex-direction: column;
          font-family: inherit;
          label{
            margin-top: 1rem;
            text-transform: capitalize;
            font-size: var(--size-400);
            color: var(--color-h-black);
          }
          input, textarea{
            resize: vertical;
            font-size: var(--size-100);
            font-family: inherit;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            background-color: var(--color-accent-bg-inner);
            border: 2px solid transparent;
            line-height: 1.15;
            margin: 0;
            &:focus{
              outline: 0;
              border-color: var(--color-primary);
            }
          }
          input{
            overflow: visible;
          }
        }
        button{
          margin-top: 1rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          padding-top: 0.4rem;
          padding-bottom: 0.2rem;
          background-color: var(--color-primary);
          color: #333;
          border: 1px solid var(--color-accent-bg-inner);
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
           font-size: var(--size-100);
        }
      }
    }

    @include for-phone-only{
      flex-direction: column;
    }
  }

  .placehoder-wrap{
    display: flex;
    padding: 1.8rem 0;
    img{

    }
    input{
      width: 7rem;
      margin-left: 1rem;
      font-size: 0.9rem;
      padding: 0 0.6rem;
    }
  }

  .message{

    }
    .error{
      color: #842029;
      background-color: #f8d7da;
      border-color: #f5c2c7;
      padding: 0.5rem;
    }
    .success{
      color: #0f5132;
      background-color: #d1e7dd;
      border-color: #badbcc;
      padding: 0.5rem;
    }
</style>