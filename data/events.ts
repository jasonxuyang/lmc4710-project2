export enum TIME {
  MORNING = "morning",
  AFTERNOON = "afternoon",
  NIGHT = "night",
  ALL_DAY = "all day",
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
  {
    title: "Attend career fair?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
  },
  {
    title: "Watch a movie with friends?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
  },
  {
    title: "Take a nap?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SLEEP, value: 5 },
    ],
  },
  {
    title: "Attend a club meeting?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
  },
  {
    title: "Spend the day volunteering?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -10 },
    ],
  },
  {
    title: "Go out for drinks with coworkers?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
  },
  {
    title: "Stay up late studying for an exam?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -10 },
    ],
  },
];
