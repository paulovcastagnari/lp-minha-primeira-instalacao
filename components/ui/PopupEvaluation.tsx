import { Fragment } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { useHttpClient } from "../../hooks/httpHook";
import { LoadingSpinner } from "../../components/ui/LoadingSpinner";
import { PopupError } from "../../components/ui/PopupError";
import { PopupSuccess } from "../../components/ui/PopupSuccess";
import { useForm } from "../../hooks/formHook";
import { InputRating } from "../inputs/InputRating";
import { InputTextArea } from "../inputs/InputTextArea";
import { VALIDATOR_VALID } from "../../util/validation/validators";
import {
  createCourseEvaluation,
  editCourseEvaluation,
} from "../../pages/api/evaluationsAPI";
import { ActivityData, UserContextProps } from "../../data/types";

interface PopupEvaluationProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadedActivity: React.Dispatch<React.SetStateAction<ActivityData>>;
  courseEvaluation: {
    score: number;
    comment: string;
  };
  userCtx: UserContextProps;
  courseId: string;
}

export const PopupEvaluation = (props: PopupEvaluationProps) => {
  const {
    active,
    setActive,
    courseEvaluation,
    setLoadedActivity,
    userCtx,
    courseId,
  } = props;
  const isEdit = !!courseEvaluation?.score;
  const { sendRequest, error, clearError, isLoading, success, clearSuccess } =
    useHttpClient();
  const { formState, inputHandler } = useForm(
    {
      courseRating: {
        value: courseEvaluation?.score?.toString() || "5",
        isValid: true,
      },
      courseComment: {
        value: courseEvaluation?.comment || "",
        isValid: true,
      },
    },
    true
  );

  const registerOrEditCourseEvalHandler = () => {
    if (!isEdit) {
      createCourseEvaluation({
        sendRequest,
        userCtx,
        setLoadedActivity,
        formState,
        courseId,
      });
    } else {
      editCourseEvaluation({
        sendRequest,
        userCtx,
        setLoadedActivity,
        formState,
        courseId,
      });
    }
  };

  return (
    <Fragment>
      <PopupError
        error={error}
        active={!!error}
        closePopupHandler={clearError}
      />
      <PopupSuccess
        message={
          !isEdit
            ? "Registro de avaliação realizado com sucesso!"
            : "Edição de avaliação realizada com sucesso!"
        }
        active={success}
        closePopupHandler={clearSuccess}
      />
      <div className={`popup ${active ? "popup--active" : ""}`}>
        <ClickAwayListener
          mouseEvent="onMouseDown"
          onClickAway={() => {
            if (active) {
              setActive(false);
            }
          }}
        >
          <div className="popup__content">
            {isLoading && <LoadingSpinner overlay spinner="GRID_SCALE" />}
            <span
              className="popup__close"
              onClick={() => {
                setActive(false);
              }}
            >
              &times;
            </span>
            <form
              className="form__inputs"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="form__group form__group--more-spaced">
                <InputRating
                  id="courseRating"
                  inputHandler={inputHandler}
                  className="rating rating--course"
                  type="COURSE"
                  initialValue={courseEvaluation?.score || 5}
                />
              </div>
              <div className="form__group form__group--more-spaced u-margin-top-md">
                <InputTextArea
                  id="courseComment"
                  inputHandler={inputHandler}
                  label="Diga o que achou!"
                  title="Diga-nos o que achou deste curso."
                  initialValid={true}
                  validators={[VALIDATOR_VALID()]}
                  expand={false}
                  initialValue={courseEvaluation?.comment || ""}
                  filter="CONTENT"
                />
                <button
                  disabled={!formState.isValid}
                  className="btn btn--yellow btn--wide"
                  onClick={(e) => {
                    e.preventDefault();
                    registerOrEditCourseEvalHandler();
                  }}
                >
                  {!!courseEvaluation?.score
                    ? "Editar avaliação"
                    : "Enviar avaliação"}
                </button>
              </div>
            </form>
          </div>
        </ClickAwayListener>
      </div>
    </Fragment>
  );
};
