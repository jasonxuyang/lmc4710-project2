import { STATUS } from "@/data/events";
import styled from "styled-components";
import { Button } from "./buttons";
import { setStatus } from "./gameStateActions";
import { useGameState } from "./gameStateContext";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 24px 10%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const Body = styled.p`
  margin-bottom: 24px;
`;

export default function StartScreen() {
  const { gameState, dispatch } = useGameState();
  if (gameState.status !== STATUS.START) return null;

  return (
    <Layout>
      <Title>30 Days to Freedom</Title>
      <Body>
        There are 30 days left in the semester, and you find yourself struggling
        to balance your coursework, social life, and career prospects. You know
        that you must make the most of your limited time and energy in order to
        succeed in all areas of your life. Each day presents new challenges, and
        you must navigate them wisely if you hope to graduate.
      </Body>
      <Button
        onClick={() => {
          dispatch(setStatus(STATUS.PLAY));
          new Audio("/audio/alarm.mp3").play();
        }}
      >
        Good luck
      </Button>
    </Layout>
  );
}
