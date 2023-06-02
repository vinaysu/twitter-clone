import { atom } from "recoil";

export const usersAtom = atom({
  key: "users",
  default: [],
});

export const userIdAtom = atom({
  key: "userId",
  default: "",
});
