import {defineType, defineField} from 'sanity'

export const portfolioCategory = defineType({
  name: 'portfolioCategory', // ID interno del tipo
  title: 'Categoría de portafolio', // Nombre visible en el Studio
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      icon: 'icon',
    },
    prepare(selection) {
      const {title, subtitle, icon} = selection
      return {
        title: icon ? `${icon} ${title}` : title,
        subtitle,
      }
    },
  },
})
