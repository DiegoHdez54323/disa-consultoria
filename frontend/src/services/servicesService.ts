import type { Service } from "../sanity/types/services";
import {
  allServicesQuery,
  serviceByNumberQuery,
  serviceByIdQuery,
} from "../sanity/queries/services";
import { loadQuery } from "../sanity/lib/load-query";

/**
 * Mapea un documento crudo de Sanity al tipo de dominio `Service`.
 */
function mapService(doc: any): Service {
  return {
    id: doc._id,
    number: doc.number,
    icon: doc.icon,
    title: doc.title,
    subtitle: doc.subtitle ?? undefined,
    description: doc.description,
    features: doc.features ?? [],
    gradientIndex: doc.gradientIndex ?? undefined,
    gradientServicePage: doc.gradientServicePage ?? undefined,
    accentColor: doc.accentColor ?? undefined,
  };
}

/**
 * Obtiene todos los servicios ordenados por `number`.
 */

export async function getAllServices(): Promise<Service[]> {
  try {
    const { data: docs } = await loadQuery<any[]>({
      query: allServicesQuery,
    });

    return (docs ?? []).map(mapService);
  } catch (error) {
    console.error(
      "[servicesService] Error al obtener todos los servicios:",
      error
    );
    throw new Error("No se pudieron obtener los servicios");
  }
}

/**
 * Obtiene un servicio por su campo `number`.
 * Devuelve `null` si no existe.
 */
export async function getServiceByNumber(
  number: number
): Promise<Service | null> {
  try {
    const { data: doc } = await loadQuery<any>({
      query: serviceByNumberQuery,
      params: { number },
    });

    if (!doc) return null;
    return mapService(doc);
  } catch (error) {
    console.error(
      `[servicesService] Error al obtener el servicio con number=${number}:`,
      error
    );
    throw new Error("No se pudo obtener el servicio.");
  }
}

/**
 * Obtiene un servicio por `_id` interno de Sanity.
 * Devuelve `null` si no existe.
 */
export async function getServiceById(id: string): Promise<Service | null> {
  try {
    const { data: doc } = await loadQuery<any>({
      query: serviceByIdQuery,
      params: { id },
    });

    if (!doc) return null;
    return mapService(doc);
  } catch (error) {
    console.error(
      `[servicesService] Error al obtener el servicio con id=${id}:`,
      error
    );
    throw new Error("No se pudo obtener el servicio por id.");
  }
}
