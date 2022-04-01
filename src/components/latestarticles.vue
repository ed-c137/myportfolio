<template>
  <section class="latest-articles">
      <div class="title">
            <h2>Latest Articles</h2>
      </div>
  </section>
</template>
<static-query>
{
  allPost {
    edges {
      node {
        id    
        title
        date
        path
      }
    }
  }
}
</static-query>
<script>
export default {

}
</script>

<style>

</style>