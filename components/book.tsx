import { STUDY_STATUS } from "@/data/events";
import { useState } from "react";
import { BiBookReader } from "react-icons/bi";
import styled, { css } from "styled-components";
import { readHints } from "./gameStateActions";
import { useGameState } from "./gameStateContext";
import useFeelingStatus from "./useFeelingStatus";

const BookContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  position: relative;
`;

const Icon = styled.div`
  font-size: 42px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const Tooltip = styled.div`
  // display: none;
  position: absolute;
  bottom: 100%;
  right: 100%;
  width: 400px;
  background-color: white;
  color: black;
  padding: 16px;
  border: 2px black solid;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const Dot = styled.div`
  position: absolute;
  bottom: 70%;
  right: 10%;
  height: 16px;
  width: 16px;
  background-color: red;
  border-radius: 8px;
`;

export default function Book() {
  const { gameState, dispatch } = useGameState();
  const { flags } = gameState;
  const { studyStatus } = useFeelingStatus();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const renderHints = () => {
    if (studyStatus === STUDY_STATUS.STRESSED) {
      return "Hints disabled. Try studying more.";
    } else {
      if (!flags.length)
        return "No hints available. Keep playing to discover more.";
      else {
        return flags.map((flag, index) => {
          return <div key={index}>{flag.label}</div>;
        });
      }
    }
  };
  const isNotificationVisible =
    flags.some((flag) => flag?.timeAcknowledged === undefined) &&
    studyStatus === STUDY_STATUS.PREPARED;

  return (
    <BookContainer>
      <Icon
        onClick={() => {
          if (isTooltipOpen) dispatch(readHints());
          setIsTooltipOpen((isTooltipOpen) => !isTooltipOpen);
        }}
      >
        <BiBookReader />
      </Icon>
      {isNotificationVisible && <Dot />}
      {isTooltipOpen && <Tooltip>{renderHints()}</Tooltip>}
    </BookContainer>
  );
}
