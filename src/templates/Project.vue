<template>
 
      <Layout>
        <article>
            <div class="image">
                <img :src="$page.project.featuredImage.src" alt="">
            </div>
            <div class="title">
              <h1>
                  {{ $page.project.title }}
              </h1>
            </div>
            <div class="post-content" v-html="$page.project.content"></div>
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
    content
    description
    langs
    featuredImage(width: 600, height: 600, quality: 75)
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

</style>