import { create } from "zustand";

type Store = {
  selectedCharacters: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
};

const useStore = create<Store>((set) => ({
  selectedCharacters: JSON.parse(
    localStorage.getItem("favouriteCharacters") ?? "[]",
  ),
  remove: (id: string) =>
    set((state) => {
      localStorage.setItem(
        "favouriteCharacters",
        JSON.stringify(state.selectedCharacters.filter((elem) => id != elem)),
      );
      return {
        selectedCharacters: state.selectedCharacters.filter(
          (elem) => id != elem,
        ),
      };
    }),
  add: (id: string) =>
    set((state) => {
      localStorage.setItem(
        "favouriteCharacters",
        JSON.stringify([...state.selectedCharacters, id]),
      );
      return { selectedCharacters: [...state.selectedCharacters, id] };
    }),
}));

export default useStore;
