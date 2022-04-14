import parse from "html-react-parser";

interface RichContentProps {
  content: string;
  type: "DESCRIPTION" | "CONTENT" | "PAGE";
}

export const RichContent = (props: RichContentProps) => {
  const { content, type } = props;
  const htmlContent = parse(content) as JSX.Element;

  return (
    <div
      className={`rich-content ${
        type === "DESCRIPTION" ? "rich-content--description" : ""
      } ${type === "PAGE" ? "rich-content--page" : ""}`}
    >
      {htmlContent}
    </div>
  );
};
