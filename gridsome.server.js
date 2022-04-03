// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const siteMeta = require('./siteMetadata.js');

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // const category = addCollection('Category')
    // category.addReference('categories', 'Category')
    
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(async store => {
    store.addMetadata('postsPerPage', siteMeta.postsPerPage );
    store.addMetadata('name', siteMeta.author.name);
    store.addMetadata('summary', siteMeta.author.summary);
    store.addMetadata('twitter', siteMeta.author.social.twitter);
    store.addMetadata('github', siteMeta.author.social.github);
    store.addMetadata('email', siteMeta.author.social.email);
    store.addMetadata('linkedin', siteMeta.author.social.linkedin);
    store.addMetadata('facebook', siteMeta.author.social.facebook);
    store.addMetadata('instagram', siteMeta.author.social.instagram);
    });
}