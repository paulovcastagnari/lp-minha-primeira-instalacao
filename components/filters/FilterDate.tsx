import { useState } from "react";
import EventRoundedIcon from "@material-ui/icons/EventRounded";

import { Dropdown } from "../ui/Dropdown";
import { DateRangeSelector } from "../ui/DateRangeSelector";

interface FilterDateProps {
  localStoragePrefix: string;
  pastDateRange: number;
  futureDateRange: number;
  twoCat?: boolean;
  dateRange: {
    selection: {
      startDate: Date;
      endDate: Date;
      key: string;
    };
  };
  setDateRange: React.Dispatch<
    React.SetStateAction<{
      selection: {
        startDate: Date;
        endDate: Date;
        key: string;
      };
    }>
  >;
}

export const FilterDate = (props: FilterDateProps) => {
  const {
    dateRange,
    setDateRange,
    localStoragePrefix,
    pastDateRange,
    futureDateRange,
    twoCat = false,
  } = props;
  const [showDropdown3, setShowDropdown3] = useState<boolean>(false);

  return (
    <Dropdown
      type={`${!twoCat ? "date-range" : "date-range-two-cat"}`}
      active={showDropdown3}
      setActive={setShowDropdown3}
      button={
        <button
          title="Filtrar items por período"
          className="btn btn--grey-light btn--icon-extra-small filter__control-btn"
          onClick={() => {
            setShowDropdown3(!showDropdown3);
          }}
        >
          <EventRoundedIcon />
        </button>
      }
    >
      <DateRangeSelector
        range={dateRange}
        setRange={setDateRange}
        localStoragePrefix={localStoragePrefix}
        pastDateRange={pastDateRange}
        futureDateRange={futureDateRange}
      />
    </Dropdown>
  );
};
