<template>
    <div class="global-wrapper" :class="{ dark : !isLight }">
      
      <div class="content-wrapper">
      <header class="global-header">
        <g-link class="profile-brand__wrap" to="/aboutme/">
          <span class="profile-pic__wrap">
            <g-image src="~/assets/images/ed.jpg" width="200"/>
          </span>
          <div class="about-lnk__wrap">
            <span>ABOUT&nbsp;ME</span>
          </div>
        </g-link>

        <div class="header-actions">
          <div class="header-menu__wrap">
            <g-link
              class="header-nav-link"
              to="/"
            >
              Blog
            </g-link>
            <g-link
              class="header-nav-link"
              to="/projects/"
            >
              Projects
            </g-link>
            <g-link
              class="header-nav-link"
              to="/contact/"
            >
              Contact
            </g-link>
          </div>
          <div class="nav-menu-right">
            <ClientOnly>
              <DayNight :isLight="isLight" @day-night-mode="toggleDNmode"/>
            </ClientOnly>
            <!-- <button class="toggle-button header-nav-link">
              <img :src="RssSvg" alt="toggle theme" class="rss-icon" />
            </button> -->
          </div>
        </div>
      </header>
      <main>
          <slot />
      </main>
       </div>
      <footer >
        <button class="movetotop" @click="scrolltoTop">  <fa icon="chevron-up"/></button>
        <div class="copyright-text">
          Made with&nbsp;<span style="color:red"> &#9829;</span>&nbsp;{{new Date().getFullYear()}}&nbsp;
        </div>
        <div class="footer-icon-group">
          <FooterSocial />
        </div>
      </footer>
    </div>
</template>

<script>
import RssSvg from "@/assets/rss-symbol.svg";

export default {
    data(){
        return{
            RssSvg,
            isLight: true,
        }
    },
    components:{
      FooterSocial: () => import("@/components/FooterSocials.vue"),
      DayNight : () => import("@/components/DayNight.vue"),        
    },
    methods:{
      toggleDNmode(mode){
        console.log(mode);
        this.isLight = mode === 'light' ? true : false;
        
      },
      scrolltoTop(){
       window.scroll({
          top: 0,
          behavior: 'smooth'  // 👈 
        });
      }
    },
    computed:{
    headerSite(){

    }
          
    },
    
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/function";
.global-wrapper{
  min-height: 100vh;
  // margin: 0;
  // padding: 0;
  display: flex;
  flex-direction: column;
  .content-wrapper{
    flex:1;
  }
  

}
.light-bar{
  height: 3px;
  width: 100%;
  // background: rgb(79, 176, 255);
  background-image: linear-gradient(to right, #2a27a8 0%,#8c50bc 50%,#fc6e6c 100%);
// height: 10px;
  // top: 0;
  // right: 0;
  // left: 0;
  // position: fixed;
}

.header-menu__wrap{
   .header-nav-link.active--exact{
        color: #fff;
        text-decoration: none;
        background: var(--color-primary);
        
    }
     .header-nav-link{
        padding: 0.1rem .2rem;
        border-radius: 5px;
       &:hover{
          color: #fff;
          text-decoration: none;
          background: var(--color-primary);
       }
     }
}

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
}

</style>

