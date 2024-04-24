import { Tooltip } from "@nextui-org/react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";

export interface GameProps {
  truthAndLies:
    | { truth: string; lie1: string; lie2: string }
    | { truth: string; lie1?: undefined; lie2?: undefined };
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  gameCompleted: boolean;
  setGameCompleted: Dispatch<SetStateAction<boolean>>;
}

interface GameLayoutProps {
  lie1: string | undefined;
  lie2: string | undefined;
  truth: string;
  handleAnswerSelect: (answer: string | undefined) => void;
  gameCompleted: boolean;
  title: string;
  message: string;
  answerOption: string | undefined;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
}

export const GameLayout1 = ({
  lie1,
  truth,
  lie2,
  handleAnswerSelect,
  gameCompleted,
  title,
  message,
  answerOption,
  setQuestionIndex,
}: GameLayoutProps) => {
  return (
    <ul>
      {[lie1, truth, lie2].map((statement) => (
        <p
          onClick={() => handleAnswerSelect(statement)}
          className={`bg-[#141414] hover:bg-[#1e1e1e] w-[90%] my-[10px] p-3 rounded-full border-2 border-[#212121] mx-auto ${
            !gameCompleted ? "cursor-pointer" : ""
          } ${(gameCompleted && statement === lie1) || (gameCompleted && statement === lie2) ? "text-gray-500" : ""} ${gameCompleted && statement === truth ? "text-white border-green-500" : ""}`}
          style={{ pointerEvents: gameCompleted ? "none" : "auto" }}
        >
          {statement}
        </p>
      ))}

      <p className="mt-[20px] font-[500] text-[15px]">{title}</p>
      <p className="mt-[10px] text-[15px] text-[#999999] w-[90%] mx-auto">
        {message}
      </p>

      {answerOption === truth && (
        <div className="flex justify-end w-[95%]">
          <Tooltip
            content="Next Question"
            className="bg-[#141414] border-2 border-[#191919] p-2 rounded-full w-[150px] text-center text-[#999999]"
          >
            <button onClick={() => setQuestionIndex((prev) => prev + 1)}>
              <FaCircleArrowRight className="text-[20px] text-[#A291FD]" />
            </button>
          </Tooltip>
        </div>
      )}
    </ul>
  );
};

export const GameLayout2 = ({
  lie1,
  truth,
  lie2,
  handleAnswerSelect,
  gameCompleted,
  title,
  message,
  answerOption,
  setQuestionIndex,
}: GameLayoutProps) => {
  return (
    <ul>
      {[lie1, lie2, truth].map((statement) => (
        <p
          onClick={() => handleAnswerSelect(statement)}
          className={`bg-[#141414] hover:bg-[#1e1e1e] w-[90%] my-[10px] p-3 rounded-full border-2 border-[#212121] mx-auto ${
            !gameCompleted ? "cursor-pointer" : ""
          } ${(gameCompleted && statement === lie1) || (gameCompleted && statement === lie2) ? "text-gray-500" : ""} ${gameCompleted && statement === truth ? "text-white border-green-500" : ""}`}
          style={{ pointerEvents: gameCompleted ? "none" : "auto" }}
        >
          {statement}
        </p>
      ))}

      <p className="mt-[20px] font-[500] text-[15px]">{title}</p>
      <p className="mt-[10px] text-[15px] text-[#999999] w-[90%] mx-auto">
        {message}
      </p>
      {answerOption === truth && (
        <div className="flex justify-end w-[95%]">
          <Tooltip
            content="Next Question"
            className="bg-[#141414] border-2 border-[#191919] p-2 rounded-full w-[150px] text-center text-[#999999]"
          >
            <button onClick={() => setQuestionIndex((prev) => prev + 1)}>
              <FaCircleArrowRight className="text-[20px] text-[#A291FD]" />
            </button>
          </Tooltip>
        </div>
      )}
    </ul>
  );
};

export const GameLayout3 = ({
  lie1,
  truth,
  lie2,
  handleAnswerSelect,
  gameCompleted,
  title,
  message,
  answerOption,
  setQuestionIndex,
}: GameLayoutProps) => {
  return (
    <ul>
      {[truth, lie1, lie2].map((statement) => (
        <p
          onClick={() => handleAnswerSelect(statement)}
          className={`bg-[#141414] hover:bg-[#1e1e1e] w-[90%] my-[10px] p-3 rounded-full border-2 border-[#212121] mx-auto ${
            !gameCompleted ? "cursor-pointer" : ""
          } ${(gameCompleted && statement === lie1) || (gameCompleted && statement === lie2) ? "text-gray-500" : ""} ${gameCompleted && statement === truth ? "text-white border-green-500" : ""}`}
          style={{ pointerEvents: gameCompleted ? "none" : "auto" }}
        >
          {statement}
        </p>
      ))}

      <p className="mt-[20px] font-[500] text-[15px]">{title}</p>
      <p className="mt-[10px] text-[15px] text-[#999999] w-[90%] mx-auto">
        {message}
      </p>
      {answerOption === truth && (
        <div className="flex justify-end w-[95%]">
          <Tooltip
            content="Next Question"
            className="bg-[#141414] border-2 border-[#191919] p-2 rounded-full w-[150px] text-center text-[#999999]"
          >
            <button onClick={() => setQuestionIndex((prev) => prev + 1)}>
              <FaCircleArrowRight className="text-[20px] text-[#A291FD]" />
            </button>
          </Tooltip>
        </div>
      )}
    </ul>
  );
};

export const GameLayout4 = ({
  lie1,
  truth,
  lie2,
  handleAnswerSelect,
  gameCompleted,
  title,
  message,
  answerOption,
  setQuestionIndex,
}: GameLayoutProps) => {
  return (
    <ul>
      {[lie1, lie2, truth].map((statement) => (
        <p
          onClick={() => handleAnswerSelect(statement)}
          className={`bg-[#141414] hover:bg-[#1e1e1e] w-[90%] my-[10px] p-3 rounded-full border-2 border-[#212121] mx-auto ${
            !gameCompleted ? "cursor-pointer" : ""
          } ${(gameCompleted && statement === lie1) || (gameCompleted && statement === lie2) ? "text-gray-500" : ""} ${gameCompleted && statement === truth ? "text-white border-green-500" : ""}`}
          style={{ pointerEvents: gameCompleted ? "none" : "auto" }}
        >
          {statement}
        </p>
      ))}

      <p className="mt-[20px] font-[500] text-[15px]">{title}</p>
      <p className="mt-[10px] text-[15px] text-[#999999] w-[90%] mx-auto">
        {message}
      </p>
      {answerOption === truth && (
        <div className="flex justify-end w-[95%]">
          <Tooltip
            content="Next Question"
            className="bg-[#141414] border-2 border-[#191919] p-2 rounded-full w-[150px] text-center text-[#999999]"
          >
            <button onClick={() => setQuestionIndex((prev) => prev + 1)}>
              <FaCircleArrowRight className="text-[20px] text-[#A291FD]" />
            </button>
          </Tooltip>
        </div>
      )}
    </ul>
  );
};
