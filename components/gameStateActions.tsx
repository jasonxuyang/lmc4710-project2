import {
  EFFECT,
  EVENT,
  FLAGS,
  SLEEP_STATUS,
  STATUS,
  TIME,
} from "@/data/events";
import { Action, ActionTypes } from "./gameStateContext";
import { FeelingStatus } from "./useFeelingStatus";

export function setPillar(effect: EFFECT): Action {
  return { type: ActionTypes.SET_PILLAR, value: effect };
}

export function setCurrentCard(card: EVENT): Action {
  return { type: ActionTypes.SET_CURRENT_CARD, value: card };
}

export function setDeck(deckType: TIME, newDeck: EVENT[]) {
  return { type: ActionTypes.SET_DECK, value: { deckType, newDeck } };
}

export function setCurrentTime(time: TIME) {
  return { type: ActionTypes.SET_CURRENT_TIME, value: time };
}

export function setStatus(status: STATUS) {
  return { type: ActionTypes.SET_STATUS, value: status };
}

export function chooseCard(card: EVENT) {
  return { type: ActionTypes.CHOOSE_CARD, value: card };
}

export function addFlag(flag: FLAGS) {
  return { type: ActionTypes.ADD_FLAG, value: flag };
}

export function drawCard() {
  return { type: ActionTypes.DRAW_CARD };
}

export function progressTime() {
  return { type: ActionTypes.PROGRESS_TIME };
}

export function startNewDay(status: FeelingStatus) {
  return { type: ActionTypes.START_NEW_DAY, value: status };
}

export function setRerolls(value: number) {
  return { type: ActionTypes.SET_REROLLS, value };
}

export function resetState() {
  return { type: ActionTypes.RESET_STATE };
}

export function readHints() {
  return { type: ActionTypes.READ_HINTS };
}
