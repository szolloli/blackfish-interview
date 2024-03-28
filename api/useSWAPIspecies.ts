import { Species } from "@/shared/types";
import { useQueries, useQuery } from "@tanstack/react-query";

async function fetchSpecies(id: string) {
  const response = await fetch(`https://swapi.dev/api/species/${id}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch species");
  }
  return response.json() as Promise<Species>;
}

export function useSWAPISpecies(id: string) {
  return useQuery({
    queryKey: ["species", id],
    queryFn: () => fetchSpecies(id),
  });
}

export function useSWAPISpeciesFromArray(ids: string[]) {
  return useQueries({
    queries: ids.map((id) => {
      return { queryKey: ["species"], queryFn: () => fetchSpecies(id) };
    }),
  });
}
