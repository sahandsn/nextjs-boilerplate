import { create } from "zustand";

interface BearState {
  bears: number;
  increasePopulation: (by: number) => void;
  removeAllBears: () => void;
  updateBears: (amount: number) => void;
}

export const useStore = create<BearState>()((set) => ({
  bears: 0,
  increasePopulation: (by) => set((state) => ({ bears: state.bears + by })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
