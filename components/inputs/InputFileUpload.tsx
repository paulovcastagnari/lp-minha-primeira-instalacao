import { useRef, useState, useEffect } from "react";
import FindInPageRoundedIcon from "@material-ui/icons/FindInPageRounded";

interface InputFileUploadProps {
  id: string;
  initialFileName?: string;
  onInput: (
    id: string,
    value: string | boolean | File,
    isValid: boolean,
    label: string
  ) => void;
}

export const InputFileUpload = (props: InputFileUploadProps) => {
  const { id, initialFileName, onInput } = props;
  const filePickerRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>(null);
  const [fileName, setFileName] = useState<string>(null);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [initFileName, setinitFileName] = useState<string>(
    initialFileName || ""
  );

  useEffect(() => {
    if (file) {
      setFileName(file.name);
    }
  }, [file]);

  const pickedFileHandler = (event: React.FormEvent<HTMLInputElement>) => {
    let pickedFile: File = null;
    let fileIsValid = isValid;
    if (event.currentTarget.files && event.currentTarget.files.length === 1) {
      pickedFile = event.currentTarget.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
      onInput(id, pickedFile, fileIsValid, "Arquivo");
      setinitFileName(null);
    }
  };

  const pickFileHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="file-upload">
      <input
        id={id}
        ref={filePickerRef}
        className="file-upload__input"
        type="file"
        accept=".pdf,.txt,.doc,.docx,.csv,.xls,.xlsx"
        onChange={pickedFileHandler}
      />
      <div className="file-upload__preview-container">
        <div className="file-upload__preview">
          {fileName || initFileName || "Nenhum arquivo"}
        </div>
        <button
          className="btn btn--icon btn--grey-light btn--square file-upload__btn"
          title="Escolher arquivo"
          onClick={pickFileHandler}
        >
          <FindInPageRoundedIcon />
        </button>
      </div>
    </div>
  );
};
