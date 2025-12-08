import {defineType, defineField} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolioType',
  title: 'Portafolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(80),
    }),

    defineField({
      name: 'categories',
      title: 'Categoría',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'portfolioCategory'}],
        },
      ],
      validation: (Rule) => Rule.min(1).error('Selecciona al menos una categoría.'),
    }),

    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(20),
    }),

    defineField({
      name: 'technologies',
      title: 'Tecnologías',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'Lista de bullets como ["Feature 1", "Feature 2", ...].',
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          description: 'Describe la imagen para accesibilidad y SEO.',
          validation: (Rule) => Rule.required().error('Añade un texto alternativo para la imagen.'),
        }),
      ],
    }),

    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Clase de Tailwind para el color de acento. Ej: "text-primary", "bg-pink-500".',
    }),

    defineField({
      name: 'gradient',
      title: 'Gradient',
      type: 'string',
      description: 'Clase de Tailwind para el color de gradient. Ej: "from-primary to-accent".',
    }),

    defineField({
      name: 'year',
      title: 'Año',
      type: 'string',
      description: 'Año en el que se desarrolló el proyecto.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      number: 'number',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, number, media} = selection
      return {
        title: number ? `${number}. ${title}` : title,
        subtitle,
        media,
      }
    },
  },
})
