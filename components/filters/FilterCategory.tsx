import { useState } from "react";

import { Dropdown } from "../ui/Dropdown";

interface FilterCategoryProps {
  categoryTitle: string;
  categoryIcon: JSX.Element;
  categoryItems: {
    value: string;
    text: string;
  }[];
  localStoragePrefix: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
}

export const FilterCategory = (props: FilterCategoryProps) => {
  const {
    categoryTitle,
    categoryIcon,
    categoryItems,
    localStoragePrefix,
    setCategory,
    category,
  } = props;
  const [showDropdown2, setShowDropdown2] = useState<boolean>(false);

  return (
    <Dropdown
      type="sel-right"
      smaller
      active={showDropdown2}
      setActive={setShowDropdown2}
      button={
        <button
          title={categoryTitle}
          className="btn btn--grey-light btn--icon-extra-small filter__control-btn"
          onClick={() => {
            setShowDropdown2(!showDropdown2);
          }}
        >
          {categoryIcon}
        </button>
      }
    >
      {categoryItems.map((categoryItem, i) => {
        return (
          <div
            key={`category-item-${i}`}
            className="dropdown__item dropdown__item-sel"
            onClick={() => {
              localStorage.setItem(
                `${localStoragePrefix}CategoryFilter`,
                categoryItem.value
              );
              setCategory(categoryItem.value);
            }}
          >
            <div
              key={`category-item-checkbox-${i}`}
              className={`checkbox u-margin-right-xs  ${
                category === categoryItem.value ? "checkbox--checked" : ""
              }`}
            ></div>
            {categoryItem.text}
          </div>
        );
      })}
    </Dropdown>
  );
};
