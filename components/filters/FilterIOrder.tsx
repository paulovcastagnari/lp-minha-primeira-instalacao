import { useState } from "react";
import ImportExportRoundedIcon from "@material-ui/icons/ImportExportRounded";

import { Dropdown } from "../ui/Dropdown";

interface FilterIOrderProps {
  orderItems: {
    value: string;
    text: string;
  }[];
  localStoragePrefix: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
  order: string;
}

export const FilterIOrder = (props: FilterIOrderProps) => {
  const { orderItems, localStoragePrefix, setOrder, order } = props;
  const [showDropdown1, setShowDropdown1] = useState<boolean>(false);

  return (
    <Dropdown
      type="sel-right"
      smaller
      active={showDropdown1}
      setActive={setShowDropdown1}
      button={
        <button
          title="Ordenar items"
          className="btn btn--grey-light btn--icon-extra-small filter__control-btn"
          onClick={() => {
            setShowDropdown1(!showDropdown1);
          }}
        >
          <ImportExportRoundedIcon />
        </button>
      }
    >
      {orderItems.map((orderItem, i) => {
        return (
          <div
            key={`order-item-${i}`}
            className="dropdown__item dropdown__item-sel"
            onClick={() => {
              localStorage.setItem(
                `${localStoragePrefix}Order`,
                orderItem.value
              );
              setOrder(orderItem.value);
            }}
          >
            <div
              key={`order-item-checkbox-${i}`}
              className={`checkbox u-margin-right-xs  ${
                order === orderItem.value ? "checkbox--checked" : ""
              }`}
            ></div>
            {orderItem.text}
          </div>
        );
      })}
    </Dropdown>
  );
};
