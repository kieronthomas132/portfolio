import { useState } from "react";
import { GameLayout2, GameProps } from "./GameLayout.tsx";

const Game2 = ({
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
      message = "I do not currently have any tattoos, but maybe in the future!";
      break;
    case lie2:
      title = "Nope!";
      message = "I have never skydived before, but hope to someday!";
      break;
    case truth:
      title = "Correct!";
      message = "I am the youngest of 4 siblings! 1 brother and 2 sisters!";
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
    <GameLayout2
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

export default Game2;
