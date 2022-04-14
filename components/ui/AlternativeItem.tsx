import { AlternativeData } from "../../data/types";

interface AlternativeItem {
  alt: AlternativeData;
  index: number;
  setCheckdAlt: React.Dispatch<React.SetStateAction<number>>;
  checkdAlt: number;
  setCorrectAlt: React.Dispatch<React.SetStateAction<boolean>>;
  correct: boolean;
  finished: boolean;
}

export const AlternativeItem = (props: AlternativeItem) => {
  const {
    alt,
    index,
    checkdAlt,
    setCheckdAlt,
    setCorrectAlt,
    correct,
    finished,
  } = props;

  return (
    <li className="question__alt">
      <div
        className="question__checkbox checkbox__container"
        onClick={() => {
          if (!finished) {
            setCheckdAlt(index);
            setCorrectAlt(correct);
          }
        }}
      >
        <div
          className={`checkbox  ${
            checkdAlt === index ? "checkbox--checked" : ""
          } ${
            finished && correct && checkdAlt === index
              ? "checkbox--correct"
              : finished && !correct && checkdAlt === index
              ? "checkbox--incorrect"
              : finished
              ? "checkbox--test-finished"
              : "checkbox--test"
          }`}
        ></div>
      </div>
      <span className="question__alt-number">{`${index + 1}.`}</span>
      <span className="question__alt-text">{alt.content}</span>
    </li>
  );
};
