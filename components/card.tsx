import { TIME } from "@/data/events";
import { useEffect } from "react";
import styled from "styled-components";
import { drawCard, setCurrentCard, setDeck } from "./gameStateActions";
import {
  ActionTypes,
  Dispatch,
  GameState,
  useGameState,
} from "./gameStateContext";

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
  const { currentCard, currentTime, morningDeck, afternoonDeck, nightDeck } =
    gameState;

  useEffect(() => {
    dispatch(drawCard());
  }, [dispatch]);

  return (
    <CardContainer>
      {currentCard ? currentCard.title : "No cards left in deck."}
    </CardContainer>
  );
}
