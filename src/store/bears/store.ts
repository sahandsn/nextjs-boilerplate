import { createStore } from "zustand/vanilla";

export type BearState = {
  bears: number;
};
export type BearActions = {
  increasePopulation: (by: number) => void;
  removeAllBears: () => void;
  updateBears: (amount: number) => void;
};

export type BearStore = BearState & BearActions;

export const defaultState: BearState = {
  bears: 0,
};

export const createBearStore = (initState: BearState = defaultState) => {
  return createStore<BearStore>()((set) => ({
    ...initState,
    increasePopulation: (by) => set((state) => ({ bears: state.bears + by })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
  }));
};
