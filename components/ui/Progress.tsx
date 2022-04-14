import { useRef, useEffect } from "react";
import EmojiEventsRoundedIcon from "@material-ui/icons/EmojiEventsRounded";

import { checkDateIsValid } from "../../util/date/checkDateIsValid";

interface ProgressProps {
  progress: number | null | undefined;
  courseId?: string;
  certificateAccessDate?: string;
  noTxt?: boolean;
}

export const Progress = (props: ProgressProps) => {
  const { progress, noTxt = false, courseId, certificateAccessDate } = props;
  const progressElm = useRef<HTMLDivElement>(null);
  const canBeAccessed = certificateAccessDate
    ? !checkDateIsValid(certificateAccessDate, 0, false)
    : false;

  useEffect(() => {
    if (progress) {
      const value = `${progress}%`;
      progressElm.current?.style.setProperty("--progress", value);
    }
  }, [progress]);

  return (
    <div
      className={`progress ${
        noTxt ? "progress--no-padding progress--no-hidding" : ""
      }`}
    >
      <div
        ref={progressElm}
        className={`progress__meter ${
          progress === 100 ? "progress__meter--completed" : ""
        } ${canBeAccessed ? "progress__meter--link" : ""}`}
      >
        <EmojiEventsRoundedIcon />
      </div>
      {!noTxt && (
        <span
          className="progress__text"
          onClick={() => {
            if (progress === 100 && canBeAccessed) {
              window.open(
                `${process.env.NEXT_PUBLIC_BASE_URL}/certificado?courseId=${courseId}`,
                "_blank"
              );
            }
          }}
        >
          {progress === 100 && canBeAccessed
            ? "Certificado"
            : progress === 100 && !canBeAccessed
            ? "Completo"
            : "Progresso"}
        </span>
      )}
    </div>
  );
};
