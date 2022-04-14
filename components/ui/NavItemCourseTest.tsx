import { useState, useEffect } from "react";
interface NavItemCourseTestProps {
  courseId: string;
  isActive: boolean;
  title: string;
  lectureId: string;
  lectureActive: string;
  setLectureActive: React.Dispatch<React.SetStateAction<string>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  wasCompleted: boolean;
  completedData: boolean;
}

export const NavItemCourseTest = (props: NavItemCourseTestProps) => {
  const {
    courseId,
    isActive,
    title,
    lectureId,
    lectureActive,
    setLectureActive,
    setShowMenu,
    completedData,
    wasCompleted,
  } = props;
  const [notfirstLoad, setNotFirstLoad] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(completedData);

  useEffect(() => {
    if (notfirstLoad && lectureId === lectureActive) {
      setIsCompleted(true);
    }
    setNotFirstLoad(true);
  }, [wasCompleted]);

  return (
    <div
      className={`side-nav-secondary__item-container ${
        isActive ? "side-nav-secondary__item-container--active" : ""
      }`}
    >
      <div className="checkbox__container checkbox__container--uncheckable">
        <div
          className={`checkbox ${
            !isCompleted ? "checkbox--uncheckable" : ""
          }  ${isCompleted ? "checkbox--checked" : ""}`}
        ></div>
      </div>
      <li
        title={title}
        className={`side-nav-secondary__item ${isActive ? "" : ""}`}
        onClick={() => {
          setLectureActive(lectureId);
          setShowMenu(false);
          localStorage.setItem(`${courseId}-last-lecture`, lectureId);
        }}
      >
        <span className="side-nav-secondary__link">{title}</span>
      </li>
    </div>
  );
};
