import { json } from "react-router-dom";
import { atom } from "recoil";

let datafromLocal = "";

if (localStorage.getItem("user")) {
  datafromLocal = JSON.parse(localStorage.getItem("user"));
}

//all data that are stored in local and new registered user
export const allDataFromLocalStorage = atom({
  key: "allDataFromLocalStorage",
  default: [
    {
      name: "",
      email: "",
      phone: '',
      password: "",
    },
    ...datafromLocal,
  ],
});

// data of user that we have to send to register Page 3
export const userProfile = atom({
  key: "userProfile",
  default: {},
});

//the email of the user that is logged in and we have to show the data to on home page
export const emailOnHome = atom({
  key: "emailOnHome",
  default: "",
});
