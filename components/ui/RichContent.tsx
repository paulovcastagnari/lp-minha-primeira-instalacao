import { Fragment, useRef, useState } from "react";
import parse from "html-react-parser";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

import { sliceLongString } from "../../util/string/sliceLongString";

interface RichContentProps {
  content: string;
  type: "DESCRIPTION" | "CONTENT" | "PAGE" | "PROFILE";
}

export const RichContent = (props: RichContentProps) => {
  const { content, type } = props;
  const richTextElm = useRef<HTMLDivElement>(null);
  const htmlContent = parse(content) as JSX.Element;
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <Fragment>
      <div
        ref={richTextElm}
        className={`rich-content ${
          type === "DESCRIPTION" ? "rich-content--description" : ""
        } ${type === "PAGE" ? "rich-content--page" : ""} ${
          type === "PROFILE" ? "rich-content--profile" : ""
        } ${
          type === "PROFILE" && content?.length > 1000 && !expand
            ? "rich-content--profile-overflown"
            : ""
        }`}
      >
        {type !== "PROFILE"
          ? htmlContent
          : parse(sliceLongString(content, !expand ? 1000 : Infinity))}
      </div>
      {type === "PROFILE" && content?.length > 1000 && (
        <button
          className={`btn-text rich-content__expand-btn ${
            expand ? "btn-text--active" : ""
          }`}
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? "ver menos" : "ver tudo"} <ExpandMoreRoundedIcon />
        </button>
      )}
    </Fragment>
  );
};
