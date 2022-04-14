import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { useRouter } from "next/router";

interface ButtonBackProps {
  path: string;
}

export const ButtonBack = (props: ButtonBackProps) => {
  const router = useRouter();
  const { path } = props;

  return (
    <div className="btn-back">
      <button
        className="btn btn--icon-medium btn--yellow"
        onClick={() => {
          router.push(path);
        }}
      >
        <ArrowBackRoundedIcon />
      </button>
    </div>
  );
};
