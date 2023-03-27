import {
  FLAGS,
  SLEEP_STATUS,
  SOCIAL_STATUS,
  STATUS,
  STUDY_STATUS,
} from "@/data/events";
import { useEffect } from "react";
import styled from "styled-components";
import Book from "./book";
import Buttons from "./buttons";
import Card from "./card";
import { addFlag } from "./gameStateActions";
import { useGameState } from "./gameStateContext";
import StatusBar from "./statusBar";
import useFeelingStatus from "./useFeelingStatus";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 24px;
`;

export default function PlayScreen() {
  const { gameState, dispatch } = useGameState();
  const { flags } = gameState;
  const { sleepStatus, studyStatus, socialStatus } = useFeelingStatus();

  useEffect(() => {
    const handleFlags = () => {
      if (
        !flags.some((flag) => flag.label === FLAGS.BURNT_OUT) &&
        sleepStatus === SLEEP_STATUS.BURNT_OUT
      ) {
        dispatch(addFlag(FLAGS.BURNT_OUT));
      }
      if (
        !flags.some((flag) => flag.label === FLAGS.POPULAR) &&
        socialStatus === SOCIAL_STATUS.POPULAR
      ) {
        dispatch(addFlag(FLAGS.POPULAR));
      }
      if (
        !flags.some((flag) => flag.label === FLAGS.PREPARED) &&
        studyStatus === STUDY_STATUS.PREPARED
      ) {
        dispatch(addFlag(FLAGS.PREPARED));
      }
    };
    handleFlags();
  }, [dispatch, flags, sleepStatus, socialStatus, studyStatus]);

  if (gameState.status !== STATUS.PLAY) return null;
  return (
    <Layout>
      <StatusBar />
      <Card />
      <Buttons />
    </Layout>
  );
}
