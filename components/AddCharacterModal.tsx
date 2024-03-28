"use client";
import CrossIcon from "@/assets/svg/CrossIcon";
import useStore from "@/hooks/useStore";
import { People } from "@/shared/types";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import AddButton from "./AddButton";
import Character from "./Character";
import List from "./List";

export default function AddCharacterModal({ data }: { data: People[] }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <AddButton onClick={() => setShowModal(true)} />
      {showModal &&
        createPortal(
          <ModalContent data={data} onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
}

function ModalContent({
  data,
  onClose,
}: {
  data: People[];
  onClose: () => void;
}): JSX.Element {
  const { add } = useStore();
  return (
    <div className="modal flex-col fixed top-0 bottom-0 left-0 right-0 z-[1000] flex bg-black bg-opacity-50">
      <div className="m-auto flex flex-col justify-start items-center relative gap-12 px-10 pt-16 pb-10 rounded-3xl bg-[#2f2d4d]">
        <p className="  text-[40px] font-bold text-left text-white">
          Add Character
        </p>
        <div className="overflow-auto h-[300px]">
          <List
            data={data}
            renderItem={(item) => {
              return (
                <div
                  onClick={() => {
                    add(item.id);
                    onClose();
                  }}
                  key={item.id}
                >
                  <Character
                    name={item.name}
                    species={item.species}
                    homeworld={item.homeworld}
                  />
                </div>
              );
            }}
          />
        </div>
        <button
          onClick={onClose}
          className="flex justify-center items-center   absolute top-4 right-4 gap-2 p-3 rounded-xl"
        >
          <CrossIcon />
        </button>
      </div>
    </div>
  );
}
