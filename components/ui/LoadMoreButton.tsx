import { Fragment } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CachedRoundedIcon from "@material-ui/icons/CachedRounded";

interface LoadMoreButtonProps {
  setMultiplier: React.Dispatch<React.SetStateAction<number>>;
  isLoading?: boolean;
  disabled?: boolean;
}

export const LoadMoreButton = (props: LoadMoreButtonProps) => {
  const { setMultiplier, isLoading, disabled } = props;

  return (
    <button
      disabled={disabled}
      className={`btn-icon-text btn-icon-text--uppercase btn-icon-text--small ${
        disabled ? "btn-icon-text--disabled" : ""
      }`}
      onClick={() => {
        setMultiplier((prevValue) => {
          return prevValue + 1;
        });
      }}
    >
      {!isLoading ? (
        <Fragment>
          <AddRoundedIcon /> <span>Carregar mais</span>
        </Fragment>
      ) : (
        <Fragment>
          <CachedRoundedIcon /> <span>Carregando...</span>
        </Fragment>
      )}
    </button>
  );
};
