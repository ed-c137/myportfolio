// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Edrick.xyz',
  siteUrl: `https://github/portfoliogatsby/`,
  siteDescription: `A personal portfolio site with blog built using Gatsby.`,
  
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/blog/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          // categories: {
          //   typeName: 'Category',
          //   create: true,
          // },
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: './content/projects/**/*.md',
      }
    }
  ],
  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:id',
    // Category: '/category/:id',
    Project: '/project/:title',
  },
  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  }
}
