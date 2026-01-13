import {defineType, defineField, defineArrayMember} from 'sanity'

export const servicesType = defineType({
  name: 'servicesType',
  title: 'Servicios (Soluciones)',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug (ID)',
      type: 'slug',
      description: 'Identificador unico del servicio',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
      description: 'Ej: Automatizaciones, Aplicaciones Web',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitulo',
      type: 'string',
      description: 'Ej: Eficiencia & Ahorro',
    }),

    defineField({
      name: 'description',
      title: 'Descripcion Corta',
      type: 'text',
      rows: 2,
      description: 'Descripcion breve de las tarjetas',
    }),

    //Configuracion visual
    defineField({
      name: 'icon',
      title: 'Nombre del Icono',
      type: 'string',
      description: 'Nombre del componente de lucide-react',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'color',
      title: 'Color Base (Tailwind)',
      type: 'string',
      description: 'Clase para el color del texto/icono.',
    }),

    defineField({
      name: 'gradient',
      title: 'Gradiente (Tailwind)',
      type: 'string',
      description: 'Clases para el fondo/gradiente',
    }),

    /**
     * NUEVO Grupos de paquetes
     */
    defineField({
      name: 'packageGroups',
      title: 'Grupos de Paquetes',
      type: 'array',
      description:
        'Cada grupo es un tipo de entrega dentro del servicio (ej: Landing Page) y contiene 3 paquetes.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'packageGroup',
          title: 'Grupo',
          fields: [
            defineField({
              name: 'groupName',
              title: 'Nombre del grupo',
              type: 'string',
              description: 'Ej: Landing Page / Página web completa / MVP Web',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'groupDescription',
              title: 'Descripción del grupo (opcional)',
              type: 'text',
              rows: 2,
              description: 'Contexto breve para este grupo.',
            }),
            defineField({
              name: 'packages',
              title: 'Paquetes de precios (3 niveles)',
              type: 'array',
              description: 'Define los 3 niveles: Esencial, Crecimiento, Pro',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'package',
                  title: 'Paquete',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Nombre del Plan',
                      type: 'string',
                      description: 'Ej. Automatización puntual',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'price',
                      title: 'Rango de Precio',
                      type: 'string',
                      description: 'Costo aproximado del paquete',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'tag',
                      title: 'Etiqueta de Nivel',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                      options: {
                        list: [
                          {title: 'Esencial', value: 'Esencial'},
                          {title: 'Crecimiento', value: 'Crecimiento'},
                          {title: 'Pro', value: 'Pro'},
                        ],
                        layout: 'radio',
                      },
                    }),
                    defineField({
                      name: 'features',
                      title: 'Caracteristicas (Features)',
                      type: 'array',
                      of: [{type: 'string'}],
                      description: 'Lista de puntos clave que incluye este paquete.',
                      validation: (Rule) => Rule.min(1),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'price',
                      tag: 'tag',
                    },
                    prepare({title, subtitle, tag}) {
                      return {
                        title: `${tag}: ${title}`,
                        subtitle,
                      }
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'groupName',
              subtitle: 'groupDescription',
            },
          },
        }),
      ],
    }),

    /**
     * LEGACY
     */
    defineField({
      name: 'packages',
      title: 'Paquetes de Precios (DEPRECATED)',
      type: 'array',
      hidden: false, // cámbialo a false si quieres verlo mientras migras
      description: 'Campo viejo',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'package',
          title: 'Paquete',
          fields: [
            defineField({
              name: 'name',
              title: 'Nombre del Plan',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Rango de Precio',
              type: 'string',
            }),
            defineField({
              name: 'tag',
              title: 'Etiqueta de Nivel',
              type: 'string',
              options: {
                list: [
                  {title: 'Esencial', value: 'Esencial'},
                  {title: 'Crecimiento', value: 'Crecimiento'},
                  {title: 'Pro', value: 'Pro'},
                ],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'features',
              title: 'Caracteristicas (Features)',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
        }),
      ],
    }),
  ],
})
