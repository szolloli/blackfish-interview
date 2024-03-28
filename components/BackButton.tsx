import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
      className="flex justify-center items-center relative gap-2 p-2"
    >
      <div className="flex justify-center items-center   relative opacity-75 gap-[5.405629634857178px] p-3 rounded-lg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="  max-w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.94922 12L15.5137 0.435471C16.0944 -0.145157 17.0358 -0.145157 17.6164 0.435471C18.197 1.0161 18.197 1.95748 17.6164 2.53811L8.1545 12L17.6164 21.4619C18.197 22.0425 18.197 22.9839 17.6164 23.5645C17.0358 24.1452 16.0944 24.1452 15.5137 23.5645L3.94922 12Z"
            fill="#FFF6ED"
          ></path>
        </svg>
      </div>
      <p className="  text-[32px] font-bold text-left text-[#fff6ed]">Back</p>
    </div>
  );
}

export default BackButton;
