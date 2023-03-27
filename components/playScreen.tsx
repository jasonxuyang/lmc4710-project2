import { STATUS } from "@/data/events";
import styled from "styled-components";
import Buttons from "./buttons";
import Card from "./card";
import { useGameState } from "./gameStateContext";
import StatusBar from "./statusBar";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 24px;
`;

export default function PlayScreen() {
  const { gameState } = useGameState();
  if (gameState.status !== STATUS.PLAY) return null;
  return (
    <Layout>
      <StatusBar />
      <Card />
      <Buttons />
    </Layout>
  );
}
