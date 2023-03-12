export enum TIME {
  MORNING = "morning",
  AFTERNOON = "afternoon",
  NIGHT = "night",
}

export enum PILLAR {
  SLEEP = "sleep",
  STUDY = "study",
  SOCIAL = "social",
}

export type EFFECT = {
  pillar: PILLAR;
  value: number;
};

export type EVENT = {
  title: string;
  time: TIME;
  effects: EFFECT[];
};



export const EVENTS: EVENT[] = [
  {
    title: "Grab Chick-fil-a with a friend?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SLEEP, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
  },
  {
    title: "Study at the library?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
  },
  {
    title: "Go to a frat party?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SLEEP, value: -5 },
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 10 },
    ],
  },
];
