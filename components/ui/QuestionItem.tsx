import { useState, useEffect } from "react";

import { randomizeArray } from "../../util/random/randomizeArray";
import { AlternativeItem } from "./AlternativeItem";
import { QuestionData, AlternativeData } from "../../data/types";

interface QuestionItemProps {
  question: QuestionData;
  index: number;
  testState: { [key: string]: boolean };
  finished: boolean;
  reinitialize: boolean;
  setTestState: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

export const QuestionItem = (props: QuestionItemProps) => {
  const { index, question, testState, reinitialize, finished, setTestState } =
    props;
  const [checkdAlt, setCheckdAlt] = useState<number>(null);
  const [correctAlt, setCorrectAlt] = useState<boolean>(false);
  const [randomAlternatives, setRandomAlternatives] =
    useState<AlternativeData[]>(null);

  useEffect(() => {
    if (question.alternatives) {
      setRandomAlternatives(
        randomizeArray(question.alternatives) as AlternativeData[]
      );
    }
    setCheckdAlt(null);
  }, [question.alternatives, reinitialize]);

  useEffect(() => {
    if (checkdAlt !== null) {
      if (!(`${index}` in testState)) {
        setTestState({ ...testState, [`${index}`]: correctAlt });
      } else {
        const copyObj = { ...testState };
        copyObj[`${index}`] = correctAlt;
        setTestState(copyObj);
      }
    }
  }, [checkdAlt, index, setTestState, correctAlt]);

  return (
    <li className="question">
      <div className="question__header">
        <span className="question__number">{`Questão ${index + 1}`}</span>
        <p className="question__title">{question.title}</p>
      </div>
      {randomAlternatives && (
        <ul className="question__alts">
          {randomAlternatives.map((alt: AlternativeData, i) => {
            return (
              <AlternativeItem
                index={i}
                alt={alt}
                key={`alternative-${i}`}
                setCheckdAlt={setCheckdAlt}
                checkdAlt={checkdAlt}
                finished={finished}
                setCorrectAlt={setCorrectAlt}
                correct={alt.correct}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};
