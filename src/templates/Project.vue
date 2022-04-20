<template>
 
      <Layout>
        <article>
            <div class="image">
                <img :src="$page.project.featuredImage.src" alt="featured image">
            </div>
            <div class="title">
              <h1>
                  {{ $page.project.title }}
              </h1>
              <div class="buttons-header">
                <a v-if="$page.project.link" class="title__btns" :href="$page.project.link" target="_blank">Live</a>
                <a v-if="$page.project.gitlink" class="title__btns" :href="$page.project.gitlink" target="_blank">Github</a>
              </div>
            </div>
            <div class="post-content" v-html="$page.project.content"></div>
            <div class="project-images">
            <img :src="$page.project.image2.src" v-if="$page.project.image2" >
            </div>
            <hr>
            <div class="langused">
                <span
                  v-for="tag in $page.project.langs"
                  :key="tag"
                  class="post-lang"
                >
                <fa icon="hashtag"/>
                  {{ tag }}
                </span>
            </div>
        </article>
      </Layout>
    
</template>
<page-query>
query Project ($path: String!) {
   project: project (path: $path) {
    id
    title
    link
    gitlink
    content
    description
    langs
    featuredImage(width: 800, height: 600, quality: 75)
    image2(width: 800, height: 600, quality: 75)
  }
}
</page-query>  
<script>
export default {

}
</script>

<style scoped lang="scss">
.langused{
    display: flex;
    .post-lang{
        background: rgba(0, 0, 0, 0.1);
        padding: 0.1rem 0.4rem;
        display: flex;
        align-items: center;
        margin-right: 0.4rem;
        border-radius: 4px;
        color: var(--color-h-black);
        svg{
            padding-right: 0.2rem;
        }
    }
}

.buttons-header{
  margin-bottom: 1rem;
  .title__btns{
    padding: .1rem 1.4rem;
    display: inline-block;
    background-color: #9e9e9e;
    color: white;
    text-decoration: none;
    &:hover, &:focus{
      background-color: #757575;
    }
    &:first-child{
      margin-right: 0.4rem;
    }
  }
}
.image{
  height: 400px;
  width: 100%;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.title{
  color: var(--color-heading-black);
}

.project-images{
  width:100%;
  height: 500px;
  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
</style>