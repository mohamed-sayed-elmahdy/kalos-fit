
import { create } from "zustand";

const useStore = create((set) => ({
  payerName: "",
  setPayerName: (name) => set({ payerName: name }),
}));

export default useStore;
