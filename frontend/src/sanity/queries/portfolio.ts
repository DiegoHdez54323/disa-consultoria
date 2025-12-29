import groq from "groq";

export const allPortfolioProjectsQuery = groq`
  *[_type == "portfolioType"] | order(_createdAt desc) {
    _id,
    title,
    description,
    technologies,
    color,
    image{
      ...,
      asset->
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current
    },
    gradient,
    year,
    link
  }
`;

export const portfolioProjectsByCategorySlugQuery = groq`
  *[
    _type == "portfolioType" &&
    $slug in categories[]->slug.current
  ] | order(_createdAt desc) {
    _id,
    title,
    description,
    technologies,
    color,
    image{
      ...,
      asset->
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current
    },
    gradient,
    year,
    link
  }
`;

export const portfolioProjectByIdQuery = groq`
  *[_type == "portfolioType" && _id == $id][0] {
    _id,
    title,
    description,
    technologies,
    color,
    image{
      ...,
      asset->
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current
    },
    gradient,
    year,
    link
  }
`;
