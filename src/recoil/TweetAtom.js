import { atom } from "recoil";

export const tweetAtom = atom({
  key: "tweet",
  default: [],
});

export const tweetMsgAtom = atom({
  key: "tweetMsg",
  default: "",
});

export const tweetDialog = atom({
  key: "dialog",
  default: false,
});
