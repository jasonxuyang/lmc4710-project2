import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GameState, useGameState } from "./gameStateContext";

const StatusBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  column-gap: 24px;
  height: 10vh;
  align-items: center;
`;
export default function StatusBar() {
  const { gameState } = useGameState();

  return (
    <StatusBarContainer>
      <div>Time: {gameState.currentTime}</div>
      <div>Sleep: {gameState.sleep}</div>
      <div>Study: {gameState.study}</div>
      <div>Social: {gameState.social}</div>
    </StatusBarContainer>
  );
}
