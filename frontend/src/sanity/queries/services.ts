import groq from "groq";

export const allServicesQuery = groq`
  *[_type == "servicesType"] | order(number asc) {
    _id,
    number,
    icon,
    title,
    subtitle,
    description,
    features,
    gradientIndex,
    gradientServicePage,
    accentColor
  }
`;

export const serviceByNumberQuery = groq`
  *[_type == "servicesType" && number == $number][0] {
    _id,
    number,
    icon,
    title,
    subtitle,
    description,
    features,
    gradientIndex,
    gradientServicePage,
    accentColor
  }
`;

export const serviceByIdQuery = groq`
  *[_type == "servicesType" && _id == $id][0] {
    _id,
    number,
    icon,
    title,
    subtitle,
    description,
    features,
    gradientIndex,
    gradientServicePage,
    accentColor
  }
`;
