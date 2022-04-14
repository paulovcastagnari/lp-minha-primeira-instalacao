import { useState, Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

import { Dropdown } from "../ui/Dropdown";
import { useUserContext } from "../providers/UserContextProvider";
import { PopupEvaluation } from "../ui/PopupEvaluation";
import { Progress } from "../ui/Progress";
import { ActivityData } from "../../data/types";

interface AppBarCourseProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
  progress: number | null | undefined;
  certificateAccessDate: string;
  name: string;
  setLoadedActivity: React.Dispatch<React.SetStateAction<ActivityData>>;
  courseId: string;
  courseEvaluation:
    | {
        score: number;
        comment: string;
      }
    | undefined;
}

export const AppBarCourse = (props: AppBarCourseProps): JSX.Element => {
  const {
    setShowMenu,
    showMenu,
    progress,
    certificateAccessDate,
    courseEvaluation,
    name,
    setLoadedActivity,
    courseId,
  } = props;
  const userCtx = useUserContext();
  const progressElm = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showDropdown1, setShowDropdown1] = useState<boolean>(false);

  useEffect(() => {
    if (typeof progress === "number") {
      const value = `${progress}%`;
      progressElm.current?.style.setProperty("--progress", value);
    }
  }, [progress]);

  return (
    <Fragment>
      <div className="app-bar">
        <button
          className={`sandwich u-margin-left-md-res ${
            showMenu ? "sandwich--active" : ""
          }`}
          onClick={() => {
            setShowMenu((prevValue) => {
              return !prevValue;
            });
          }}
        >
          <span className="sandwich__icon">&nbsp;</span>
        </button>
        <div className="app-bar__logo-container app-bar__logo-container--course">
          <Link href="/portal" passHref>
            <img
              src="/logo-energia-lucrativa-600x200.png"
              alt="Logomarca Energia Lucrativa"
              className="app-bar__logo"
            />
          </Link>
        </div>
        <div className="app-bar__course-name-container">
          <h1 className="app-bar__course-name">{name}</h1>
        </div>
        <div
          className={`btn-icon-text ${
            showMenu ? "btn-icon-text--disabled" : ""
          } btn-icon-text--app-bar app-bar__evaluation-container`}
          onClick={() => {
            if (!showMenu) {
              setTimeout(() => {
                setShowPopup(true);
              }, 10);
            }
          }}
        >
          <StarRoundedIcon />
          <span className="span app-bar__evaluation-text">Avaliar curso</span>
        </div>
        <Progress
          progress={progress}
          courseId={courseId}
          certificateAccessDate={certificateAccessDate}
        />
        <nav className="app-bar__nav">
          <Dropdown
            type="std"
            active={showDropdown1}
            setActive={setShowDropdown1}
            button={
              <button
                disabled={showMenu}
                className="btn-icon"
                onClick={() => {
                  setShowDropdown1(!showDropdown1);
                }}
              >
                <AccountCircleRoundedIcon />
              </button>
            }
          >
            <Link href="/portal" passHref>
              <span className="dropdown__item dropdown__item-std">
                Voltar ao portal
              </span>
            </Link>
            <Link href="/conta" passHref>
              <span className="dropdown__item dropdown__item-std">
                Editar minha conta
              </span>
            </Link>
            <Link href="/atualizar-senha" passHref>
              <span className="dropdown__item dropdown__item-std">
                Atualizar senha
              </span>
            </Link>
            <span
              className="dropdown__item dropdown__item-std"
              onClick={userCtx.logout}
            >
              Sair
            </span>
          </Dropdown>
        </nav>
      </div>
      <PopupEvaluation
        active={showPopup}
        setActive={setShowPopup}
        courseEvaluation={courseEvaluation}
        setLoadedActivity={setLoadedActivity}
        userCtx={userCtx}
        courseId={courseId}
      />
    </Fragment>
  );
};
