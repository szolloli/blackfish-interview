import { People } from "@/shared/types";
import { extractIdFromUrl } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";

async function fetchCharacter(id: string) {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch character");
  }
  return response.json() as Promise<People>;
}

export function useSWAPICharacter(id: string) {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id),
    select: (data) => {
      return {
        ...data,
        id: extractIdFromUrl(data.url),
      };
    },
  });
}
