import PlusIcon from "@/assets/svg/PlusIcon";
import React from "react";

function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mx-auto flex justify-center items-center   relative gap-2 p-6 rounded-xl bg-[#8575e6]"
    >
      <PlusIcon />
    </button>
  );
}

export default AddButton;
