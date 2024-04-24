import { FaGamepad } from "react-icons/fa";
import { motion } from "framer-motion";
import Game1 from "./Game1.tsx";
import Game2 from "./Game2.tsx";
import { useEffect, useState } from "react";
import Game3 from "./Game3.tsx";
import Game4 from "./Game4.tsx";
import CardHeader from "../CardHeader/CardHeader.tsx";

const TruthLies = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);


  const truthAndLies = [
    {
      truth: "I've had 10+ pets",
      lie1: "I have a twin.",
      lie2: "I've gone to DisneyWorld twice.",
    },
    {
      truth: "I am the youngest of 4.",
      lie1: "I got my first tattoo on my 18th birthday.",
      lie2: "I've gone skydiving",
    },
    {
      truth: "I don't eat crisps.",
      lie1: "I'm allergic to tomatoes.",
      lie2: "I can't whistle.",
    },
    {
      truth: "I am the first of my family to attend university.",
      lie1: "I was born a week early.",
      lie2: "I can speak 2 languages.",
    },
  ];

  const truthAndLiesComponents = [
    {
      questionIndex: 0,
      component: (
        <Game1
          truthAndLies={truthAndLies[0]}
          setQuestionIndex={setQuestionIndex}
          gameCompleted={gameCompleted}
          setGameCompleted={setGameCompleted}
        />
      ),
    },
    {
      questionIndex: 1,
      component: (
        <Game2
          truthAndLies={truthAndLies[1]}
          setQuestionIndex={setQuestionIndex}
          gameCompleted={gameCompleted}
          setGameCompleted={setGameCompleted}
        />
      ),
    },
    {
      questionIndex: 2,
      component: (
        <Game3
          truthAndLies={truthAndLies[2]}
          setQuestionIndex={setQuestionIndex}
          gameCompleted={gameCompleted}
          setGameCompleted={setGameCompleted}
        />
      ),
    },
    {
      questionIndex: 3,
      component: (
        <Game4
          truthAndLies={truthAndLies[3]}
          setQuestionIndex={setQuestionIndex}
          gameCompleted={gameCompleted}
          setGameCompleted={setGameCompleted}
        />
      ),
    },
  ];

  useEffect(() => {
    setGameCompleted(false);
  }, [questionIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.75 } }}
      className="bg-[#101010] mr-2 xl:mt-0 text-center p-2 xs:w-[95%] sm:w-[530px] sm:h-auto lg:h-[450px] 2xl:w-[350px] lg:w-[720px] rounded-3xl border-2 border-[#191919]"
    >
      <CardHeader
        headerTitle={"Game"}
        headerSubHeading={"2 Lies & A Truth"}
        headerIcon={<FaGamepad />}
      />
      <p className="text-[#999999] my-3">Get to know some facts about me!</p>
      {truthAndLiesComponents.length !== questionIndex ? (
        truthAndLiesComponents.map((component) => (
          <>
            {component.questionIndex === questionIndex && component.component}
          </>
        ))
      ) : (
        <>
          <h1 className="md:text-[20px] w-[80%] mx-auto text-[30px] flex justify-center items-center  font-[600]">
            Complete
          </h1>
        </>
      )}
    </motion.div>
  );
};

export default TruthLies;
