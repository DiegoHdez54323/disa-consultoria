import { type QueryParams } from "sanity";
import { sanityClient } from "sanity:client";

/**
 * Wrapper recomendado por la doc de Sanity para hacer consultas desde Astro.
 * Usa el cliente proporcionado por la integración @sanity/astro.
 */

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  const { result } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    { filterResponse: false }
  );

  return {
    data: result,
  };
}
