import { TIME } from "@/data/events";
import styled, { css } from "styled-components";
import Book from "./book";
import {
  chooseCard,
  drawCard,
  progressTime,
  setPillar,
  setRerolls,
} from "./gameStateActions";
import { useGameState } from "./gameStateContext";

const ButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  column-gap: 24px;
  height: 20vh;
  align-items: center;
`;

type ButtonProps = {
  disabled?: boolean;
};
export const Button = styled.div<ButtonProps>`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px white solid;
  transition-duration: 0.3s;

  &:hover,
  focus {
    background-color: white;
    color: black;
    transform: translate(0px, -10px);
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
  const {
    currentCard,
    rerolls,
    currentTime,
    morningDeck,
    afternoonDeck,
    nightDeck,
  } = gameState;

  const rejectCard = () => {
    dispatch(drawCard());
    dispatch(setRerolls(rerolls - 1));
    // play reject audio
  };

  const acceptCard = () => {
    currentCard?.effects.forEach((effect) => {
      dispatch(setPillar(effect));
    });
    dispatch(chooseCard(currentCard!));
    dispatch(progressTime());
    dispatch(drawCard());
    new Audio(currentCard?.audio).play(); // play accept audio
  };

  const canReroll = () => {
    const hasRerolls = rerolls > 0;
    if (currentTime === TIME.MORNING)
      return hasRerolls && morningDeck.length > 0;
    else if (currentTime === TIME.AFTERNOON)
      return hasRerolls && afternoonDeck.length > 0;
    else return hasRerolls && nightDeck.length > 0;
  };

  return (
    <ButtonsContainer>
      <Button disabled={!canReroll()} onClick={rejectCard}>
        No ({rerolls})
      </Button>
      <Button onClick={acceptCard} disabled={!currentCard}>
        Yes
      </Button>
      <Book />
    </ButtonsContainer>
  );
}
