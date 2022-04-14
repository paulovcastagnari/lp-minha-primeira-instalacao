import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import { transformInputText } from "../../util/string/transformInputText";

interface SearchBarProps {
  placeholder: string;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  getFilteredItemsHandler: () => void;
  disabled?: boolean;
  transform?: "UPPERCASE" | "LOWERCASE" | "NONE";
  filter?:
    | "CHAR_ONLY"
    | "CHAR_AND_NUM"
    | "CHAR_NUM_AND_UNDER"
    | "CHAR_ONLY_NO_BLANK"
    | "CHAR_AND_NUM_NO_BLANK"
    | "CHAR_AND_UNDER_NO_BLANK"
    | "CONTENT"
    | "NONE";
}

export const SearchBar = (props: SearchBarProps) => {
  const {
    placeholder,
    searchValue,
    setSearchValue,
    getFilteredItemsHandler,
    transform = "NONE",
    filter = "NONE",
    disabled,
  } = props;

  return (
    <div className={`search ${disabled ? "search--disabled" : ""}`}>
      {typeof searchValue === "string" && (
        <input
          type="text"
          className={`search__input ${
            disabled ? "search__input--disabled" : ""
          }`}
          placeholder={placeholder}
          value={transformInputText(searchValue, "NONE", filter)}
          disabled={disabled}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getFilteredItemsHandler();
            }
          }}
          onChange={(e) => {
            setSearchValue(
              transformInputText(e.target.value, transform, filter)
            );
          }}
        />
      )}
      <SearchRoundedIcon />
    </div>
  );
};
