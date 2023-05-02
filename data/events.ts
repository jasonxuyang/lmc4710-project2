export enum TIME {
  MORNING = "morning",
  AFTERNOON = "afternoon",
  NIGHT = "night",
  ALL_DAY = "all day",
}

export enum SLEEP_STATUS {
  BURNT_OUT = "BURNT OUT",
  TIRED = "TIRED",
  AWAKE = "AWAKE",
  RESTED = " WELL RESTED",
  ENERGETIC = "ENERGETIC",
}

export enum SOCIAL_STATUS {
  POPULAR = "POPULAR",
  OUT_GOING = "OUTGOING",
  SOCIALABLE = "SOCIALABLE",
  LONELY = "LONELY",
  ANTI_SOCIAL = "ANTISOCIAL",
}

export enum STUDY_STATUS {
  STRESSED = "STRESSED",
  UNPREPARED = "UNPREPARED",
  INDIFFERENT = "INDIFFERENT",
  PREPARED = "PREPARED",
  SCHOLAR = "SCHOLARLY",
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

export enum THREAD {
  ROMANCE = "ROMANCE",
  CLUB = "CLUB",
  RESEARCH = "RESEARCH",
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
  thread?: THREAD;
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
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.STUDY, value: -5 },
    ],
    audio: "/audio/fastfood.mp3",
  },
  {
    label: "Worked out with your friend",
    title:
      "While in bed you receive a text from your friend asking to go work out together. Do you go?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/workout.mp3",
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
    audio: "/audio/studying.mp3",
  },
  {
    label: "Got a head start before class",
    title:
      "You have class in another hour. Do you get a head start and look at the slides?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/study-alone.mp3",
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
    audio: "/audio/sleep-in.mp3",
  },
  {
    label: "Took a nap after class",
    title:
      "After your morning classes, do you head back to your apartment to sleep in?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SLEEP, value: 5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
    audio: "/audio/sleep-in.mp3",
  },
  {
    label: "Went and studied at the library with your friend",
    title:
      "While in bed you receive a text from your friend asking to go study at the library together. Do you go?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/studying.mp3",
  },
  {
    label: "Went to a yoga class",
    title:
      "Your friend invited you to go to a yoga class this morning. Do you want to go?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: 5 },
      { pillar: PILLAR.STUDY, value: -5 },
    ],
    audio: "/audio/yoga.mp3",
  },
  {
    label: "Went to Blue Donkey and studied at the student lounge",
    title:
      "You feel like you need a boost of energy and want to study. Do you go to Blue Donkey and get a coffee?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SLEEP, value: 5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
    audio: "/audio/yoga.mp3", // austin -> produce COFEE SOUNDS
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
    audio: "/audio/hiking.mp3",
  },
  {
    label: "Crammed some studying before the exam",
    title: "You have an exam in an hour. Do you cram for the exam?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SLEEP, value: -10 },
      { pillar: PILLAR.STUDY, value: 10 },
    ],
    audio: "/audio/study-alone.mp3",
  },
  {
    label: "Skipped a breakfast meet up to catch some Z's",
    title:
      "You promised to meet up with your friends for breakfast, but feel like sleeping in. Do you skip the breakfast and sleep in?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SOCIAL, value: -10 },
      { pillar: PILLAR.SLEEP, value: 10 },
    ],
    audio: "/audio/sleep-in.mp3",
  },
  {
    label: "Skipped out on friends to do homework",
    title:
      "You want to head back to your apartment after your morning class to finish your homework, but your friends are inviting you to hang out. Do you go home and study?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.SOCIAL, value: -10 },
      { pillar: PILLAR.STUDY, value: 10 },
    ],
    audio: "/audio/study-alone.mp3",
  },
  {
    label: "Skipped a quiz to sleep in",
    title:
      "You have a quiz today, but you would rather catch up on sleep. Do you sleep in?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.STUDY, value: -10 },
      { pillar: PILLAR.SLEEP, value: 10 },
    ],
    audio: "/audio/sleep-in.mp3",
  },
  {
    label: "Skipped class to eat out",
    title:
      "Your friends are wanting to skip morning lecture to go eat out instead. Do you join them?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.STUDY, value: -10 },
      { pillar: PILLAR.SOCIAL, value: 10 },
    ],
    audio: "/audio/fastfood.mp3",
  },

  // ========== AFTERNOON ========== //
  {
    label: "Went to career fair",
    title:
      "Career fair is today and you still are looking for a job. Do you attend career fair?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
    audio: "/audio/gathering.mp3",
  },
  {
    label: "Caught up on a project",
    title:
      "You are falling behind on one of your projects. Do you stop procrastinating and catch up on it?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/study-alone.mp3",
  },
  {
    label: "Played frisbee with friends",
    title:
      "Walking across Tech Green, you see some of your friends playing frisbee. Do you join them?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/paper.mp3", // austin -> frisbee audio
  },
  {
    label: "Ate lunch with your club mates",
    title:
      "Your club is holding a lunch meetup at Tech Green. Do you join them?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.STUDY, value: -5 },
    ],
    audio: "/audio/fastfood.mp3",
  },
  {
    label: "Slept through afternoon lectures",
    title:
      "After your morning classes you feel like heading back home to sleep instead of attending your afternoon classes. Do you head home?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.SLEEP, value: 5 },
      { pillar: PILLAR.STUDY, value: -5 },
    ],
    audio: "/audio/sleep-in.mp3",
  },
  {
    label: "Took a nap instead of playing raquetball",
    title:
      "You feel like taking a nap after classes, but your friend texts you to join them to play racquetball. Do you take your nap?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.SLEEP, value: 5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
    audio: "/audio/sleep-in.mp3",
  },
  {
    label: "Met up with a study group",
    title:
      "The library is offering free coffee after 2pm. Do you go study and prep for your upcoming test?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
      { pillar: PILLAR.SLEEP, value: 5 },
    ],
    audio: "/audio/studying.mp3",
  },
  {
    label: "Went to a career prep session",
    title:
      "Your club is hosting a career prep session and resume review. Do you participate?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/workshop.mp3",
  },
  {
    label: "Relaxed at Tech Green with your friends",
    title: "Your friends want to lie down and relax at Tech Green. Do you go?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: 5 },
    ],
    audio: "/audio/yoga.mp3",
  },
  {
    label: "Played basketball with friends",
    title:
      "Some of your friends invite you to play basketball with them at the CRC. Do you play with them?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.SOCIAL, value: 10 },
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/basketball.mp3",
  },
  {
    label: "Took a nap",
    title: "You still feel tired. Do you take a nap to recharge?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.SOCIAL, value: -5 },
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SLEEP, value: 5 },
    ],
    audio: "/audio/sleep-in.mp3",
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
    audio: "/audio/planting.mp3",
  },
  {
    label: "Slept in, procrastinating further on an assignment",
    title:
      "You really want to sleep, but have an assignment due tonight at 11:59pm. Do you sleep anyways?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.SLEEP, value: 10 },
      { pillar: PILLAR.STUDY, value: -10 },
    ],
    audio: "/audio/sleep-in.mp3",
  },
  {
    label: "Attended online mass study session with your TAs",
    title:
      "Your TAs are holding an online mass study session for the upcoming test. Do you attend?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -10 },
    ],
    audio: "/audio/studying.mp3",
  },

  // ========== NIGHT ========== //
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
    audio: "/audio/party.mp3",
  },
  {
    label: "Watched a movie",
    title:
      "Your friend invites you to watch the new Marvel movie at Atlantic Station. Do you go?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SLEEP, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 10 },
    ],
    audio: "/audio/movie.mp3",
  },
  {
    label: "Partied at the Standard",
    title: "You get invited to a rooftop party at the Standard. Do you go?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.SLEEP, value: -5 },
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 10 },
    ],
    audio: "/audio/pool-party.mp3",
  },
  {
    label: "Stayed up studying for an exam",
    title: "You have a big exam tomorrow. Do you stay up late studying for it?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/study-alone.mp3",
  },
  {
    label: "Slept early",
    title:
      "You're feeling a bit tired. Do you stay in and have a movie night by yourself and sleep early?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
      { pillar: PILLAR.SLEEP, value: 10 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
  },
  {
    label: "Slept early",
    title:
      "You're feeling a bit tired. Do you stay in and have a movie night by yourself and sleep early?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: -5 },
      { pillar: PILLAR.SLEEP, value: 10 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
  },
  {
    label: "Spend a night in with your partner",
    title: "Spend a night in with your partner?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.STUDY, value: -5 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.ROMANCE,
  },
  {
    label: "Attend a wedding with your partner",
    title: "Attend a wedding with your partner?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.ROMANCE,
  },
  {
    label: "Plan a surprise date for your partner",
    title: "Plan a surprise date for your partner?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.ROMANCE,
  },
  {
    label: "Celebrate your anniversary with your partner",
    title: "Celebrate your anniversary with your partner?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 10 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.ROMANCE,
  },
  {
    label: "Have a picnic in the park with your partner",
    title: "Have a picnic in the park with your partner?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.ROMANCE,
  },
  {
    label: "Go on a double date with friends",
    title: "Go on a double date with friends?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.ROMANCE,
  },
  {
    label: "Attend a party with club members",
    title: "Attend a party with club members?",
    time: TIME.NIGHT,
    effects: [
      { pillar: PILLAR.STUDY, value: -5 },
      { pillar: PILLAR.SOCIAL, value: 10 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.CLUB,
  },
  {
    label: "Work on a group project with club members",
    title: "Work on a group project with club members?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.CLUB,
  },
  {
    label: "Attend a conference with club members",
    title: "Attend a conference with club members?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.CLUB,
  },
  {
    label: "Collaborate with club members on a startup idea",
    title: "Attend a conference with club members?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.CLUB,
  },
  {
    label: "Help a fellow club member with a personal project",
    title: "Attend a conference with club members?",
    time: TIME.AFTERNOON,
    effects: [
      { pillar: PILLAR.STUDY, value: 5 },
      { pillar: PILLAR.SOCIAL, value: 5 },
      { pillar: PILLAR.SLEEP, value: -5 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.CLUB,
  },
  {
    label: "Attend a workshop or seminar with club members",
    title: "Attend a workshop or seminar with club members?",
    time: TIME.MORNING,
    effects: [
      { pillar: PILLAR.STUDY, value: 10 },
      { pillar: PILLAR.SOCIAL, value: -5 },
    ],
    audio: "/audio/sleep-in-movie.mp3",
    thread: THREAD.CLUB,
  },
];

export const MORNING_EVENTS = EVENTS.filter(
  (event) => event.time === TIME.MORNING
);
export const AFTERNOON_EVENTS = EVENTS.filter(
  (event) => event.time === TIME.AFTERNOON
);
export const NIGHT_EVENTS = EVENTS.filter((event) => event.time === TIME.NIGHT);
