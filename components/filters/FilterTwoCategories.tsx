import { useState, useEffect } from "react";
import { addDays } from "date-fns";
import PageviewRoundedIcon from "@material-ui/icons/PageviewRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import { SearchBar } from "../ui/SearchBar";
import { FilterIOrder } from "./FilterIOrder";
import { FilterCategory } from "./FilterCategory";
import { FilterDate } from "./FilterDate";
import { setInitialFilterData } from "../../util/other/setInitialFilterData";
import { dateFormatFromIDateObj } from "../../util/date/dateFormatFromIDateObj";
import {
  FilterTwoCategoriesAPIRequestProps,
  UserContextProps,
} from "../../data/types";

interface FilterTwoCategoriesProps {
  id?: string;
  userCtx: UserContextProps;
  orderItems: { value: string; text: string }[];
  category1Items: { value: string; text: string }[];
  category2Items: { value: string; text: string }[];
  searchbarPlaceholder: string;
  localStoragePrefix: string;
  sendRequest: (
    url: string,
    method?: string,
    body?: BodyInit,
    headers?: HeadersInit,
    successMessage?: boolean
  ) => Promise<any>;
  getFilteredItems: (
    props: FilterTwoCategoriesAPIRequestProps
  ) => Promise<void>;
  setLoadedItems: React.Dispatch<React.SetStateAction<any[]>>;
  categoryTitle?: string;
  category1Icon?: JSX.Element;
  category2Icon?: JSX.Element;
  category1Title?: string;
  category2Title?: string;
  pastDateRange?: number;
  futureDateRange?: number;
  setShowLoadMore: React.Dispatch<React.SetStateAction<boolean>>;
  startDateDays?: number;
}

export const FilterTwoCategories = (props: FilterTwoCategoriesProps) => {
  const {
    id,
    userCtx,
    orderItems,
    category1Items,
    category2Items,
    localStoragePrefix,
    searchbarPlaceholder,
    category1Icon = <CategoryRoundedIcon />,
    category2Icon = <CategoryRoundedIcon />,
    category1Title = "Filtrar items por categoria",
    category2Title = "Filtrar items por categoria",
    pastDateRange = 1825,
    futureDateRange = 0,
    sendRequest,
    getFilteredItems,
    setLoadedItems,
    setShowLoadMore,
    startDateDays = -730,
  } = props;
  const [active, setActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [order, setOrder] = useState<string>(orderItems?.[0]?.value || null);
  const [category1, setCategory1] = useState<string>(
    category1Items?.[0]?.value || null
  );
  const [category2, setCategory2] = useState<string>(
    category2Items?.[0]?.value || null
  );
  const [dateRange, setDateRange] = useState({
    selection: {
      startDate: addDays(new Date(), startDateDays),
      endDate: new Date(),
      key: "selection",
    },
  });

  useEffect(() => {
    setInitialFilterData({
      localStoragePrefix,
      setActive,
      setOrder,
    });
  }, [setInitialFilterData]);

  const getFilteredItemsHandler = () => {
    getFilteredItems({
      id,
      userCtx,
      sendRequest,
      setLoadedItems,
      searchValue,
      order,
      category1,
      category2,
      startDate: dateFormatFromIDateObj(dateRange.selection.startDate),
      endDate: dateFormatFromIDateObj(dateRange.selection.endDate),
      setShowLoadMore,
    });
  };

  return (
    <div className="filter">
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
      <div
        className={`filter__container ${
          active ? "filter__container--active" : ""
        }`}
      >
        <SearchBar
          placeholder={searchbarPlaceholder}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filter="CONTENT"
          getFilteredItemsHandler={getFilteredItemsHandler}
        />
        <div className="filter__controls">
          <FilterIOrder
            orderItems={orderItems}
            localStoragePrefix={localStoragePrefix}
            setOrder={setOrder}
            order={order}
          />
          <FilterCategory
            categoryTitle={category1Title}
            categoryIcon={category1Icon}
            categoryItems={category1Items}
            localStoragePrefix={localStoragePrefix}
            setCategory={setCategory1}
            category={category1}
          />
          <FilterCategory
            categoryTitle={category2Title}
            categoryIcon={category2Icon}
            categoryItems={category2Items}
            localStoragePrefix={localStoragePrefix}
            setCategory={setCategory2}
            category={category2}
          />
          <FilterDate
            localStoragePrefix={localStoragePrefix}
            pastDateRange={pastDateRange}
            futureDateRange={futureDateRange}
            dateRange={dateRange}
            setDateRange={setDateRange}
            twoCat
          />
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
