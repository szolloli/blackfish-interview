import { Planet } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";

async function fetchPlanet(id: string) {
  const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch planet");
  }
  return response.json() as Promise<Planet>;
}

export function useSWAPIPlanet(id: string) {
  return useQuery({
    queryKey: ["planet", id],
    queryFn: () => fetchPlanet(id),
  });
}
