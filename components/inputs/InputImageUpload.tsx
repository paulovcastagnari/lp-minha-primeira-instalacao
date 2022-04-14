import { useRef, useState, useEffect } from "react";
import ImageSearchRoundedIcon from "@material-ui/icons/ImageSearchRounded";

interface InputImageUploadProps {
  id: string;
  initialImage: string;
  onInput: (
    id: string,
    value: string | boolean | File,
    isValid: boolean,
    label: string
  ) => void;
  type?: "AVATAR" | "CARD" | "BANNER" | "CSP";
}

export const InputImageUpload = (props: InputImageUploadProps) => {
  const { id, initialImage, onInput, type = "AVATAR" } = props;
  const filePickerRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(null);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [initImage, setinitImage] = useState<string>(initialImage);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        setPreviewUrl(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedImageHandler = (event: React.FormEvent<HTMLInputElement>) => {
    let pickedFile: File = null;
    let fileIsValid = isValid;
    if (event.currentTarget.files && event.currentTarget.files.length === 1) {
      pickedFile = event.currentTarget.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
      onInput(id, pickedFile, fileIsValid, "avatar");
      setinitImage(null);
    }
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="img-upload">
      <input
        id={id}
        ref={filePickerRef}
        className="img-upload__input"
        type="file"
        accept=".jpg,.png,.jpeg,.webp"
        onChange={pickedImageHandler}
      />
      <div
        className={`img-upload__preview-container ${
          type === "CARD" ? "img-upload__preview-container--card" : ""
        } ${type === "BANNER" ? "img-upload__preview-container--banner" : ""} ${
          type === "CSP" ? "img-upload__preview-container--csp" : ""
        }`}
      >
        <img
          src={previewUrl || initImage}
          alt="Seu avatar"
          className="img-upload__preview-img"
          title="Seu avatar"
        />
      </div>
      <button
        className={`btn btn--icon btn--icon-huge btn--icon-blue btn--grey-light img-upload__btn ${
          type !== "AVATAR" ? "img-upload__btn--farther" : ""
        }`}
        onClick={pickImageHandler}
      >
        <ImageSearchRoundedIcon />
      </button>
    </div>
  );
};
