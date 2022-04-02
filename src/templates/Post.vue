<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>

        <span class="date">{{ $page.post.date }}</span>
        <div class="post-content" v-html="$page.post.content"></div>
        <hr>
        <g-link
            :to="tag.path"
            v-for="tag in $page.post.tags"
            :key="tag.id"
            class="post-tags"
          >
          <fa icon="tag"/>
            {{ tag.title }}
          </g-link>
        <!-- <Bio /> -->
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "MMMM D, Y")
    categories {
      id
      path
    }
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
    export default{
        metaInfo(){
            return {
                title: this.$page.post.title
            }
        }
    }
</script>

<style lang="scss">
.post-content{
    color: var(--color-p-black);
    img{
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
} 

</style>

<style scoped lang="scss">
.date{
    margin-bottom: 2rem;
    display: inline-block;
}

    .image{
        height: 700px;
        img{
            object-fit: cover;
            height: 100%;
            width: 100%;
            object-position: center;
        }
    }

.post-tags{
    background: var(--color-primary);
    padding: 0.1rem 0.4rem;
    text-decoration: none;
    color: white;
    opacity: 0.8;
    border-radius: 4px;
    margin-left: 4px;
    svg{
        height: 13px;
    }
}

</style>