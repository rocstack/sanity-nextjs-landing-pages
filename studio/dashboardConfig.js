export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fdb83a55461de0bf9bdab20',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qj9hhu9s',
                  apiId: '50cc0a3a-445e-42d7-bcbc-6c885396703b'
                },
                {
                  buildHookId: '5fdb83a543604a0a1f4a7e26',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fujxvf3t',
                  apiId: 'f61e3fbf-6d42-41a2-9cd7-fecf48781d92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rocstack/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fujxvf3t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
