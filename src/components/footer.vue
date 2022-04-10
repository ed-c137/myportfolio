<template>
    <footer >   
    <button class="movetotop" @click="scrolltoTop">  <fa icon="chevron-up"/></button>
    <div class="copyright-text">
        Made with&nbsp;<span style="color:red"> &#9829;</span>&nbsp;{{new Date().getFullYear()}}&nbsp;
    </div>
    <div class="footer-icon-group">
        <FooterSocial />
    </div>
    </footer>
</template>

<script>
export default {
    components:{
        FooterSocial: () => import("@/components/FooterSocials.vue"),    
    },
    methods:{
       scrolltoTop(){
       window.scroll({
          top: 0,
          behavior: 'smooth'  // 👈 
        });
      }
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/function";
    footer{
  // padding: auto 1rem;
  display: flex;
  background: var(--color-accent-bg);
  color:var(--color-text-light);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-top: 1rem;
  position: relative;
  .copyright-text{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.1rem;
    padding-left: 1rem;
  }
  .footer-icon-group{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1rem;
  }
  @include for-phone-only {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    .copyright-text{
      display: flex;
      font-size: 1rem;
      padding-left: 0;
      justify-content: center;
    }
    .footer-icon-group{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 0;
    }
  }
}
.movetotop{
  position: fixed;
  right: 20%;
  bottom: 20px;
  border: solid 2px black;
  border-radius: 5px;
  opacity: .5;
  cursor: pointer;
  transition: opacity .25s;
  svg{
    padding-top: 3px;
    padding-left: 1px;
    padding-right: 1px;
  }
  &:hover{
    opacity: 1;
  }
  @include for-phone-only {
    right: 20px;
  }
  @include for-tablet-portrait-only {
    right: 2vw;
    bottom: 80px;
  }
  @include for-tablet-landscape-only {
    right: 5%;
    bottom: 70px;
  }

  @include for-desktop-only {
    right: 8%;
    bottom: 70px;
  }
}
</style>