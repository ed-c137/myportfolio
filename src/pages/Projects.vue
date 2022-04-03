<template>
    <div class="main">
       <ClientOnly>
    <Layout>
      <h1>Projects</h1>
      <div class="projects-wrapper">
      <!-- <div class="projects-filterbar">
        <div class="filterbar-wrap">
          <button>All</button>
          <button>Javascript</button>
          <button>PHP</button>
          <button>Vue</button>
          <button>Laravel</button>
          <button>Wordpress</button>
        </div>
      </div> -->
      <hr>
      <div class="projects-container">
        <div class="projects-inner">
          
          <div v-for="project in $page.projects.edges" class="project-item card-animation" :key="project.node.id">
              <g-link class="imglink" :to="project.node.path">
                <div class="card-image" :style="{  backgroundImage: 'url(' + project.node.featuredImage.src + ')' }" alt="project" />
              </g-link>
              <div class="card-bottom">
                <div class="card-main">
                  <g-link class="titlelink" :to="project.node.path">
                    {{ project.node.title }}
                  </g-link>
                  <p class="project-desc">
                    {{ project.node.description }}
                    <!-- <img :src="project.node.featuredImage.src" alt=""> -->
                  </p>
                  <div class="builtby">
                    <span v-for="(lang, index ) in project.node.langs" :key="lang">
                      {{ lang}}{{ index === project.node.langs.length - 1 ? '': ", " }}
                    </span>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="card-text-more">
                      <a v-if="project.node.link" :href="project.node.link" class="more" title="view">
                     <fa icon="eye"/>
                      </a>
                      <a v-if="project.node.gitlink" :href="project.node.gitlink" class="more" title="github">
                      <fa :icon="['fab', 'github']" />
                      </a>
                      </div>
                </div>
              </div>
              
          </div>

          
        </div>
      </div>
      </div>
    </Layout>
    </ClientOnly>
  </div>
</template>

<page-query>
query{
  projects: allProject{
    edges{
      node{
        id
        path
        featuredImage(width: 600, height: 600, quality: 75)
        title
        description
        link
        gitlink
        langs
      }
    }
  }
    
}

</page-query>

<script>
export default {
  data(){
    return{
    
    }
  },
  methods:{

  },
  created(){

  }
}
</script>

<style lang="scss" scoped>
.projects-wrapper{
    .projects-filterbar{
      display: flex;
      justify-content: center;
      margin: 1rem 0;
      .filterbar-wrap{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        button{
          border-radius: 0;
          border: none;
	        outline: inherit;
          border: 2px solid gray;
          margin-bottom: 0.5rem;
        }
        .btn-active{
          color: var(--color-primary);
          background: black;
          border: 2px solid black;
          font-weight: 600;
        }
      }
    }
    .projects-container{
      .projects-inner{
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          flex-wrap: wrap;
          min-height: 380px;


      }
      .project-item{
        height: 330px;
        width: 302px;
        margin: 0 14px 40px;
        border: 1px solid rgba(153,153,153,0.54);
        border-radius: 2px;
        background-color: var(--color-accent-bg);
        // opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        a.imglink{
          color: rgba(0,0,0,0.84);
          font-family: 'Slabo 27px', serif;
          font-size: 1.3rem;
          letter-spacing: -.003em;
          line-height: 1.58;
          text-rendering: optimizeLegibility;
          display: block;
          height: 45%;
          border-bottom: 1px solid rgba(0,0,0,0.12);
          .card-image{
            background-size: cover;
            background-position: top center;
            height: 100%;
          }
        }
        .card-bottom{
          display: flex;
          flex-direction: column;
          align-items: stretch;

          .card-main{
            text-align: center;
            padding: 0 12px;
            padding-top: 0px;
            position: relative;
            padding-top: 0.4rem;
            color:var(--color-h-black);
            .builtby{
              font-size: 0.8rem;
              font-weight: 500;
              color: var(--color-primary);
              text-transform: capitalize;
            }
          }
            a{
              text-decoration: none;
              color: var(--color-h-black);
            }
            .project-desc{
              font-size: 0.9rem;
              font-weight: 300;
              margin-bottom: 0.5rem;
            }
          }
          .card-footer{
            display: flex;
            justify-content: center;
            // background: cornflowerblue;
            padding: 0.3rem 0;
            .card-text-more{
              width: 20%;
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }
}


</style>