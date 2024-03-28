import { useSWAPISpeciesFromArray } from "@/api/useSWAPIspecies";
import TrashBinIcon from "@/assets/svg/TrashBinIcon";
import React from "react";

function CharacterDetailHeader({
  name,
  species,
  handleRemove,
}: {
  name: string;
  species: string[];
  handleRemove: () => void;
}) {
  const speciesData = useSWAPISpeciesFromArray(species);

  return (
    <div className="max-w-[800px] min-h-[184px] relative flex items-center break-words justify-center p-8 rounded-[32px] bg-[#2f2d4d]">
      <div className="flex justify-between items-center text-wrap break-words w-full max-w-[736px] ">
        <div className="flex justify-start items-center text-wrap break-words    relative gap-6">
          <div className="w-[40px] break-words sm:w-[120px] h-[40px] sm:h-[120px] rounded-xl bg-white"></div>
          <div className="flex flex-col justify-center text-wrap break-words items-start   relative gap-0.5">
            <p className=" text-sm break-words font-semibold text-left uppercase text-[#f47b85]">
              {!speciesData.length
                ? "Human"
                : speciesData.map((species) => species.data?.name)}
            </p>
            <p className="break-words text-wrap text-xl sm:text-2l md:text-3xl font-bold text-left text-[#fff6ed]">
              {name}
            </p>
          </div>
        </div>
        <button
          onClick={handleRemove}
          className="flex flex-col justify-start items-start   gap-2"
        >
          <div className="flex justify-center items-center   max-w-[120px] relative gap-3 p-3 rounded-lg bg-[#f47b85]">
            <TrashBinIcon />
            <p className="hidden sm:inline  text-base font-bold text-left text-[#fff6ed]">
              Delete
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default CharacterDetailHeader;
