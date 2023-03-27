import { STATUS } from "@/data/events";
import styled from "styled-components";
import { Button } from "./buttons";
import { setStatus, startNewDay } from "./gameStateActions";
import { useGameState } from "./gameStateContext";
import useFeelingStatus from "./useFeelingStatus";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 64px 10%;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const EventsContainer = styled.div`
  margin-bottom: 16px;
`;

const SummaryContainer = styled.div`
  margin-bottom: 16px;
`;

export default function EndDayScreen() {
  const { gameState, dispatch } = useGameState();
  const { chosenCards } = gameState;
  const { sleepStatus, socialStatus, studyStatus } = useFeelingStatus();
  if (gameState.status !== STATUS.END_DAY) return null;

  return (
    <Layout>
      <div>
        <Title>Today you...</Title>
        <EventsContainer>
          {chosenCards.map((card, index) => {
            return <div key={index}>{card.label}</div>;
          })}
        </EventsContainer>

        <SummaryContainer>
          <p>
            You feel {sleepStatus}, {socialStatus}, {studyStatus}.
          </p>
        </SummaryContainer>
      </div>
      <Button
        onClick={() => {
          dispatch(startNewDay(sleepStatus));
          dispatch(setStatus(STATUS.PLAY));
        }}
      >
        Go to sleep
      </Button>
    </Layout>
  );
}
