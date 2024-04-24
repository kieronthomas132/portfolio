import { useState } from "react";
import { GameLayout1, GameProps } from "./GameLayout.tsx";


const Game1 = ({
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
        "I don't have a twin! but everyone thought my sister " +
        "and I were twins as we looked a lot alike and very close in age.";
      break;
    case lie2:
      title = "Nope!";
      message =
        "I have never gone to DisneyWorld unfortunately, but hope to some day!";
      break;
    case truth:
      title = "Correct!";
      message =
        "Yes! I have had 10+ pets in my life, including fish, hamster, dogs, cats and rats!";
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
    <GameLayout1
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

export default Game1;
