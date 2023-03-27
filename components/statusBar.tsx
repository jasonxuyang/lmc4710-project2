import styled from "styled-components";
import Book from "./book";
import { useGameState } from "./gameStateContext";
import useFeelingStatus from "./useFeelingStatus";

const StatusBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  column-gap: 24px;
  height: 10vh;
  align-items: center;
`;
export default function StatusBar() {
  const { gameState } = useGameState();
  const { sleep, study, social } = gameState;
  const { sleepStatus, socialStatus, studyStatus } = useFeelingStatus();

  return (
    <StatusBarContainer>
      <div>
        Sleep: {sleepStatus} {sleep}
      </div>
      <div>
        Study: {studyStatus} {study}
      </div>
      <div>
        Social: {socialStatus} {social}
      </div>
    </StatusBarContainer>
  );
}
