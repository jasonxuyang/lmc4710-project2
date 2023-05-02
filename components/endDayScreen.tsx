import { STATUS } from "@/data/events";
import styled from "styled-components";
import { Button } from "./buttons";
import { resetState, setStatus, startNewDay } from "./gameStateActions";
import { useGameState } from "./gameStateContext";
import useFeelingStatus from "./useFeelingStatus";
import { useRecoilValue, useResetRecoilState } from "recoil";
import romanceThreadState from "@/recoil/romanceThreadState";
import clubThreadState from "@/recoil/clubThreadState";
import researchThreadState from "@/recoil/researchThreadState";

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
  const romanceThread = useRecoilValue(romanceThreadState);
  const resetRomanceThread = useResetRecoilState(romanceThreadState);
  const clubThread = useRecoilValue(clubThreadState);
  const resetClubThread = useResetRecoilState(clubThreadState);
  const researchThread = useRecoilValue(researchThreadState);
  const resetResearchThread = useResetRecoilState(researchThreadState);
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
            resetClubThread();
            resetResearchThread();
            resetRomanceThread();
            dispatch(setStatus(STATUS.PLAY));
            new Audio("/audio/slide-paper.mp3").play();
            new Audio("/audio/alarm.mp3").play();
          }}
          onMouseEnter={() => {
            new Audio("/audio/hover-on.mp3").play();
          }}
          onMouseLeave={() => {
            new Audio("/audio/hover-off.mp3").play();
          }}
        >
          Play again?
        </Button>
      </Layout>
    );
  }

  if (romanceThread > 10) {
    return (
      <Layout>
        <div>
          <Title>You dropped out to get married! Congrats!</Title>
          <p>
            You ended the game feeling {sleepStatus}, {socialStatus}, and{" "}
            {studyStatus}.
          </p>
        </div>

        <Button
          onClick={() => {
            dispatch(resetState());
            dispatch(setStatus(STATUS.PLAY));
            resetClubThread();
            resetResearchThread();
            resetRomanceThread();
            new Audio("/audio/slide-paper.mp3").play();
            new Audio("/audio/alarm.mp3").play();
          }}
          onMouseEnter={() => {
            new Audio("/audio/hover-on.mp3").play();
          }}
          onMouseLeave={() => {
            new Audio("/audio/hover-off.mp3").play();
          }}
        >
          Play again?
        </Button>
      </Layout>
    );
  }

  if (clubThread > 10) {
    return (
      <Layout>
        <div>
          <Title>
            You dropped out to start a start up with your club friends. Good
            luck!
          </Title>
          <p>
            You ended the game feeling {sleepStatus}, {socialStatus}, and{" "}
            {studyStatus}.
          </p>
        </div>

        <Button
          onClick={() => {
            dispatch(resetState());
            dispatch(setStatus(STATUS.PLAY));
            resetClubThread();
            resetResearchThread();
            resetRomanceThread();
            new Audio("/audio/slide-paper.mp3").play();
            new Audio("/audio/alarm.mp3").play();
          }}
          onMouseEnter={() => {
            new Audio("/audio/hover-on.mp3").play();
          }}
          onMouseLeave={() => {
            new Audio("/audio/hover-off.mp3").play();
          }}
        >
          Play again?
        </Button>
      </Layout>
    );
  }

  if (researchThread > 10) {
    return (
      <Layout>
        <div>
          <Title>
            Congrats! You graduated early and are planning to pursue a PHD.
          </Title>
          <p>
            You ended the game feeling {sleepStatus}, {socialStatus}, and{" "}
            {studyStatus}.
          </p>
        </div>

        <Button
          onClick={() => {
            dispatch(resetState());
            dispatch(setStatus(STATUS.PLAY));
            resetClubThread();
            resetResearchThread();
            resetRomanceThread();
            new Audio("/audio/slide-paper.mp3").play();
            new Audio("/audio/alarm.mp3").play();
          }}
          onMouseEnter={() => {
            new Audio("/audio/hover-on.mp3").play();
          }}
          onMouseLeave={() => {
            new Audio("/audio/hover-off.mp3").play();
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
            new Audio("/audio/slide-paper.mp3").play();
            new Audio("/audio/alarm.mp3").play();
          }}
          onMouseEnter={() => {
            new Audio("/audio/hover-on.mp3").play();
          }}
          onMouseLeave={() => {
            new Audio("/audio/hover-off.mp3").play();
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
          new Audio("/audio/alarm.mp3").play();
        }}
        onMouseEnter={() => {
          new Audio("/audio/hover-on.mp3").play();
        }}
        onMouseLeave={() => {
          new Audio("/audio/hover-off.mp3").play();
        }}
      >
        Go to sleep
      </Button>
    </Layout>
  );
}
