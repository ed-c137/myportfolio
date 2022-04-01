<template>
    <div class="bio">
        <p>
          Written by <strong>{{ $static.metadata.name }}</strong> {{ $static.metadata.summary || null}}
          <a :href="twitterLnk">
            Follow me on Twitter
          </a>
        </p>
      
    </div>
    
</template>

<static-query>
query{
   metadata{
      name
      summary
      twitter
      github
      email
      linkedin
   } 
}

</static-query>

<script>
export default{
    metaInfo(){
        return{
            title: this.$static.metadata.siteName,
        }
    },
    computed:{
        twitterLnk(){
           return `https://twitter.com/${this.$static.metadata.twitter || ''}`
        }
    },
    
}




</script>