<template>
 
  <Layout>
    
     <div class="about-hero">
    <div class="about-hero-inner">
      <div class="about-hero-text">
        <h2>Hi! I'm Edrick 👋</h2>
        <p>
          I'm a Front-end web developer with a passion for building beautiful, responsive websites.
        </p>
      </div>
      <div class="rightart">
        <img src="../assets/undraw_code_thinking_re_gka2.svg" alt="">
      </div>
    </div>
  </div>
  <section class="about">
    <h4>A bit about me...</h4>
    <p>
      As a kid i was always curious of how things work, the answers i received never really satisfied me so I always broke open my toys without the knowledge of putting it back together 😅. This curiosity led me to learning electronics but my heart finally realised that it was in writing code.
    </p>
   <p>
     Check out the <a href="https://edrick.xyz/projects/">projects</a>  page to see a highlight of the open-source projects I've made, and <a href="https://edrick.xyz/">articles</a> to see everything I've written.
   </p>
  </section>
  <section>
    <h4>Tech Stack Used</h4>
    <div>
      <h5>Currently Using</h5>
      <ul>
        <li>Vuejs</li>
        <li>Gridsome</li>
        <li>Bootstrap</li>
        <li>SCSS</li>
        <li>Wordpress</li>
        <li>Gulp 4</li>
        <li>Figma</li>
      </ul>
      <h5>Previosly used</h5>
      <ul>
        <li>Laravel</li>
        <li>React</li>
        <li>Gatsby</li>
      </ul>
    </div>
  </section>
  </Layout>
 
</template>

<script>
export default {
  metaInfo: {
    title: 'About Me'
  }
}
</script>

<style lang="scss" scoped>
  .about-hero{
    .about-hero-inner{
      display:flex;
      .about-hero-text{
        p{
          color: var(--color-p-black);
        }
      }
      .rightart{
        height: 300px;
        width: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
</style>
