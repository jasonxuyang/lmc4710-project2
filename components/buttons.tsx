import styled, { css } from "styled-components";
import { ActionTypes, useGameState } from "./gameStateContext";

const ButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  height: 20vh;
  align-items: center;
`;

type ButtonProps = {
  disabled?: boolean;
};
const Button = styled.div<ButtonProps>`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px white solid;

  &:hover,
  focus {
    background-color: white;
    color: black;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;
Button.defaultProps = { disabled: false };

export default function Buttons() {
  const { gameState, dispatch } = useGameState();
  const { currentCard } = gameState;

  const rejectCard = () => {
    dispatch({ type: ActionTypes.DRAW_CARD });
  };

  const acceptCard = () => {
    currentCard?.effects.forEach((effect) => {
      dispatch({ type: ActionTypes.SET_PILLAR, payload: effect });
    });
    dispatch({ type: ActionTypes.SPEND_ENERGY });
    dispatch({ type: ActionTypes.DRAW_CARD });
  };
  return (
    <ButtonsContainer>
      <Button disabled={!currentCard} onClick={rejectCard}>
        No
      </Button>
      <Button onClick={acceptCard} disabled={!currentCard}>
        Yes
      </Button>
    </ButtonsContainer>
  );
}
