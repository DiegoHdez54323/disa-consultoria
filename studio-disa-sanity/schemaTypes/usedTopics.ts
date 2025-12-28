import {defineType, defineField} from 'sanity'

export const usedTopics = defineType({
  name: 'usedTopics',
  title: 'Tópicos usados',
  type: 'document',
  fields: [
    defineField({
      name: 'topic',
      title: 'Tópico',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    }),

    defineField({
      name: 'blogCategory',
      title: 'Categoría de blog',
      type: 'reference',
      to: [{type: 'blogCategory'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: 'topic',
      subtitle: 'blogCategory.title',
      createdAt: 'createdAt',
    },
    prepare({title, subtitle, createdAt}) {
      const date = createdAt ? new Date(createdAt).toLocaleString() : ''
      return {
        title: title ?? '(No topic)',
        subtitle: [subtitle, date].filter(Boolean).join(' • '),
      }
    },
  },
})
