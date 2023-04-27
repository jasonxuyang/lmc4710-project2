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
  PREPARED = "PREPARED",
}

export enum PILLAR {
  SLEEP = "sleep",
  STUDY = "study",
  SOCIAL = "social",
}

export enum FLAGS {
  PREPARED = "When you study, you tend to know more. (Hints are enabled)",
  POPULAR = "When you are popular, you get more chances to choose what you want. (+1 reroll)",
  BURNT_OUT = "When you are burnt out, you tend to sleep in. (you lose a morning activity)",
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
  audio: string;
};

export type FLAG = {
  label: string;
  timeAcknowledged?: Date;
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
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: "/audio/fastfood.mp3"
  },
  {
    label: "Worked out with your friend",
    title:
      "You wake up a bit earlier than usual. Your friend texts you asking to go work out together. Do you go?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SLEEP, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: "/audio/workout.mp3"
  },
  {
    label: "Studied in the library",
    title:
      "You have a big exam coming up. Do you spend the morning studying at the library?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
    audio: "/audio/studying.mp3"
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
    audio: "/audio/sleep-in.mp3"
  },
  {
    label: "Grabbed Blue Donkey with a friend and study",
    title:
      "You wake up to a text from your friend asking to study at the library together. Do you go?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SLEEP, value: -5 },
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: "/audio/studying.mp3"
  },
  {
    label: "Went to a yoga class",
    title:
      "Your friend invited you to go to a yoga class this morning. Do you want to go?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: "/audio/yoga.mp3"
  },
  {
    label: "Went for a morning hike",
    title:
      "Your club is hosting a group sunrise hike. Do you wake up early and go?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SLEEP, value: -10 },
      { pillar: PILLAR.SOCIAL, value: 10 },
    ],
    audio: "/audio/hiking.mp3"
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
    audio: ""
  },
  {
    label: "Met up with a study group",
    title:
      "Your study group is holding a study session at the library. Do you go study and prep for your upcoming test?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
    audio: "/audio/studying.mp3"
  },
  {
    label: "Went to a career prep session",
    title:
      "Your club is hosting a career prep session and resume review. Do you participate?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
    audio: ""
  },
  {
    label: "Played basketball with friends",
    title:
      "Some of your friends invite you to play basketball with them at the CRC. Do you play with them?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 10 },
    ],
    audio: "/audio/basketball.mp3"
  },
  {
    label: "Took a nap",
    title:
      "You woke up feeling exhausted today. Do you take a nap to recharge?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.SOCIAL, value: -5 },
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SLEEP, value: 5 },
    ],
    audio: "/audio/sleep-in.mp3"
  },
  {
    label: "Planted trees",
    title:
      "Your club has a tree planting event at Piedmont Park. Do spend the day volunteering?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.SOCIAL, value: 10 },
      { pillar: PILLAR.SLEEP, value: -10 },
    ],
    audio: ""
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
    audio: ""
  },
  {
    label: "Watched a movie",
    title:
      "Your friend invites you to watch the new Marvel movie at Atlantic Station. Do you go?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SLEEP, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: ""
  },
  {
    label: "Went to a club meeting",
    title:
      "Your club has a meeting tonight, but you have a lot of studying to do. Do you go?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: ""
  },
  {
    label: "Partied at the Standard",
    title: "You get invited to a rooftop party at the Standard. Do you go?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.SLEEP, value: -10 },
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: ""
  },
  {
    label: "Stayed up studying for an exam",
    title: "You have a big exam tomorrow. Do you stay up late studying for it?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -10 },
      { pillar: PILLAR.SLEEP, value: -10 },
    ],
    audio: "/audio/study-alone.mp3"
  },
  {
    label: "Slept early",
    title:
      "You're feeling a bit tired. Do you stay in and have a movie night by yourself and sleep early?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
      { pillar: PILLAR.SLEEP, value: -10 },
    ],
    audio: ""
  },
];

export const MORNING_EVENTS = EVENTS.filter(
  (event) => event.time === TIME.MORNING
);
export const AFTERNOON_EVENTS = EVENTS.filter(
  (event) => event.time === TIME.AFTERNOON
);
export const NIGHT_EVENTS = EVENTS.filter((event) => event.time === TIME.NIGHT);
