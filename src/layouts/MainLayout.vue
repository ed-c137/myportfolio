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
      <Footer />
    </div>
</template>

<script>
import RssSvg from "@/assets/rss-symbol.svg";

export default {
    data(){
        return{
            RssSvg,
            isLight: null,
        }
    },
    components:{
      Footer: () => import("@/components/Footer.vue"),
      DayNight : () => import("@/components/DayNight.vue"),        
    },
    methods:{
      toggleDNmode(mode){
        console.log(mode);
        this.isLight = mode === 'light' ? true : false;
      },
     
    },
    computed:{
    headerSite(){

    }
          
    },
    created(){
      
    }
    
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
  background-image: linear-gradient(to right, #2a27a8 0%,#8c50bc 50%,#fc6e6c 100%);
  //height: 10px;
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



</style>

