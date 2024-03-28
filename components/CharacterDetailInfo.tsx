import { useSWAPIPlanet } from "@/api/useSWAPIplanet";
import { useSWAPISpeciesFromArray } from "@/api/useSWAPIspecies";
import BioInfoIcon from "@/assets/svg/BioInfoIcon";
import BornIcon from "@/assets/svg/BornIcon";
import DescriptiveInfoIcon from "@/assets/svg/DescriptiveInfoIcon";
import EyeColorIcon from "@/assets/svg/EyeColorIcon";
import GenderIcon from "@/assets/svg/GenderIcon";
import HairColorIcon from "@/assets/svg/HairColorIcon";
import HomeworldIcon from "@/assets/svg/HomeworldIcon";
import MassIcon from "@/assets/svg/MassIcon";
import PronounsIcon from "@/assets/svg/PronounsIcon";
import SkinColorIcon from "@/assets/svg/SkinColorIcon";
import SpeciesIcon from "@/assets/svg/SpeciesIcon";
import React from "react";
import HeightIcon from "../assets/svg/HeightIcon";

type CharacterDetailInfoType = {
  birthYear: string;
  eyeColor: string;
  skinColor: string;
  hairColor: string;
  home: string;
  species: string[];
  gender: string;
  mass: string;
  height: string;
};

type typ = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function DetailInfo({ icon, title, value }: typ) {
  return (
    <div className="flex max-w-1/2 justify-start items-center   gap-4">
      <div className="flex justify-center items-center   relative gap-[5.405629634857178px] p-3 rounded-lg bg-[#f47b85]">
        {icon}
      </div>
      <div className="flex flex-col justify-start items-start   relative gap-0.5">
        <p className="  text-[10px] font-bold text-left uppercase text-[#f47b85]">
          {title}
        </p>
        <p className="  max-w-[239.46px] text-base text-left text-[#fff6ed]">
          {value}
        </p>
      </div>
    </div>
  );
}

function CharacterDetailInfo(props: CharacterDetailInfoType) {
  const { data, isLoading, error } = useSWAPIPlanet(props.home.split("/")[5]);
  const speciesData = useSWAPISpeciesFromArray(props.species);
  const biographicalInformation: typ[] = [
    {
      icon: <BornIcon />,
      title: "Born",
      value: props.birthYear,
    },
    {
      icon: <HomeworldIcon />,
      title: "Homeworld",
      value: data?.name ?? "N/A",
    },
  ];

  const descriptiveInformation: typ[] = [
    {
      icon: <SpeciesIcon />,
      title: "Species",
      value: speciesData.map(({ data }) => data?.name).join(","),
    },
    {
      icon: <MassIcon />,
      title: "Mass",
      value: props.mass,
    },
    {
      icon: <GenderIcon />,
      title: "Gender",
      value: props.gender,
    },
    {
      icon: <HeightIcon />,
      title: "Height",
      value: props.height,
    },
    {
      icon: <PronounsIcon />,
      title: "Pronouns",
      value: props.gender == "male" ? "He/Him" : "She/Her",
    },
    {
      icon: <HairColorIcon />,
      title: "Hair color",
      value: props.hairColor,
    },
    {
      icon: <EyeColorIcon />,
      title: "Eye color",
      value: props.eyeColor,
    },
    {
      icon: <SkinColorIcon />,
      title: "Sking color",
      value: props.skinColor,
    },
  ];
  return (
    <div className="max-w-[800px] flex flex-col overflow-hidden rounded-[40px] p-[30px] gap-8 bg-[#2f2d4d]">
      <div className="flex flex-col gap-4">
        <div className="flex justify-start items-center max-w-[736px] gap-3 rounded-lg bg-[#2f2d4d]">
          <BioInfoIcon />
          <p className="  text-base font-bold text-left text-[#fff6ed]">
            Biographical Information
          </p>
        </div>

        <div className="max-w-[738px] grid grid-cols-1 sm:grid-cols-2 overflow-hidden gap-4 rounded-3xl p-6 bg-[#3c3961]">
          {biographicalInformation.map((elem) => (
            <DetailInfo
              key={elem.title}
              icon={elem.icon}
              title={elem.title}
              value={elem.value}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-start items-center max-w-[736px]  gap-3 rounded-lg bg-[#2f2d4d]">
          <DescriptiveInfoIcon />
          <p className="  text-base font-bold text-left text-[#fff6ed]">
            Descriptive Information
          </p>
        </div>
        <div className="max-w-[738px] grid grid-cols-1 sm:grid-cols-2 p-6 gap-4 rounded-3xl bg-[#3c3961]">
          {descriptiveInformation.map((elem) => (
            <DetailInfo
              key={elem.title}
              icon={elem.icon}
              title={elem.title}
              value={elem.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterDetailInfo;
