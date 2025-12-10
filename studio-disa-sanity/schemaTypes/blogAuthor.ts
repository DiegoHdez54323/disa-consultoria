import {defineType, defineField} from 'sanity'

export const blogAuthor = defineType({
  name: 'blogAuthor',
  title: 'Autor de blog',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(80),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Rol / Puesto',
      type: 'string',
      description: 'Ejemplo: Desarrollador Full Stack, Consultor, CTO, etc.',
    }),

    defineField({
      name: 'avatar',
      title: 'Foto de perfil',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          description: 'Describe la foto para accesibilidad.',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'avatar',
    },
  },
})
