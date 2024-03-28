"use client";
import { useSWAPIallCharacters } from "@/api/useSWAPIallCharacters";
import AddCharacterModal from "@/components/AddCharacterModal";
import Character from "@/components/Character";
import List from "@/components/List";
import useStore from "@/hooks/useStore";
import { extractIdFromUrl } from "@/utils/utils";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data, isLoading, error } = useSWAPIallCharacters();

  const { selectedCharacters, remove } = useStore();

  if (isLoading || error || !data)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between bg-[#1D1B39] py-[120px]"></main>
    );

  return (
    <main className="flex min-h-screen flex-col items-stretch bg-[#1D1B39] p-[8.3%]">
      <div className="bg-[#2F2D4D] max-px-40 px-auto py-28 px-2 gap-10 rounded-2xl w-full flex flex-col items-center ">
        <p className="flex text-2xl sm:text-[40px] font-bold text-center text-white">
          Favourite characters
        </p>
        <List
          data={data?.results.filter((character) =>
            selectedCharacters.includes(character.id),
          )}
          renderItem={(item) => {
            return (
              <div
                onClick={() => {
                  router.push(`/character/${extractIdFromUrl(item.url)}`);
                }}
                key={item.id}
              >
                <Character
                  name={item.name}
                  species={item.species}
                  homeworld={item.homeworld}
                  onRemove={() => remove(item.id)}
                />
              </div>
            );
          }}
        />
        <AddCharacterModal
          data={data?.results.filter(
            (character) => !selectedCharacters.includes(character.id),
          )}
        />
      </div>
    </main>
  );
}
