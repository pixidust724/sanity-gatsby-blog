export default {
    name: 'page',
    type: 'document',
    title: 'page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title:'Slug',
            options: {
                source: 'title',
                maxLength: 96
            }

        }
    ]

}