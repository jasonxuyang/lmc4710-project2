export enum TIME {
  MORNING = "morning",
  AFTERNOON = "afternoon",
  NIGHT = "night",
  ALL_DAY = "all day",
}

export enum SLEEP_STATUS {
  BURNT_OUT = "BURNT_OUT",
  TIRED = "TIRED",
  RESTED = "RESTED",
  ENERGETIC = "ENERGETIC",
}

export enum SOCIAL_STATUS {
  POPULAR = "POPULAR",
  LONELY = "LONELY",
}

export enum STUDY_STATUS {
  STRESSED = "STRESSED",
  RELAXED = "RELAXED",
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
  label: string;
  title: string;
  time: TIME;
  effects: EFFECT[];
};

export enum STATUS {
  START = "START",
  PLAY = "PLAY",
  END_DAY = "END_DAY",
}

export type DIALOGUE = {
  message: string;
  effect: EFFECT;
};

export const EVENTS: EVENT[] = [
  {
    label: "Grabbed Chick-fil-a with a friend",
    title:
      "On the way to class you see your friend, and they ask if you want to grab Chick-fil-A. Do you go?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SLEEP, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
  },
  {
    label: "Studied in the library",
    title:
      "You have a big exam coming up. Do you head to the library to study?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
  },
  {
    label: "Slept in",
    title:
      "Your alarm clock goes off, but you still feel tired. Do you sleep in and skip your 8 AM?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SLEEP, value: 5 },
      { pillar: PILLAR.STUDY, value: -5 },
    ],
  },
  {
    label: "Went to a frat party",
    title:
      "You heard about a frat party that is going on tonight. Do you want to go?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.SLEEP, value: -5 },
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 10 },
    ],
  },
  {
    label: "Went to career fair",
    title:
      "Career fair is today and you still are looking for a job. Do you attend career fair?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
  },
  {
    label: "Watched a movie",
    title:
      "Your friend invites you to watch the new Marvel movie at Atlantic Station. Do you go?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
  },
  {
    label: "Took a nap",
    title:
      "You woke up feeling exhausted today. Do you take a nap to recharge?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SLEEP, value: 5 },
    ],
  },
  {
    label: "Went to a club meeting",
    title:
      "Your club has a meeting tonight, but you have a lot of studying to do. Do you go?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
  },
  {
    label: "Planted trees",
    title:
      "Your club has a tree planting event at Piedmont Park. Do spend the day volunteering?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -10 },
    ],
  },
  {
    label: "Partied at the Standard",
    title: "You get invited to a rooftop party at the Standard. Do you go?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
  },
  {
    label: "Stayed up studying for an exam",
    title: "You have a big exam tomorrow. Do you stay up late studying for it?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -10 },
    ],
  },
];

export const MORNING_EVENTS = EVENTS.filter(
  (event) => event.time === TIME.MORNING
);
export const AFTERNOON_EVENTS = EVENTS.filter(
  (event) => event.time === TIME.AFTERNOON
);
export const NIGHT_EVENTS = EVENTS.filter((event) => event.time === TIME.NIGHT);
