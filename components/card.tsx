import { TIME } from "@/data/events";
import { useEffect } from "react";
import styled from "styled-components";
import Dialogue from "./dialogue";
import { drawCard } from "./gameStateActions";
import { useGameState } from "./gameStateContext";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export default function Card() {
  const { gameState, dispatch } = useGameState();
  const { currentCard } = gameState;

  useEffect(() => {
    dispatch(drawCard());
  }, [dispatch]);

  return (
    <CardContainer>
      <Dialogue />
      {currentCard?.title}
    </CardContainer>
  );
}
