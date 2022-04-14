import { ActivityData } from "../../data/types";

export const getLectureEvaluation = (
  id: string,
  lectureEvaluations: ActivityData["lectureEvaluations"]
) => {
  const foundEvaluation = lectureEvaluations.find((evaluation) => {
    return evaluation.lecture === id;
  });

  return foundEvaluation;
};
