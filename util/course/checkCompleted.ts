import { ActivityData } from "../../data/types";

export const checkLectureCompleted = (
  id: string,
  completedLectures: string[]
) => {
  const lectureCompleted = !!completedLectures.find((lectureId) => {
    return lectureId === id;
  });

  return lectureCompleted;
};

export const checkTestCompleted = (
  id: string,
  exams: ActivityData["exams"]
) => {
  const foundTest = exams.find((exam) => {
    return exam.test === id;
  });

  return foundTest?.approved || false;
};
