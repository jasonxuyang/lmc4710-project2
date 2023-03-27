import { STATUS } from "@/data/events";
import styled from "styled-components";
import { Button } from "./buttons";
import { resetState, setStatus, startNewDay } from "./gameStateActions";
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
  const { chosenCards, sleep, social, study, daysLeft } = gameState;
  const feelingStatus = useFeelingStatus();
  const { sleepStatus, socialStatus, studyStatus } = feelingStatus;
  if (gameState.status !== STATUS.END_DAY) return null;

  if (daysLeft === 0) {
    return (
      <Layout>
        <div>
          <Title>Congrats! You graduated!</Title>
          <p>
            You ended the game feeling {sleepStatus}, {socialStatus}, and{" "}
            {studyStatus}.
          </p>
        </div>

        <Button
          onClick={() => {
            dispatch(resetState());
            dispatch(setStatus(STATUS.PLAY));
          }}
        >
          Play again?
        </Button>
      </Layout>
    );
  }

  if (sleep <= 0 || social <= 0 || study <= 0) {
    const generateLoseMessage = () => {
      if (sleep <= 0)
        return "You slept through too many days in your morning class and the professor failed you.";
      if (social <= 0)
        return "Your loneliness started affecting your mental health, and you got to the point where you dropped out.";
      if (study <= 0)
        return "You didn't study enough and you failed your classes.";
    };
    return (
      <Layout>
        <div>
          <Title>Sorry, you failed to graduate.</Title>
          <p>{generateLoseMessage()}</p>
          <p>
            You ended the game feeling {sleepStatus}, {socialStatus}, and{" "}
            {studyStatus}.
          </p>
        </div>

        <Button
          onClick={() => {
            dispatch(resetState());
            dispatch(setStatus(STATUS.PLAY));
          }}
        >
          Play again?
        </Button>
      </Layout>
    );
  }

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
          dispatch(startNewDay(feelingStatus));
          dispatch(setStatus(STATUS.PLAY));
        }}
      >
        Go to sleep
      </Button>
    </Layout>
  );
}
