import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      currentUser: null,
      setCurrentUser: (newUser) => set({ currentUser: newUser }),
      removeCurrentUser: () => set({ currentUser: null }),
      updateCurrentUser: (updatedUser) => set({ currentUser: updatedUser }),
    }),
    {
      name: "auth-storage", // required name for localStorage key
    }
  )
);

export default useAuthStore;
