import { useState, useEffect } from "react";
import { addDays } from "date-fns";
import PageviewRoundedIcon from "@material-ui/icons/PageviewRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import { useForm } from "../../hooks/formHook";
import { SearchBar } from "../ui/SearchBar";
import { FilterIOrder } from "./FilterIOrder";
import { FilterCategory } from "./FilterCategory";
import { FilterValueRange } from "./FilterValueRange";
import { FilterDate } from "./FilterDate";
import { setInitialFilterData } from "../../util/other/setInitialFilterData";
import { dateFormatFromIDateObj } from "../../util/date/dateFormatFromIDateObj";
import { FilterAPIRequestProps, UserContextProps } from "../../data/types";

interface FilterProps {
  id?: string;
  userCtx: UserContextProps;
  orderItems: { value: string; text: string }[];
  categoryItems?: { value: string; text: string }[];
  valueRangeFields?: { value: string; text: string }[];
  searchbarPlaceholder: string;
  localStoragePrefix: string;
  sendRequest: (
    url: string,
    method?: string,
    body?: BodyInit,
    headers?: HeadersInit,
    successMessage?: boolean
  ) => Promise<any>;
  getFilteredItems: (props: FilterAPIRequestProps) => Promise<void>;
  setLoadedItems: React.Dispatch<React.SetStateAction<any[]>>;
  setShowLoadMore?: React.Dispatch<React.SetStateAction<boolean>>;
  categoryTitle?: string;
  categoryIcon?: JSX.Element;
  pastDateRange?: number;
  futureDateRange?: number;
  noDateRange?: boolean;
  noValueRange?: boolean;
  noCategory?: boolean;
  commentsFilter?: boolean;
  setIsLoadingFilter?: React.Dispatch<React.SetStateAction<boolean>>;
  startDateDays?: number;
}

export const Filter = (props: FilterProps) => {
  const {
    id,
    userCtx,
    orderItems,
    categoryItems,
    valueRangeFields,
    localStoragePrefix,
    searchbarPlaceholder,
    categoryTitle = "Filtrar items por categoria",
    categoryIcon = <CategoryRoundedIcon />,
    pastDateRange = 1825,
    futureDateRange = 0,
    sendRequest,
    getFilteredItems,
    setLoadedItems,
    noDateRange = false,
    noValueRange = false,
    noCategory = false,
    commentsFilter,
    setIsLoadingFilter,
    setShowLoadMore,
    startDateDays = -730,
  } = props;
  const [active, setActive] = useState<boolean>(!!commentsFilter || false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [order, setOrder] = useState<string>(orderItems?.[0]?.value || null);
  const [category, setCategory] = useState<string>(
    categoryItems?.[0]?.value || null
  );
  const [dateRange, setDateRange] = useState({
    selection: {
      startDate: addDays(new Date(), startDateDays),
      endDate: new Date(),
      key: "selection",
    },
  });
  const { formState, inputHandler, setFormData } = useForm({}, true);

  useEffect(() => {
    setInitialFilterData({
      localStoragePrefix,
      setActive,
      setOrder,
    });
  }, [setInitialFilterData]);

  const getFilteredItemsHandler = () => {
    localStorage.setItem(
      `${localStoragePrefix}ValueRangeFilter`,
      JSON.stringify(formState)
    );

    getFilteredItems({
      id,
      userCtx,
      sendRequest,
      setLoadedItems,
      searchValue,
      order,
      category,
      startDate: dateFormatFromIDateObj(dateRange.selection.startDate),
      endDate: dateFormatFromIDateObj(dateRange.selection.endDate),
      valueRangeFilterField:
        valueRangeFields?.find((field) => {
          return field.text === formState?.inputs?.valueField?.value;
        })?.value || null,
      minValueRange: Number(
        formState?.inputs?.minValue?.value?.toString()?.replace(/\D/g, "")
      ),
      maxValueRange: Number(
        formState?.inputs?.maxValue?.value?.toString()?.replace(/\D/g, "")
      ),
      setIsLoadingFilter,
      setShowLoadMore,
    });
  };

  return (
    <div className={`filter  ${commentsFilter ? "filter--comments" : ""}`}>
      {!commentsFilter && (
        <button
          title={active ? "Fechar menu de filtros" : "Abrir menu de filtros"}
          className={`btn-icon btn-icon--large  filter__switch-btn`}
          onClick={() => {
            localStorage.setItem(
              `${localStoragePrefix}FilterActive`,
              JSON.stringify(!active)
            );
            setActive(!active);
          }}
        >
          {active ? <CloseRoundedIcon /> : <PageviewRoundedIcon />}
        </button>
      )}
      <div
        className={`filter__container ${
          active ? "filter__container--active" : ""
        }`}
      >
        <SearchBar
          placeholder={searchbarPlaceholder}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filter="CHAR_NUM_AND_UNDER"
          getFilteredItemsHandler={getFilteredItemsHandler}
        />
        <div className="filter__controls">
          <FilterIOrder
            orderItems={orderItems}
            localStoragePrefix={localStoragePrefix}
            setOrder={setOrder}
            order={order}
          />
          {!noCategory && (
            <FilterCategory
              categoryTitle={categoryTitle}
              categoryIcon={categoryIcon}
              categoryItems={categoryItems}
              localStoragePrefix={localStoragePrefix}
              setCategory={setCategory}
              category={category}
            />
          )}
          {!noDateRange && (
            <FilterDate
              localStoragePrefix={localStoragePrefix}
              pastDateRange={pastDateRange}
              futureDateRange={futureDateRange}
              dateRange={dateRange}
              setDateRange={setDateRange}
            />
          )}
          {!noValueRange && (
            <FilterValueRange
              valueRangeFields={valueRangeFields}
              inputHandler={inputHandler}
              formState={formState}
            />
          )}
          <button
            title="Aplicar filtros e ordenação"
            className="btn btn--yellow btn--icon-extra-small filter__control-btn filter__control-btn-apply"
            onClick={getFilteredItemsHandler}
          >
            <SearchRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
