import { useState } from "react";
import { GameLayout3, GameProps } from "./GameLayout.tsx";


const Game3 = ({
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
        "I am not allergic to tomatoes, in fact, I'm not allergic to anything!.. that i know of";
      break;
    case lie2:
      title = "Nope!";
      message = "I can whistle! In fact I only learnt to whistle at 20!";
      break;
    case truth:
      title = "Correct!";
      message =
        "Yes! I don't eat crisps, apparently I choked on them when I was little, and never ate them again.";
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
    <GameLayout3
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

export default Game3;
