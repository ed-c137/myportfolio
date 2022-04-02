<template>
  <div class="filterbar">
      <div class="search">
          <span class="search-wrap">
          <input type="text" @keyup="searchResults" v-model="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </span>
        <div class="searchResults">
            <ul class="serchresultwrap" :class="{hide: this.filtered.length <= 0, show: this.filtered.length > 0}">
                <li v-for="res in filtered" :key="res.node.id" ><a :href="res.node.path">{{res.node.title}}</a></li>
            </ul>
        </div>
      </div>
  </div>
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
    emits: ['search-results'],
    data(){
        return{
            search: '',
            filtered: [],
        }
    },
    methods: {
        searchResults() {
            //console.log(this.search);
            if(this.search.length >= 2){
                let filteredres =  this.$static.allPost.edges.filter(post => {
                    return post.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
                });
                this.filtered = filteredres;
                console.log(this.filtered);
                // this.$emit('search-results',filteredres);
            }else{
                 this.filtered = '';
            }
        }
    }
}

</script>

<style lang="scss" scoped>
@import "@/assets/styles/function";
.filterbar{
    display: flex;
    justify-content: flex-end;
    padding: 0.01rem;
    padding-right: 0;
    margin-bottom: 1rem;
    // border: 1px solid rgb(245, 245, 245);
    .search{
        position: relative;
        .search-wrap{
            position: relative;
            display: inline-block;
            color: var(--color-primary);
            input{
                position: relative;
                vertical-align: top;
                -webkit-appearance: textfield;
                outline-offset: -2px;

                //width: 100%;
                padding: .34rem .8rem;
                padding-right: 2rem;
                border-radius: 5px;
                color: var(--color-text);
                border: 0;
                transition: background .3s,box-shadow .3s;
                background-color: var(--color-accent-bg);

                &:focus{
                    outline: 0;
                    box-shadow: inset 0 0 0 2px var(--color-primary);
                }
            }
            svg{
                // margin-left: -1.66rem;
                position: absolute;
                right: 0.5rem;
                width: 1rem;
                pointer-events: none;
                opacity: .6;
               top: 0.5rem;
            }
        }
    }
    .searchResults{
        position: absolute;
        top: 100%;
        right: 0;
        // width: max-content;
        background: #fff;
        z-index: 9999;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;

        border-radius: 4px;
        margin: 6px 0 0;
        padding: 0;
        text-align: left;
        height: auto;
        background: whitesmoke;
        border: none;
        z-index: 999;
        max-width: 320px;
        min-width: 300px;

        box-shadow: 0 1px 0 0 rgba(0,0,0,.2),0 2px 3px 0 rgba(0,0,0,.1);
        font-size: 0.9rem;
        
        ul{
            margin: 0;
            li{
                margin: 0;
                padding: 0;
                list-style-type: none;
                a{
                    text-decoration: none;
                    width: 100%;
                    height: 100%;
                    display: inline-block;
                    padding: 0.5rem 0.2rem 0.5rem 0.6rem;
                }
                &:last-child{
                    margin: 0;
                }

                &:not(:last-child){
                    border-bottom: 1px solid #eee;
                }
            
            }
        }
        @include for-tablet-portrait-up{
            max-width: 600px !important;
            min-width: 500px !important;
            ul{
                li{
                    // padding: 0.5rem 0.2rem;
                }
            }
        }
    }
}

.hide{
    display: none;
}
.show{
    display: block;
}
</style>
