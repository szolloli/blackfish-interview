import { useSWAPIPlanet } from "@/api/useSWAPIplanet";
import { useSWAPISpeciesFromArray } from "@/api/useSWAPIspecies";
import TrashBinIcon from "@/assets/svg/TrashBinIcon";
import { extractIdFromUrl } from "@/utils/utils";
import React from "react";

function Character({
  name,
  species,
  homeworld,
  onRemove,
}: {
  name: string;
  species: string[];
  homeworld: string;
  onRemove?: () => void;
}) {
  const speciesData = useSWAPISpeciesFromArray(
    species.map((species) => extractIdFromUrl(species)),
  );
  const { data, isLoading, error } = useSWAPIPlanet(
    extractIdFromUrl(homeworld),
  );

  return (
    <div className="flex justify-between    pl-2 sm:pl-4 pr-4 sm:pr-6 py-2 sm:py-4 rounded-[20px] bg-[#3c3961]">
      <div className="flex justify-center items-center   relative gap-6">
        <div className="  w-16 h-16 relative rounded-xl sm:rounded-lg bg-white" />
        <div className="flex flex-col justify-center items-start   relative gap-0.5">
          <p className="flex flex-row items-center   text-xs md:text-sm font-semibold text-left uppercase text-[#f47b85]">
            {!speciesData.length
              ? "Human"
              : speciesData.map((species) => species?.data?.name)}
            {origin && !isLoading && !error && data && (
              <span className="inline-block  border-[0.5px] border-[#f47b85] mx-2 h-[12px]" />
            )}
            {data?.name}
          </p>
          <p className=" flex-shrink-1 text-lg sm:text-xl md:text-3xl font-bold text-left text-[#fff6ed]">
            {name}
          </p>
        </div>
      </div>
      {onRemove && (
        <button
          onClick={(e) => {
            onRemove();
            e.stopPropagation();
          }}
          className="my-auto relative gap-[5.405629634857178px] p-3 rounded-lg bg-[#f47b85]"
        >
          <TrashBinIcon />
        </button>
      )}
    </div>
  );
}

export default Character;
