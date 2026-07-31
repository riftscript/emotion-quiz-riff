export type EmotionKey = "happiness" | "sadness" | "frustration" | "worry" | "aversion";

export type Character = {
  key: EmotionKey;
  name: string;
  emotion: string;
  tagline: string;
  description: string;
  gradient: string;
  accent: string;
  shape: "sun" | "drop" | "spark" | "moon" | "leaf";
};

export type QuizOption = {
  text: string;
  score: EmotionKey;
};

export type Question = {
  character: EmotionKey;
  prompt: string;
  options: QuizOption[];
};

export const characters: Record<EmotionKey, Character> = {
  happiness: {
    key: "happiness",
    name: "Luma Bloom",
    emotion: "Happiness / Positivity",
    tagline: "The bright finder",
    description:
      "You naturally notice little sparks of good and help a room feel lighter. Your optimism is a real strength, especially when you let it make space for every feeling.",
    gradient: "linear-gradient(145deg, #ffe86f, #ff9f5a)",
    accent: "#f6b12d",
    shape: "sun",
  },
  sadness: {
    key: "sadness",
    name: "Misty Vale",
    emotion: "Sadness / Sensitivity",
    tagline: "The tender listener",
    description:
      "You are connected to depth, memory, and meaning. Your sensitivity can help you understand yourself and others with unusual gentleness.",
    gradient: "linear-gradient(145deg, #9fd2ff, #7794df)",
    accent: "#6d8fe0",
    shape: "drop",
  },
  frustration: {
    key: "frustration",
    name: "Ember Hart",
    emotion: "Frustration / Anger",
    tagline: "The boundary keeper",
    description:
      "You can feel strongly when something seems unfair, blocked, or ignored. That fire can become courage when it is given a clear and caring direction.",
    gradient: "linear-gradient(145deg, #ff896d, #d83f3f)",
    accent: "#df4a42",
    shape: "spark",
  },
  worry: {
    key: "worry",
    name: "Nimble Nox",
    emotion: "Anxiety / Worry",
    tagline: "The careful scanner",
    description:
      "You tend to look ahead and prepare for what might happen. Your caution can protect you, and it becomes even wiser when paired with a calm next step.",
    gradient: "linear-gradient(145deg, #c7adff, #7a75d8)",
    accent: "#8275e8",
    shape: "moon",
  },
  aversion: {
    key: "aversion",
    name: "Vera Fern",
    emotion: "Discomfort / Aversion",
    tagline: "The taste-maker",
    description:
      "You have a strong sense of what feels right, clean, kind, or aligned. Your instincts help you choose your surroundings and say no when something feels off.",
    gradient: "linear-gradient(145deg, #a7e77f, #42b889)",
    accent: "#3eac7b",
    shape: "leaf",
  },
};

export const questions: Question[] = [
  {
    character: "happiness",
    prompt: "When the day starts uncertain, what do you usually reach for first?",
    options: [
      { text: "A small thing to look forward to", score: "happiness" },
      { text: "A quiet moment to understand my mood", score: "sadness" },
      { text: "A plan to fix what is bothering me", score: "frustration" },
      { text: "A quick check of what could go wrong", score: "worry" },
    ],
  },
  {
    character: "sadness",
    prompt: "A friend seems distant. What feels closest to your first thought?",
    options: [
      { text: "Maybe they need kindness and patience", score: "sadness" },
      { text: "I hope I did not make a mistake", score: "worry" },
      { text: "I can cheer them up with something sweet", score: "happiness" },
      { text: "That behavior feels uncomfortable to me", score: "aversion" },
    ],
  },
  {
    character: "frustration",
    prompt: "Someone ignores a boundary you clearly set. What rises up in you?",
    options: [
      { text: "A sharp need to speak up right away", score: "frustration" },
      { text: "A wish to step back and cool down", score: "aversion" },
      { text: "A nervous replay of what happened", score: "worry" },
      { text: "A hope that a softer conversation can help", score: "happiness" },
    ],
  },
  {
    character: "worry",
    prompt: "Before trying something new, which inner voice is loudest?",
    options: [
      { text: "Let's prepare, then try carefully", score: "worry" },
      { text: "This could actually be exciting", score: "happiness" },
      { text: "I need to know whether this feels right", score: "aversion" },
      { text: "If it matters, I will push through it", score: "frustration" },
    ],
  },
  {
    character: "aversion",
    prompt: "You enter a place that feels off. What do you notice first?",
    options: [
      { text: "The atmosphere, scent, or tiny details", score: "aversion" },
      { text: "Whether anyone else seems okay", score: "worry" },
      { text: "How to make the best of it", score: "happiness" },
      { text: "The exact thing that needs to change", score: "frustration" },
    ],
  },
];

export const emotionOrder: EmotionKey[] = [
  "happiness",
  "sadness",
  "frustration",
  "worry",
  "aversion",
];
