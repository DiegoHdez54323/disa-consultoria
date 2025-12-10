import {defineType, defineField} from 'sanity'

export const servicesType = defineType({
  name: 'servicesType',
  title: 'Servicios',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Número',
      type: 'number',
      description: 'Un número identificador u orden del servicio.',
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'icon',
      title: 'Icono (lucide-astro)',
      type: 'string',
      description: 'Nombre del ícono de lucide-astro. Ejemplo: "Code2", "Cloud", "Sparkles".',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(80),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      validation: (Rule) => Rule.max(140),
    }),

    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(20),
    }),

    defineField({
      name: 'features',
      title: 'Características',
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
      name: 'gradientIndex',
      title: 'Clase de gradiente (index)',
      type: 'string',
      description:
        'Clase de Tailwind para el gradiente en cards del home. Ej: "from-primary/10 to-secondary/20" o una clase utilitaria personalizada.',
    }),

    defineField({
      name: 'gradientServicePage',
      title: 'Clase de gradiente (services page)',
      type: 'string',
      description: 'Clase de Tailwind para el gradiente en la página de servicios.',
    }),

    defineField({
      name: 'accentColor',
      title: 'Color de acento',
      type: 'string',
      description: 'Clase de Tailwind para el color de acento. Ej: "text-primary", "bg-pink-500".',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      number: 'number',
    },
    prepare(selection) {
      const {title, subtitle, number} = selection
      return {
        title: number ? `${number}. ${title}` : title,
        subtitle,
      }
    },
  },
})
