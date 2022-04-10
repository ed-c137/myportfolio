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
  <section class="technology">
    <h4>Tech Stack Used</h4>
    <div class="tech-col">
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
      </div>
      <div>
        <h5>Previosly used</h5>
        <ul>
          <li>Laravel</li>
          <li>React</li>
          <li>Gatsby</li>
        </ul>
      </div>
    </div>
  </section>
    <section>
    <div class="dwn-cv">
        <a aria-label="Edrick on LinkedIn" href="/EdCV.pdf" class="downloadcvbtn" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 bg-green-300 p-2 rounded-full" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 9.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5zM7.527 17h8.946a4.5 4.5 0 0 0-8.946 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
      <span>
        Download CV
      </span>   
      </a> 
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
.technology{
  h4{
    text-align: center;
  }
}
.tech-col{
    display: flex;
    justify-content: space-around;
  }
.dwn-cv{
  display: flex;
  justify-content: center;
  margin: 3rem;
  .downloadcvbtn{
    display: flex;
    align-items: center;
    justify-content: center;
    background: orange;
    color: #333;
    width: 10rem;
    padding: .3rem;
    text-decoration: none;
    border-radius: 4px;
  }

}
</style>
