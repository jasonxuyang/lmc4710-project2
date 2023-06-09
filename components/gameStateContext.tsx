import {
  AFTERNOON_EVENTS,
  EVENT,
  FLAG,
  MORNING_EVENTS,
  NIGHT_EVENTS,
  PILLAR,
  SLEEP_STATUS,
  SOCIAL_STATUS,
  STATUS,
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
  SET_STATUS = "SET_STATUS",
  SET_REROLLS = "SET_REROLLS",
  CHOOSE_CARD = "CHOOSE_CARD",
  START_NEW_DAY = "START_NEW_DAY",
  RESET_STATE = "RESET_STATE",
  ADD_FLAG = "ADD_FLAG",
  READ_HINTS = "READ_HINTS",
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
  chosenCards: EVENT[];
  status: STATUS;
  daysLeft: number;
  rerolls: number;
  flags: FLAG[];
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
  chosenCards: [],
  status: STATUS.START,
  daysLeft: 30,
  rerolls: 2,
  flags: [],
};
const GameStateContext = createContext<
  { gameState: GameState; dispatch: Dispatch } | undefined
>(undefined);

// Background Audio
var bg_audio: HTMLAudioElement;
var curr_time = "";

const updateBGAudio = (time: string) => {
  if (curr_time == "") {
    curr_time = time;
    bg_audio = new Audio();
    bg_audio.src = "/audio/" + time + ".mp3";
    bg_audio.volume = 0.3;
    bg_audio.loop = true;
    bg_audio.load();
    bg_audio.play();
  }

  if (curr_time != time) {
    curr_time = time;
    var fadeOut = setInterval(function () {
      if (bg_audio.volume > 0) {
        bg_audio.volume =
          bg_audio.volume - 0.05 < 0 ? 0 : bg_audio.volume - 0.05;
      } else {
        clearInterval(fadeOut);
      }
    }, 2000);
    bg_audio.src = "/audio/" + time + ".mp3";
    bg_audio.volume = 0.3;
    bg_audio.loop = true;
    bg_audio.load();
    bg_audio.play();
    var fadeIn = setInterval(function () {
      if (bg_audio.volume < 0.3) {
        bg_audio.volume =
          bg_audio.volume + 0.05 > 0.3 ? 0.3 : bg_audio.volume + 0.05;
      } else {
        clearInterval(fadeIn);
      }
    }, 2000);
  }
};

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
    case ActionTypes.SET_STATUS: {
      return {
        ...gameState,
        status: action.value,
      };
    }
    case ActionTypes.SET_REROLLS: {
      return {
        ...gameState,
        rerolls: action.value,
      };
    }
    case ActionTypes.CHOOSE_CARD: {
      return {
        ...gameState,
        chosenCards: [...gameState.chosenCards, action.value],
      };
    }
    case ActionTypes.RESET_STATE: {
      return {
        ...INITIAL_GAME_STATE,
      };
    }
    case ActionTypes.ADD_FLAG: {
      return {
        ...gameState,
        flags: [...gameState.flags, { label: action.value }],
      };
    }
    case ActionTypes.READ_HINTS: {
      const readFlags = [...gameState.flags];
      readFlags.forEach((flag) => (flag.timeAcknowledged = new Date()));
      return {
        ...gameState,
        flags: [...readFlags],
      };
    }
    case ActionTypes.START_NEW_DAY: {
      const { sleepStatus, studyStatus, socialStatus } = action.value;
      return {
        ...gameState,
        morningDeck: [...MORNING_EVENTS],
        afternoonDeck: [...AFTERNOON_EVENTS],
        nightDeck: [...NIGHT_EVENTS],
        rerolls: socialStatus === SOCIAL_STATUS.POPULAR ? 3 : 2,
        currentTime:
          sleepStatus === SLEEP_STATUS.BURNT_OUT
            ? TIME.AFTERNOON
            : TIME.MORNING,
        chosenCards: [],
        daysLeft: gameState.daysLeft - 1,
      };
    }
    case ActionTypes.DRAW_CARD: {
      const { currentTime, morningDeck, afternoonDeck, nightDeck } = gameState;
      let newCardIndex, newDeck;
      document.documentElement.id = currentTime; // time flag for css
      document.body.id = "to-" + currentTime;
      updateBGAudio(currentTime);
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
          status: STATUS.END_DAY,
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
