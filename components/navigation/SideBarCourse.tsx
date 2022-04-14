import { Fragment, useState } from "react";

import { NavItemCourseSection } from "../ui/NavItemCourseSection";
import { CourseData, ActivityData } from "../../data/types";

interface SideBarCourseProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  courseData: CourseData;
  userCourseData: ActivityData;
  lectureActive: string;
  setLectureActive: React.Dispatch<React.SetStateAction<string>>;
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

export const SideBarCourse = (props: SideBarCourseProps): JSX.Element => {
  const {
    showMenu,
    setShowMenu,
    courseData,
    userCourseData,
    lectureActive,
    setLectureActive,
    wasWatched,
    setWasWatched,
    sendRequest,
    isLoading,
    setLoadedActivity,
    clickedId,
    setClickedId,
  } = props;

  return (
    <Fragment>
      <div
        className={`sidebar__background ${
          showMenu && "sidebar__background--show"
        }`}
        onClick={() => {
          setShowMenu(false);
        }}
      ></div>
      <nav className={`sidebar sidebar--course ${showMenu && "sidebar--show"}`}>
        <ul className="side-nav">
          {courseData.sections?.map((section, i) => {
            return (
              <NavItemCourseSection
                title={section.title}
                lectures={section.lectures}
                userCourseData={userCourseData}
                index={i}
                key={`${section.title}-${i}`}
                lectureActive={lectureActive}
                setLectureActive={setLectureActive}
                setShowMenu={setShowMenu}
                wasWatched={wasWatched}
                setWasWatched={setWasWatched}
                sendRequest={sendRequest}
                isLoading={isLoading}
                setLoadedActivity={setLoadedActivity}
                clickedId={clickedId}
                setClickedId={setClickedId}
              />
            );
          })}
        </ul>
        <div className="sidebar-legal sidebar-legal--course">
          &copy;
          {` ${new Date().getFullYear()} Energia Lucrativa. Todos os direitos reservados.`}
        </div>
      </nav>
    </Fragment>
  );
};
