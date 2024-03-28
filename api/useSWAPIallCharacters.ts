import { PagedResults, People } from "@/shared/types";
import { extractIdFromUrl } from "@/utils/utils";
import { dataTagSymbol, useQuery } from "@tanstack/react-query";

async function fetchAllCharacters() {
  const response = await fetch(`https://swapi.dev/api/people/`);
  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json() as Promise<PagedResults<People>>;
}

export function useSWAPIallCharacters() {
  return useQuery({
    queryKey: ["character"],
    queryFn: () => fetchAllCharacters(),
    select: (data) => {
      return {
        ...data,
        results: data.results.map((entry) => {
          return { ...entry, id: extractIdFromUrl(entry.url) };
        }),
      };
    },
  });
}
