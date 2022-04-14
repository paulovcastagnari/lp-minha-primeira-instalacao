import { Inputs, FormState } from "../../data/types";

interface SetInitialFilterDataProps {
  localStoragePrefix: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
  // setCategory: React.Dispatch<React.SetStateAction<string>>;
  // setCategory2?: React.Dispatch<React.SetStateAction<string>>;
  // setFormData?: (
  //   inputData: Inputs,
  //   formValidity: boolean,
  //   resetFLag?: boolean,
  //   reinitializeFlag?: boolean
  // ) => void;
  // setDateRange: React.Dispatch<
  //   React.SetStateAction<{
  //     selection: {
  //       startDate: Date;
  //       endDate: Date;
  //       key: string;
  //     };
  //   }>
  // >;
}

export const setInitialFilterData = (props: SetInitialFilterDataProps) => {
  const {
    localStoragePrefix,
    setActive,
    setOrder,
    // setCategory,
    // setCategory2,
    // setFormData,
    // setDateRange,
  } = props;

  const initialActive: boolean | null | undefined = JSON.parse(
    localStorage.getItem(`${localStoragePrefix}FilterActive`)
  );
  initialActive && setActive(initialActive);

  const initialOrder: string | null | undefined = localStorage.getItem(
    `${localStoragePrefix}Order`
  );
  initialOrder && setOrder(initialOrder);

  // const initialCategory: string | null | undefined = localStorage.getItem(
  //   `${localStoragePrefix}CategoryFilter`
  // );
  // initialCategory && setCategory(initialCategory);

  // if (setCategory2) {
  //   const initialCategory2: string | null | undefined = localStorage.getItem(
  //     `${localStoragePrefix}Category2Filter`
  //   );
  //   initialCategory2 && setCategory2(initialCategory2);
  // }

  // if (setFormData) {
  //   const initialFormData: FormState | null | undefined = JSON.parse(
  //     localStorage.getItem(`${localStoragePrefix}ValueRangeFilter`)
  //   );
  //   initialFormData &&
  //     setFormData(initialFormData.inputs, initialFormData.isValid);
  // }

  // const initialDateObject:
  //   | {
  //       selection: {
  //         startDate: string;
  //         endDate: string;
  //         key: string;
  //       };
  //     }
  //   | null
  //   | undefined = JSON.parse(
  //   localStorage.getItem(`${localStoragePrefix}DateFilter`)
  // );

  // if (
  //   initialDateObject?.selection?.startDate &&
  //   initialDateObject?.selection?.endDate &&
  //   initialDateObject?.selection?.key
  // ) {
  //   const initialStartDate = new Date(initialDateObject.selection.startDate);
  //   const initialEndDate = new Date(initialDateObject.selection.endDate);
  //   const initialDateRange = {
  //     selection: {
  //       startDate: initialStartDate,
  //       endDate: initialEndDate,
  //       key: initialDateObject.selection.key,
  //     },
  //   };
  //   setDateRange(initialDateRange);
  // }
};
