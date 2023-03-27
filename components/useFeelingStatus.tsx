import { SLEEP_STATUS, SOCIAL_STATUS, STUDY_STATUS } from "@/data/events";
import { useGameState } from "./gameStateContext";

export default function useFeelingStatus() {
  const { gameState } = useGameState();
  const { sleep, social, study } = gameState;
  let sleepStatus, studyStatus, socialStatus;

  if (sleep > 80) sleepStatus = SLEEP_STATUS.ENERGETIC;
  else if (sleep > 50) sleepStatus = SLEEP_STATUS.RESTED;
  else if (sleep > 30) sleepStatus = SLEEP_STATUS.TIRED;
  else sleepStatus = SLEEP_STATUS.BURNT_OUT;

  if (social > 60) socialStatus = SOCIAL_STATUS.POPULAR;
  else socialStatus = SOCIAL_STATUS.LONELY;

  if (study > 60) studyStatus = STUDY_STATUS.RELAXED;
  else studyStatus = STUDY_STATUS.STRESSED;

  return { sleepStatus, socialStatus, studyStatus };
}
