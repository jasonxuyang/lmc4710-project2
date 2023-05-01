import { SLEEP_STATUS, SOCIAL_STATUS, STUDY_STATUS } from "@/data/events";
import { useGameState } from "./gameStateContext";

export type FeelingStatus = {
  sleepStatus: SLEEP_STATUS;
  socialStatus: SOCIAL_STATUS;
  studyStatus: STUDY_STATUS;
};
export default function useFeelingStatus() {
  const { gameState } = useGameState();
  const { sleep, social, study } = gameState;
  let sleepStatus, studyStatus, socialStatus;

  // Sleep
  if (sleep >= 80) sleepStatus = SLEEP_STATUS.ENERGETIC;
  else if (sleep >= 60) sleepStatus = SLEEP_STATUS.RESTED;
  else if (sleep >= 41) sleepStatus = SLEEP_STATUS.AWAKE;
  else if (sleep >= 21) sleepStatus = SLEEP_STATUS.TIRED;
  else sleepStatus = SLEEP_STATUS.BURNT_OUT;

  // Study
  if (study >= 80) studyStatus = STUDY_STATUS.SCHOLAR;
  else if (study >= 60) studyStatus = STUDY_STATUS.PREPARED;
  else if (study >= 41) studyStatus = STUDY_STATUS.INDIFFERENT;
  else if (study >= 21) studyStatus = STUDY_STATUS.UNPREPARED;
  else studyStatus = STUDY_STATUS.STRESSED;

  // Social
  if (social >= 80) socialStatus = SOCIAL_STATUS.POPULAR;
  else if (social >= 60) socialStatus = SOCIAL_STATUS.OUT_GOING;
  else if (social >= 41) socialStatus = SOCIAL_STATUS.SOCIALABLE;
  else if (social >= 21) socialStatus = SOCIAL_STATUS.LONELY;
  else socialStatus = SOCIAL_STATUS.ANTI_SOCIAL;

  return { sleepStatus, socialStatus, studyStatus };
}
