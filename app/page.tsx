"use client";

import { useMemo, useState } from "react";
import { EmotionAvatar } from "@/components/EmotionAvatar";
import { characters, emotionOrder, questions, type EmotionKey } from "@/data/quiz";

type Screen = "intro" | "quiz" | "result";

const initialScores = emotionOrder.reduce(
  (scores, key) => ({ ...scores, [key]: 0 }),
  {} as Record<EmotionKey, number>,
);

export default function Home() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(EmotionKey | null)[]>(
    Array(questions.length).fill(null),
  );

  const currentQuestion = questions[questionIndex];
  const currentCharacter = characters[currentQuestion.character];
  const selected = answers[questionIndex];

  const scores = useMemo(() => {
    return answers.reduce((totals, answer) => {
      if (answer) totals[answer] += 1;
      return totals;
    }, { ...initialScores });
  }, [answers]);

  const resultKey = useMemo(() => {
    return emotionOrder.reduce((winner, key) => {
      return scores[key] > scores[winner] ? key : winner;
    }, emotionOrder[0]);
  }, [scores]);

  const resultCharacter = characters[resultKey];

  function startQuiz() {
    setScreen("quiz");
    setQuestionIndex(0);
    setAnswers(Array(questions.length).fill(null));
  }

  function chooseAnswer(answer: EmotionKey) {
    setAnswers((current) => {
      const next = [...current];
      next[questionIndex] = answer;
      return next;
    });
  }

  function goNext() {
    if (!selected) return;
    if (questionIndex === questions.length - 1) {
      setScreen("result");
      return;
    }
    setQuestionIndex((index) => index + 1);
  }

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      {screen === "intro" && (
        <section className="hero panel enter" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">A gentle check-in</p>
            <h1 id="intro-title">How Are You Feeling Today?</h1>
            <p className="subtitle">
              A small journey through your emotions. Choose what feels closest to you.
            </p>
            <button className="primary-button" type="button" onClick={startQuiz}>
              Start Quiz
            </button>
          </div>

          <div className="constellation" aria-label="Five original emotion characters">
            {emotionOrder.map((key) => (
              <div className="constellation-item" key={key}>
                <EmotionAvatar character={characters[key]} size={key === "happiness" ? "large" : "small"} />
                <span>{characters[key].name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {screen === "quiz" && (
        <section className="quiz-panel panel enter" aria-labelledby="question-title">
          <div className="progress-row">
            <span>
              Question {questionIndex + 1} of {questions.length}
            </span>
            <div className="progress-track" aria-hidden="true">
              <div
                className="progress-fill"
                style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="character-stage">
            <EmotionAvatar character={currentCharacter} />
            <p className="character-tagline">{currentCharacter.tagline}</p>
            <h2 id="question-title">{currentCharacter.name}</h2>
            <p className="emotion-label">{currentCharacter.emotion}</p>
          </div>

          <p className="question-text">{currentQuestion.prompt}</p>

          <div className="options" role="radiogroup" aria-label={currentQuestion.prompt}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selected === option.score;
              return (
                <button
                  className={`option-button ${isSelected ? "selected" : ""}`}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  key={`${option.text}-${index}`}
                  onClick={() => chooseAnswer(option.score)}
                >
                  <span className="radio-dot" />
                  <span>{option.text}</span>
                </button>
              );
            })}
          </div>

          <button className="next-button" type="button" onClick={goNext} disabled={!selected}>
            {questionIndex === questions.length - 1 ? "See Result" : "Next"}
            <span aria-hidden="true">→</span>
          </button>
        </section>
      )}

      {screen === "result" && (
        <section className="result-panel panel enter" aria-labelledby="result-title">
          <p className="eyebrow">Your dominant emotion is...</p>
          <EmotionAvatar character={resultCharacter} />
          <h1 id="result-title">{resultCharacter.name}</h1>
          <p className="result-emotion">{resultCharacter.emotion}</p>
          <p className="result-description">{resultCharacter.description}</p>
          <button className="primary-button" type="button" onClick={startQuiz}>
            Take Quiz Again
          </button>
        </section>
      )}
    </main>
  );
}
