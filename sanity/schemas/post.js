export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'dataPosted',
      title: 'Date Posted',
      type: 'date',
    },
    {
      title: 'Tools',
      name: 'tools',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'test',
      title: 'Test',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
