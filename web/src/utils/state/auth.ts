import { StateCreator } from "zustand";
interface AuthStateType {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
}

export interface AuthSlice {
  auth: AuthStateType;
  addToken: (newAuth: AuthStateType) => void;
  getToken: () => AuthStateType;
  removeToken: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set,
  get
) => ({
  auth: {
    access_token: "",
    expires_in: 0,
    refresh_token: "",
    scope: "",
    token_type: "",
    id_token: "",
  },
  addToken: (newAuth: AuthStateType) => set((state) => ({ auth: newAuth })),
  getToken: () => get().auth,
  removeToken: () =>
    set((state) => ({
      auth: {
        access_token: "",
        expires_in: 0,
        refresh_token: "",
        scope: "",
        token_type: "",
        id_token: "",
      },
    })),
});
