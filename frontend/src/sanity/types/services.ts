export interface Service {
  id: string;
  number: number;
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  gradientIndex?: string;
  gradientServicePage?: string;
  accentColor?: string;
}
