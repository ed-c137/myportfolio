<template>
   <button
        class="toggle-button header-nav-link"
        @click="toggleDLM"
    >
    <transition>
        <fa v-if="isLight" class="faico" icon="moon"/>
        <fa v-else class="fasun" icon="sun"/>
    </transition>
   </button>
</template>

<script>
export default {
    emits:['day-night-mode'],
    props:['isLight'],
    data(){
        return{
            isLightmode: null,
        }
    },
    methods:{
        toggleDLM(){
        this.isLightmode = !this.isLightmode;
        
        let body = document.getElementsByTagName("body")[0];
        if(!this.isLightmode){
            body.classList.add("dark");
            this.$emit('day-night-mode', 'dark');
            localStorage.setItem('theme', 'dark');
          } else {
            body.classList.remove("dark");
             this.$emit('day-night-mode', 'light');
             localStorage.setItem('theme', 'light');
        }
      },
    },
    created(){
     let body = document.getElementsByTagName("body")[0];
      if(localStorage.getItem('theme') === null){
        localStorage.setItem('theme', 'light');
        this.isLightmode = true;
        this.$emit('day-night-mode', 'light');
      }else{
        if(localStorage.getItem('theme') === 'light'){
          this.isLightmode = true;
          // body.classList.remove("dark");
          console.log('emmited light');
          this.$emit('day-night-mode', 'light');
        }else{
          console.log('emmited dark');
           body.classList.add("dark");
            this.isLightmode = false;
            this.$emit('day-night-mode', 'dark');
        }
      }
        // console.log(this.$router.currentRoute.path);
    
    }
    
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/function";
.fasun{
  color: var(--color-sun);
}
.toggle-button{
  @include for-phone-only {
    margin-bottom: 0.5rem;
  }
}
</style>