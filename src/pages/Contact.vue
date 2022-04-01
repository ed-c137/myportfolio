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
            v-on:submit.prevent="handleSubmit"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div class="sender-info">
              <div class="form-group">
                <label for="name" class="label" >Your name</label>
                <input type="text" name="name" v-model="formData.name" />
              </div>
              <div class="form-group">
                <label for="email">Your email</label>
                <input type="email" name="email" v-model="formData.email" />
              </div>
            </div>

            <div class="form-group message-wrapper">
              <label for="message">Message</label>
              <textarea name="message" v-model="formData.message"></textarea>
            </div>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
         
    </Layout>
</div>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
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
    }
  },

}
</script>

<style lang="scss" scoped>
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
    }
    .right-block{
      max-width: 400px;
      width: 100%;
      padding: 1rem;
      padding-top: 1rem;
      padding-top: 0;
      border-radius: 4px;
      border: 1px solid rgba(255,255,255,0.7);
      background-color: rgba(255,255,255,0.5);
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
          }
          input, textarea{
            resize: vertical;
            font-size: var(--size-100);
            font-family: inherit;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            background-color: #efefef;
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
          padding: 0.45rem;
          padding-right: 0.45rem;
          padding-left: 0.45rem;
          padding-left: 1.25rem;
          padding-right: 1.5rem;
          background-color: rgba(234,68,68,0.8);
          color: #333;
          border: 1px solid rgba(255,255,255,0.8);
          text-transform: uppercase;
          border-radius: 4px;
          font-weight: 600;
           font-size: var(--size-100);
        }
      }
    }
  }
</style>