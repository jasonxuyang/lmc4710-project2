import { useEffect } from "react";
import styled from "styled-components";
import { ActionTypes, useGameState } from "./gameStateContext";

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
  const { currentCard, deck } = gameState;

  useEffect(() => {
    if (!currentCard && deck.length) dispatch({ type: ActionTypes.DRAW_CARD });
  }, [currentCard, deck.length, dispatch]);

  return (
    <CardContainer>
      {currentCard ? currentCard.title : "No cards left in deck."}
    </CardContainer>
  );
}
