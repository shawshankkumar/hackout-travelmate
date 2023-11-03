import { create } from "zustand";
import { AuthSlice, createAuthSlice } from "@/utils/state/auth";
import zukeeper from "zukeeper";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStoreZ = create<AuthSlice>()((...a) => ({
  ...persist(createAuthSlice, {
    name: "auth-travelmate",
    partialize: (state) => ({ auth: state.auth }),
    storage: createJSONStorage(() => localStorage),
  })(...a),
}));
