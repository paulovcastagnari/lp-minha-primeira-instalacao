import { Fragment } from "react";
import * as locales from "react-date-range/dist/locale";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";

interface DateRangeSelectorProps {
  range: {
    selection: {
      startDate: Date;
      endDate: Date;
      key: string;
    };
  };
  setRange: React.Dispatch<
    React.SetStateAction<{
      selection: {
        startDate: Date;
        endDate: Date;
        key: string;
      };
    }>
  >;
  localStoragePrefix: string;
  pastDateRange: number;
  futureDateRange: number;
}

export const DateRangeSelector = (props: DateRangeSelectorProps) => {
  const {
    range,
    setRange,
    localStoragePrefix,
    pastDateRange,
    futureDateRange,
  } = props;

  return (
    <Fragment>
      <div className="date-range-container">
        <DateRange
          onChange={(item) => {
            localStorage.setItem(
              `${localStoragePrefix}DateFilter`,
              JSON.stringify({ ...range, ...item })
            );
            setRange({ ...range, ...item });
          }}
          minDate={addDays(new Date(), -pastDateRange)}
          maxDate={addDays(new Date(), futureDateRange)}
          ranges={[range.selection]}
          locale={locales["pt"]}
        />
      </div>
    </Fragment>
  );
};
