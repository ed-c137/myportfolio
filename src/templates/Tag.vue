<template>
 <ClientOnly>
      <Layout>
        <div>RECENT ARTICLES BY TAG</div>
        <h1>This is a list of blog articles with the tag: {{ $page.tag.title }}</h1>
        
        <!-- <Search /> -->
            
            <p v-if="$page.tag.belongsTo.edges.length === 0">
              No blog posts found. Add markdown posts to "content/blog" (or the
              directory you specified for the "gatsby-source-filesystem" plugin in
              gatsby-config.js).
            </p>  
            <div class="blog-list" v-else>
                  <div v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" class="blog-list-item">
                    <small class="date">{{ edge.node.date }}</small>
                    <g-link
                      :to="edge.node.path"
                      itemProp="url"
                      class="title"
                    >
                      <span itemProp="headline">{{ edge.node.title }}</span>
                    </g-link>
                  </div>
              
          </div>
          <!-- <div className="current-page-info">Page 0</div> -->
            <!-- <Pager 
            :info="$page.posts.pageInfo"
            prevLabel="PREV"
            nextLabel="NEXT"
            /> -->

      </Layout>
    </ClientOnly>
</template>

<page-query>
query ($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            title
            path
            date (format: "D MMM, Y")
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';


    export default{
        components: {
    Pager,
    },
    }
</script>