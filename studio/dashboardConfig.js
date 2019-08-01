export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d42a73739ca5dac2bedf297',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2qg2ftp1',
                  apiId: '03d08a67-e367-4d85-b363-f17b7c4be0a3'
                },
                {
                  buildHookId: '5d42a738022cfb4f6ec977dd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-czkd6dpr',
                  apiId: '13144e98-b4dc-4ef4-a5b5-2df14196b634'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixidust724/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-czkd6dpr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
