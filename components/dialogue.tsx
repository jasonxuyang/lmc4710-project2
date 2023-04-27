import { SLEEP_STATUS, TIME } from "@/data/events";
import styled from "styled-components";
import { useGameState } from "./gameStateContext";
import useFeelingStatus from "./useFeelingStatus";

const DialogueContainer = styled.div`
  margin: 16px;
  opacity: 0.5;
`;

export default function Dialogue() {
  const { gameState } = useGameState();
  const { currentTime, daysLeft } = gameState;
  const { sleepStatus } = useFeelingStatus();

  const generateMessage = () => {
    if (currentTime === TIME.MORNING) {
      if (sleepStatus === SLEEP_STATUS.TIRED) {
        return `You wake up a little bit later than usual. You feel tired. There are ${daysLeft} days until graduation.`;
      }
      return `It's morning, and you have a choice to make. There are ${daysLeft} days until graduation.`;
    } else if (currentTime === TIME.AFTERNOON) {
      if (sleepStatus === SLEEP_STATUS.BURNT_OUT) {
        return `It's already the afternoon. You wake up exhausted. There are ${daysLeft} days until graduation.`;
      }
      return "It's the afternoon. What do you want to do?";
    } else currentTime === TIME.NIGHT;
    return "It's nighttime. The day is almost over.";
  };

  return <DialogueContainer>{generateMessage()}</DialogueContainer>;
}
