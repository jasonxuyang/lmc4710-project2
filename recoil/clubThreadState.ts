import { atom } from "recoil";

const clubThreadState = atom({
  key: "clubThread", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default clubThreadState;
