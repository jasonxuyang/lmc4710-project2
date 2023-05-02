import { THREAD, TIME } from "@/data/events";
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
import { useRecoilState } from "recoil";
import romanceThreadState from "@/recoil/romanceThreadState";
import clubThreadState from "@/recoil/clubThreadState";
import researchThreadState from "@/recoil/researchThreadState";

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
  const [romanceThread, setRomanceThread] = useRecoilState(romanceThreadState);
  const [clubThread, setClubThread] = useRecoilState(clubThreadState);
  const [researchThread, setResearchThread] =
    useRecoilState(researchThreadState);
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
    new Audio("/audio/slide-paper.mp3").play(); // play reject audio
  };

  const acceptCard = () => {
    currentCard?.effects.forEach((effect) => {
      dispatch(setPillar(effect));
    });
    if (currentCard?.thread) {
      const thread = currentCard.thread;
      if (thread === THREAD.ROMANCE) {
        setRomanceThread(romanceThread + 1);
      } else if (thread === THREAD.CLUB) {
        setClubThread(clubThread + 1);
      } else if (thread === THREAD.RESEARCH) {
        setResearchThread(researchThread + 1);
      }
    }
    dispatch(chooseCard(currentCard!));
    dispatch(progressTime());
    dispatch(drawCard());
    new Audio("/audio/slide-paper.mp3").play();
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

  const mouseEnter = () => {
    new Audio("/audio/hover-on.mp3").play();
  };

  const mouseLeave = () => {
    new Audio("/audio/hover-off.mp3").play();
  };

  return (
    <ButtonsContainer>
      <Button
        disabled={!canReroll()}
        onClick={rejectCard}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        No ({rerolls})
      </Button>
      <Button
        onClick={acceptCard}
        disabled={!currentCard}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        Yes
      </Button>
      <Book />
    </ButtonsContainer>
  );
}
