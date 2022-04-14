import { useEffect, useRef } from "react";

interface FeedbackProps {
  id: string;
  active: boolean;
  icon: JSX.Element;
  message: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  timer: number;
}

export const Feedback = (props: FeedbackProps) => {
  const { id, active, icon, message, setActive, timer } = props;
  const feedbackElm = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = feedbackElm.current?.clientWidth;

    feedbackElm.current?.style.setProperty("--width", `${width}px`);
  }, [message, id]);

  useEffect(() => {
    if (active) {
      var timeout = setTimeout(() => {
        setActive(false);
      }, timer);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [active, setActive, timer]);

  return (
    <div
      ref={feedbackElm}
      id={id}
      className={`feedback ${active ? "feedback--active" : ""}`}
    >
      <span className="feedback__message">
        {icon}
        {message}
      </span>
    </div>
  );
};
