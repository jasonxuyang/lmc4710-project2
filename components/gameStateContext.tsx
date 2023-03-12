import { EVENT, EVENTS, PILLAR } from "@/data/events";
import * as React from "react";
import { createContext, useContext, useReducer } from "react";

export enum ActionTypes {
  SET_PILLAR,
  DRAW_CARD,
  SET_DAY_CLOCK,
  SPEND_ENERGY,
}
type Action = { type: ActionTypes; payload?: any };
type Dispatch = (action: Action) => void;

type GameState = {
  [PILLAR.SLEEP]: number;
  [PILLAR.STUDY]: number;
  [PILLAR.SOCIAL]: number;
  dayClock: number;
  energy: number;
  deck: EVENT[];
  currentCard: EVENT | undefined;
};
type GameStateProviderProps = { children: React.ReactNode };

const INITIAL_GAME_STATE: GameState = {
  [PILLAR.SLEEP]: 50,
  [PILLAR.STUDY]: 50,
  [PILLAR.SOCIAL]: 50,
  dayClock: 60,
  energy: 60,
  deck: [...EVENTS],
  currentCard: undefined,
};
const GameStateContext = createContext<
  { gameState: GameState; dispatch: Dispatch } | undefined
>(undefined);

function gameStateReducer(gameState: GameState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_PILLAR: {
      if (!action?.payload) {
        console.error(`No payload defined for action type: ${action.type}`);
        return { ...gameState };
      }
      const pillar = action.payload?.pillar as PILLAR;
      const value = action.payload?.value;
      return { ...gameState, [pillar]: gameState[pillar] + value };
    }
    case ActionTypes.DRAW_CARD: {
      if (!gameState.deck.length)
        return { ...gameState, currentCard: undefined };
      const newCard = Math.floor(Math.random() * gameState.deck.length);
      const newDeck = [...gameState.deck];
      newDeck.splice(newCard, 1);
      return {
        ...gameState,
        currentCard: { ...gameState.deck[newCard] },
        deck: newDeck,
      };
    }
    case ActionTypes.SPEND_ENERGY: {
      return {
        ...gameState,
        energy: gameState.energy - 5,
      };
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
