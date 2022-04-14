import { Fragment, useState, useEffect } from "react";
import Collapse from "@material-ui/core/Collapse";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

import { NavItemCourseLecture } from "./NavItemCourseLecture";
import { NavItemCourseTest } from "./NavItemCourseTest";
import {
  checkLectureCompleted,
  checkTestCompleted,
} from "../../util/course/checkCompleted";
import { LecturesData, ActivityData } from "../../data/types";

interface NavItemCourseSectionProps {
  title: string;
  lectures: LecturesData;
  userCourseData: ActivityData;
  index: number;
  setLectureActive: React.Dispatch<React.SetStateAction<string>>;
  lectureActive: string;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  wasWatched: boolean;
  setWasWatched: React.Dispatch<React.SetStateAction<boolean>>;
  sendRequest: (
    url: string,
    method?: string,
    body?: BodyInit,
    headers?: HeadersInit,
    successMessage?: boolean
  ) => Promise<any>;
  isLoading: boolean;
  setLoadedActivity: React.Dispatch<React.SetStateAction<ActivityData>>;
  clickedId: string;
  setClickedId: React.Dispatch<React.SetStateAction<string>>;
}

export const NavItemCourseSection = (props: NavItemCourseSectionProps) => {
  const {
    title,
    lectures,
    userCourseData,
    index,
    lectureActive,
    setLectureActive,
    setShowMenu,
    wasWatched,
    setWasWatched,
    sendRequest,
    isLoading,
    setLoadedActivity,
    clickedId,
    setClickedId,
  } = props;
  const [itemActive, setItemActive] = useState<boolean>(false);

  useEffect(() => {
    const sectionShouldBeActive =
      Number(lectureActive?.split("-")[0]) === index;
    if (sectionShouldBeActive) {
      setItemActive(sectionShouldBeActive);
    }
  }, [lectureActive, index]);

  return (
    <Fragment>
      <li
        title={title}
        className={`side-nav__item side-nav__item--course ${
          itemActive ? "side-nav__item--open" : ""
        }`}
        onClick={() => {
          setItemActive(!itemActive);
        }}
      >
        <div className="side-nav__link side-nav__link--course">
          <span>{`Módulo ${index + 1}: ${title}`}</span>{" "}
          <KeyboardArrowDownRoundedIcon />
        </div>
      </li>
      <Collapse in={itemActive}>
        <ul className="side-nav-secondary">
          {lectures.map((lecture, i) => {
            if (lecture && "videoUrl" in lecture) {
              return (
                <NavItemCourseLecture
                  courseId={userCourseData._id}
                  title={`${i + 1}. ${lecture.title}`}
                  wasWatched={wasWatched}
                  setWasWatched={setWasWatched}
                  watchedData={checkLectureCompleted(
                    lecture._id,
                    userCourseData.progress?.completedLectures || []
                  )}
                  isActive={
                    Number(lectureActive?.split("-")[0]) === index &&
                    Number(lectureActive?.split("-")[1]) === i
                  }
                  lectureActive={lectureActive}
                  setLectureActive={setLectureActive}
                  lectureId={`${index}-${i}`}
                  key={`${lecture.title}-${i}`}
                  setShowMenu={setShowMenu}
                  sendRequest={sendRequest}
                  isLoading={isLoading}
                  setLoadedActivity={setLoadedActivity}
                  lectureBackId={lecture._id}
                  clickedId={clickedId}
                  setClickedId={setClickedId}
                />
              );
            } else {
              return (
                <NavItemCourseTest
                  courseId={userCourseData._id}
                  title={`Teste: ${lecture.title}`}
                  isActive={
                    Number(lectureActive?.split("-")[0]) === index &&
                    Number(lectureActive?.split("-")[1]) === i
                  }
                  lectureActive={lectureActive}
                  setLectureActive={setLectureActive}
                  lectureId={`${index}-${i}`}
                  key={`${lecture.title}-${i}`}
                  setShowMenu={setShowMenu}
                  wasCompleted={wasWatched}
                  completedData={checkTestCompleted(
                    lecture._id,
                    userCourseData.exams || []
                  )}
                />
              );
            }
          })}
        </ul>
      </Collapse>
    </Fragment>
  );
};
