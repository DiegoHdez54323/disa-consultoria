export type ServicesPackage = {
  name: string;
  price: string;
  tag: "Esencial" | "Crecimiento" | "Pro";
  features: string[];
};

export type ServicesPackageGroup = {
  groupName: string;
  packages: ServicesPackage[];
};

export type ServicesCategory = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  packageGroups: ServicesPackageGroup[];
  packages?: ServicesPackage[];
};
