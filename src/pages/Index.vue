<template>
    <Layout  :title="$page.meta.siteName" >
        <!-- <SEO title=siteTitle /> -->
        <Search @search-results="filterResults"/>
        
        <p v-if="$page.posts.edges.length === 0">
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>  
        <div class="blog-list" v-else>
              <div v-for="post in $page.posts.edges" :key="post.node.id" class="blog-list-item">
                <small class="date">{{ post.node.date }}</small>
                <g-link
                  :to="post.node.path"
                  itemProp="url"
                  class="title"
                >
                  <span itemProp="headline">{{ post.node.title }}</span>
                </g-link>
              </div>
           
      </div>
      <!-- <div className="current-page-info">Page 0</div> -->
        <Pager 
        :info="$page.posts.pageInfo"
        prevLabel="PREV"
        nextLabel="NEXT"
         />
         
    </Layout>
</template>

<page-query>
query Posts($page: Int){
  posts : allPost(perPage: 10, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        title
        path
         date (format: "D MMM, Y")
      }
    }
  }
meta : metadata{
    siteName
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';
import Search from '@/components/filterPosts.vue';

export default {
    components: {
    Pager,
    Search
  },
    data() {
        return {
            bloglist: [],
        }
    },
  methods: {
    filterResults(res) {
        // console.log(this.$page.posts.edges[0].node.title);
        // console.log(res[0].node.title);
    },
  },
  created(){
    this.bloglist = this.$page.posts.edges;
    console.log(this.bloglist);
  }
}
</script>

<style  lang="scss">
nav[role="navigation"] {
  a{
      padding: 0.1rem 0.5rem 0.2rem 0.4rem;
  }
  a.active--exact{
      color: #fff;
      background: var(--color-primary);
      border-radius: 5px;
  }
}

</style>