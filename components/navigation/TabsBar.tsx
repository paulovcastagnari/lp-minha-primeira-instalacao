import { ControlBar } from "../../content/course/ControlBar";
import { ActivityData } from "../../data/types";

interface TabsBarProps {
  courseId: string;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  wasWatched: boolean;
  setWasWatched: React.Dispatch<React.SetStateAction<boolean>>;
  setLectureActive: React.Dispatch<React.SetStateAction<string>>;
  sectionIndex: number;
  lectureIndex: number;
  lastSectionIndex: number;
  lastLectureIndex: number;
  prevSecLastLectIdx: number;
  totalSectionLength: number;
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
  setClickedId: React.Dispatch<React.SetStateAction<string>>;
}

export const TabsBar = (props: TabsBarProps) => {
  const {
    courseId,
    activeTab,
    setActiveTab,
    wasWatched,
    setWasWatched,
    setLectureActive,
    sectionIndex,
    lectureIndex,
    lastSectionIndex,
    lastLectureIndex,
    prevSecLastLectIdx,
    totalSectionLength,
    sendRequest,
    isLoading,
    setLoadedActivity,
    lectureBackId,
    setClickedId,
  } = props;

  const activeTabHandler = (activeTab: number) => {
    setActiveTab(activeTab);
  };

  return (
    <div className="tabs-bar">
      <div
        className={`tabs-bar__highlight-box ${
          activeTab === 1
            ? "tabs-bar__highlight-box--1"
            : activeTab === 2
            ? "tabs-bar__highlight-box--2"
            : activeTab === 3
            ? "tabs-bar__highlight-box--none"
            : ""
        }`}
      ></div>
      <button
        className={`tabs-bar__btn ${
          activeTab === 0 ? "tabs-bar__btn--active" : ""
        }`}
        onClick={() => {
          activeTabHandler(0);
        }}
      >
        Descrição
      </button>
      <button
        className={`tabs-bar__btn ${
          activeTab === 1 ? "tabs-bar__btn--active" : ""
        }`}
        onClick={() => {
          activeTabHandler(1);
        }}
      >
        Dúvidas
      </button>
      <button
        className={`tabs-bar__btn ${
          activeTab === 2 ? "tabs-bar__btn--active" : ""
        }`}
        onClick={() => {
          activeTabHandler(2);
        }}
      >
        Arquivos
      </button>
      <ControlBar
        courseId={courseId}
        wasWatched={wasWatched}
        setWasWatched={setWasWatched}
        sectionIndex={sectionIndex}
        lectureIndex={lectureIndex}
        lastSectionIndex={lastSectionIndex}
        lastLectureIndex={lastLectureIndex}
        prevSecLastLectIdx={prevSecLastLectIdx}
        setLectureActive={setLectureActive}
        totalSectionLength={totalSectionLength}
        sendRequest={sendRequest}
        isLoading={isLoading}
        setLoadedActivity={setLoadedActivity}
        lectureBackId={lectureBackId}
        setClickedId={setClickedId}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </div>
  );
};
