"use client";
import { useSWAPICharacter } from "@/api/useSWAPIcharacter";
import BackButton from "@/components/BackButton";
import CharacterDetailHeader from "@/components/CharacterDetailHeader";
import CharacterDetailInfo from "@/components/CharacterDetailInfo";
import useStore from "@/hooks/useStore";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const { data, isLoading, error } = useSWAPICharacter(params.id);
  const router = useRouter();
  const { remove } = useStore();

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Error</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-[8.3%] bg-[#1D1B39]">
      <div className="self-start md:absolute md:left-16 md:top-16  ">
        <BackButton />
      </div>
      <div className=" w-full ">
        <div className="float-end w-full max-w-[800px]">
          <CharacterDetailHeader
            name={data.name}
            species={data.species}
            handleRemove={() => {
              router.back();
              remove(data.id);
            }}
          />
          <div className="h-4" />
          <CharacterDetailInfo
            birthYear={data.birth_year}
            eyeColor={data.eye_color}
            skinColor={data.skin_color}
            hairColor={data.hair_color}
            home={data.homeworld}
            species={data.species}
            mass={data.mass}
            height={data.height}
            gender={data.gender}
          />
        </div>
      </div>
    </main>
  );
}
