import { atom } from "recoil";

const researchThreadState = atom({
  key: "researchThread", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default researchThreadState;
