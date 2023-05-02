import { atom } from "recoil";

const romanceThreadState = atom({
  key: "romanceThread", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default romanceThreadState;
