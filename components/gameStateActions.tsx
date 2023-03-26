import { EFFECT, EVENT, TIME } from "@/data/events";
import { Action, ActionTypes, Dispatch, GameState } from "./gameStateContext";

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

export function drawCard() {
  return { type: ActionTypes.DRAW_CARD };
}

export function progressTime() {
  return { type: ActionTypes.PROGRESS_TIME };
}
