import {
  AFTERNOON_EVENTS,
  EVENT,
  MORNING_EVENTS,
  NIGHT_EVENTS,
  PILLAR,
  TIME,
} from "@/data/events";
import * as React from "react";
import { createContext, useContext, useReducer } from "react";

export enum ActionTypes {
  SET_PILLAR = "SET_PILLAR",
  SET_CURRENT_CARD = "SET_CURRENT_CARD",
  SET_ENERGY = "SET_ENERGY",
  SET_DECK = "SET_DECK",
  SET_CURRENT_TIME = "SET_CURRENT_TIME",
  DRAW_CARD = "DRAW_CARD",
  PROGRESS_TIME = "PROGRESS_TIME",
}
export type Action = { type: ActionTypes; value?: any };
export type Dispatch = (action: Action) => void;

export type GameState = {
  [PILLAR.SLEEP]: number;
  [PILLAR.STUDY]: number;
  [PILLAR.SOCIAL]: number;
  currentTime: TIME;
  morningDeck: EVENT[];
  afternoonDeck: EVENT[];
  nightDeck: EVENT[];
  currentCard: EVENT | undefined;
};
type GameStateProviderProps = { children: React.ReactNode };

const INITIAL_GAME_STATE: GameState = {
  [PILLAR.SLEEP]: 50,
  [PILLAR.STUDY]: 50,
  [PILLAR.SOCIAL]: 50,
  currentTime: TIME.MORNING,
  morningDeck: [...MORNING_EVENTS],
  afternoonDeck: [...AFTERNOON_EVENTS],
  nightDeck: [...NIGHT_EVENTS],
  currentCard: undefined,
};
const GameStateContext = createContext<
  { gameState: GameState; dispatch: Dispatch } | undefined
>(undefined);

function gameStateReducer(gameState: GameState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_PILLAR: {
      const pillar = action.value?.pillar as PILLAR;
      const value = action.value?.value;
      return { ...gameState, [pillar]: gameState[pillar] + value };
    }
    case ActionTypes.SET_CURRENT_CARD: {
      return { ...gameState, currentCard: action.value };
    }
    case ActionTypes.SET_DECK: {
      const { deckType, newDeck } = action.value;
      switch (deckType) {
        case TIME.MORNING:
          return { ...gameState, morningDeck: newDeck };
        case TIME.AFTERNOON:
          return { ...gameState, afternoonDeck: newDeck };
        case TIME.NIGHT:
          return { ...gameState, nightDeck: newDeck };
        default:
          console.error("Error: No time passed in");
          return gameState;
      }
    }
    case ActionTypes.SET_CURRENT_TIME: {
      return {
        ...gameState,
        currentTime: action.value,
      };
    }
    case ActionTypes.DRAW_CARD: {
      const { currentTime, morningDeck, afternoonDeck, nightDeck } = gameState;
      let newCardIndex, newDeck;
      if (currentTime === TIME.MORNING) {
        newCardIndex = Math.floor(Math.random() * morningDeck.length);
        newDeck = [...morningDeck];
        return {
          ...gameState,
          currentCard: newDeck.splice(newCardIndex, 1)[0],
          morningDeck: newDeck,
        };
      } else if (currentTime === TIME.AFTERNOON) {
        newCardIndex = Math.floor(Math.random() * afternoonDeck.length);
        newDeck = [...afternoonDeck];
        return {
          ...gameState,
          currentCard: newDeck.splice(newCardIndex, 1)[0],
          afternoonDeck: newDeck,
        };
      } else {
        newCardIndex = Math.floor(Math.random() * nightDeck.length);
        newDeck = [...nightDeck];
        return {
          ...gameState,
          currentCard: newDeck.splice(newCardIndex, 1)[0],
          nightDeck: newDeck,
        };
      }
    }
    case ActionTypes.PROGRESS_TIME: {
      const { currentTime } = gameState;
      if (currentTime === TIME.MORNING) {
        return {
          ...gameState,
          currentTime: TIME.AFTERNOON,
        };
      } else if (currentTime === TIME.AFTERNOON) {
        return {
          ...gameState,
          currentTime: TIME.NIGHT,
        };
      } else {
        return {
          ...gameState,
          morningDeck: [...MORNING_EVENTS],
          afternoonDeck: [...AFTERNOON_EVENTS],
          nightDeck: [...NIGHT_EVENTS],
          currentTime: TIME.MORNING,
        };
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GameStateProvider({ children }: GameStateProviderProps) {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    INITIAL_GAME_STATE
  );
  const value = { gameState, dispatch };
  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
}

function useGameState() {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error("useGameState must be used within a GameStateProvider");
  }
  return context;
}

export { GameStateProvider, useGameState };
