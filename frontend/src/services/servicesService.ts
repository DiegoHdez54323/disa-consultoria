import type {
  ServicesCategory,
  ServicesPackage,
  ServicesPackageGroup,
} from "../sanity/types/services";
import { SERVICES_QUERY } from "../sanity/queries/services";
import { loadQuery } from "../sanity/lib/load-query";

/**
 * Mapea un documento crudo de Sanity al tipo de dominio `Service`.
 */

function mapServicePackage(doc: any): ServicesPackage {
  return {
    name: doc.name,
    price: doc.price,
    tag: doc.tag,
    features: doc.features,
  };
}

function mapServicePackageGroup(doc: any): ServicesPackageGroup {
  return {
    groupName: doc.groupName,
    packages: (doc.packages ?? []).map(mapServicePackage),
  };
}

function mapServicesCategory(doc: any): ServicesCategory {
  const packages: ServicesPackage[] = (doc.packages ?? []).map(
    mapServicePackage
  );
  const packageGroups: ServicesPackageGroup[] = (doc.packageGroups ?? []).map(
    mapServicePackageGroup
  );
  const resolvedPackageGroups =
    packageGroups.length > 0
      ? packageGroups
      : packages.length > 0
        ? [
            {
              groupName: "Paquetes",
              groupDescription: undefined,
              packages,
            },
          ]
        : [];
  return {
    id: doc.id,
    title: doc.title,
    subtitle: doc.subtitle,
    description: doc.description,
    icon: doc.icon,
    color: doc.color,
    gradient: doc.gradient,
    packageGroups: resolvedPackageGroups,
    packages: packages.length > 0 ? packages : undefined,
  };
}

/**
 * Obtiene todos los servicios ordenados por `number`.
 */

export async function getAllServices(): Promise<ServicesCategory[]> {
  try {
    const { data: docs } = await loadQuery<any[]>({
      query: SERVICES_QUERY,
    });

    return (docs ?? []).map(mapServicesCategory);
  } catch (error) {
    console.error(
      "[servicesService] Error al obtener todos los servicios:",
      error
    );
    throw new Error("No se pudieron obtener los servicios");
  }
}
