import { useState, useEffect } from "react";
import CachedRoundedIcon from "@material-ui/icons/CachedRounded";

import { useUserContext } from "../providers/UserContextProvider";
import { updateProgressLecture } from "../../pages/api/progressesAPI";
import { ActivityData } from "../../data/types";

interface NavItemCourseLectureProps {
  courseId: string;
  isActive: boolean;
  title: string;
  lectureId: string;
  lectureActive: string;
  setLectureActive: React.Dispatch<React.SetStateAction<string>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  wasWatched: boolean;
  setWasWatched: React.Dispatch<React.SetStateAction<boolean>>;
  watchedData: boolean;
  sendRequest: (
    url: string,
    method?: string,
    body?: BodyInit,
    headers?: HeadersInit,
    successMessage?: boolean
  ) => Promise<any>;
  isLoading: boolean;
  setLoadedActivity: React.Dispatch<React.SetStateAction<ActivityData>>;
  lectureBackId: string;
  clickedId: string;
  setClickedId: React.Dispatch<React.SetStateAction<string>>;
}

export const NavItemCourseLecture = (props: NavItemCourseLectureProps) => {
  const {
    courseId,
    isActive,
    title,
    lectureId,
    lectureActive,
    setLectureActive,
    setShowMenu,
    wasWatched,
    setWasWatched,
    watchedData,
    sendRequest,
    isLoading,
    setLoadedActivity,
    lectureBackId,
    clickedId,
    setClickedId,
  } = props;
  const userCtx = useUserContext();
  const [watched, setWatched] = useState<boolean>(watchedData);

  useEffect(() => {
    if (lectureId === lectureActive) {
      setWatched(wasWatched);
    }
  }, [wasWatched, lectureActive, lectureId]);

  useEffect(() => {
    localStorage.setItem(`${lectureId}-watched`, watched.toString());
  }, [watched, lectureId]);

  const updateProgressLectureHandler = () => {
    if (!isLoading) {
      setClickedId(lectureId);
      updateProgressLecture({
        sendRequest,
        userCtx,
        courseId,
        lectureId: lectureBackId,
        lectureFrontId: lectureId,
        setLoadedActivity,
        setWasWatched,
        setWatched,
        lectureActive,
      });
    }
  };

  return (
    <div
      className={`side-nav-secondary__item-container ${
        isActive ? "side-nav-secondary__item-container--active" : ""
      }`}
    >
      {(clickedId !== lectureId || !isLoading) && (
        <div
          className={`checkbox__container ${
            isLoading ? "checkbox__container--uncheckable" : ""
          }`}
          onClick={updateProgressLectureHandler}
        >
          <div
            className={`checkbox ${watched ? "checkbox--checked" : ""} ${
              isLoading ? "checkbox--uncheckable" : ""
            }`}
          ></div>
        </div>
      )}
      {clickedId === lectureId && isLoading && (
        <div className="checkbox-loading">
          <div className="checkbox-loading__icon">
            <CachedRoundedIcon />
          </div>
        </div>
      )}
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
