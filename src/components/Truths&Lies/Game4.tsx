import { useState } from "react";
import { GameLayout4, GameProps } from "./GameLayout.tsx";

const Game4 = ({
  truthAndLies,
  setQuestionIndex,
  gameCompleted,
  setGameCompleted,
}: GameProps) => {
  const { truth, lie1, lie2 } = truthAndLies;
  const [answerOption, setAnswerOption] = useState<string | undefined>("");

  let title = "";
  let message = "";

  switch (answerOption) {
    case lie1:
      title = "Nope!";
      message =
        "I was actually born TWO weeks early, like every other one of my siblings.";
      break;
    case lie2:
      title = "Nope!";
      message = "Unfortunately can only speak one language, fluently anyway.";
      break;
    case truth:
      title = "Correct!";
      message =
        "I am the first person in my family to go to and graduate university!";
      break;
    default:
      title = "";
      message = "";
      break;
  }

  const handleAnswerSelect = (answer: undefined | string) => {
    if (!gameCompleted) {
      if (answer === truth) {
        setAnswerOption(answer);
        setGameCompleted(true);
      } else if (answer === lie1 || answer === lie2) {
        setAnswerOption(answer);
      } else {
        setGameCompleted(false);
      }
    }
  };

  return (
    <GameLayout4
      lie1={lie1}
      truth={truth}
      lie2={lie2}
      handleAnswerSelect={handleAnswerSelect}
      gameCompleted={gameCompleted}
      title={title}
      message={message}
      answerOption={answerOption}
      setQuestionIndex={setQuestionIndex}
    />
  );
};

export default Game4;
