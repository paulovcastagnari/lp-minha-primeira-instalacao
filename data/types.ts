export type Inputs = {
  [input: string]: {
    value: string | boolean | File;
    isValid: boolean;
    label?: string;
    forceError?: boolean;
  };
};

export interface FormState {
  inputs: Inputs;
  isValid: boolean;
  forceError?: boolean;
  reset?: boolean;
  reinitialize?: boolean;
}

export interface InputState {
  value: string;
  isTouched: boolean;
  isValid: boolean;
}

export interface InputAction {
  type: "CHANGE" | "TOUCH" | "UNTOUCH";
  val?: string;
  validators?: { type: string; val?: number }[];
}

export interface FetchNoAuthProps {
  sendRequest: (
    url: string,
    method?: string,
    body?: BodyInit,
    headers?: HeadersInit,
    successMessage?: boolean
  ) => Promise<any>;
}

export type ProductTypesData = "PRODUCT" | "BONUS_PRODUCT" | "FREE_PRODUCT";

export type AccessStatusData =
  | "PENDING"
  | "ACTIVE"
  | "FREE"
  | "EXPIRED"
  | "BLOCKED"
  | "CANCELLED";

export type OrderPaymentTypeData = "CARD" | "PIX" | "BILL";

export type OrderStatusData =
  | "APPROVED"
  | "PENDING"
  | "CANCELLED"
  | "REJECTED"
  | "REFUNDED";

export type UserData = {
  _id: string;
  email: string;
  password: string;
  personalData: {
    name: string;
    surname: string;
    document: string;
    phone: string;
  };
  accountData: {
    logo: string;
  };
  orders?: string[];
  products?: string[];
  downloads?: string[];
  activities?: string[];
  progresses?: string[];
  accesses?: {
    _id: string;
    status: AccessStatusData;
    productId: string;
    validity: string;
    registryDate: string;
    freeAccessReason: string;
  }[];
  registryDate: string;
  registryTimestamp: number;
};

export type ProductData = {
  _id: string;
  frontId: string;
  name: string;
  imgUrl: string;
  thumbUrl: string;
  cspUrl: string;
  copyForCsp: string;
  checkoutBannerUrl: string;
  accessUrl: string;
  lpUrl: string;
  price: number;
  type: ProductTypesData;
  inAppPurchase: boolean;
  inAppAccess: boolean;
  isCourse: boolean;
  isPublished: boolean;
  accessTime: number;
  bonus: { frontId: string; price: number; type: ProductTypesData }[];
  isUnlockedBy: { frontId: string; type: ProductTypesData }[];
  crossSellItems: { frontId: string; type: ProductTypesData }[];
  cspProductOffer: {
    frontId: string;
    type: ProductTypesData;
    copyForCsp: string;
    cspUrl: string;
    name: string;
    price: number;
  }[];
  upSellItems: UpsellData[];
};

export type UpsellData = {
  _id: string;
  frontId: string;
  title: string;
  description: string;
  price: number;
  extAccess: boolean;
  extAccessTime: number;
  product: string;
};

export type ActivityData = {
  _id: string;
  name: string;
  progress: {
    total: number;
    completedLectures: string[];
    finished: boolean;
    certificateAccessDate: string;
  };
  exams: {
    _id: string;
    score: number;
    approved: boolean;
    registryDate: string;
    registryTimestamp: number;
    test: string;
    user: string;
  }[];
  questions: string[];
  upvotes: string[];
  answerUpvotes: string[];
  lectureEvaluations: {
    _id: string;
    score: number;
    comment: string;
    type: "LECTURE";
    registryDate: string;
    registryTimestamp: number;
    course: string;
    lecture: string;
    user: string;
  }[];
  courseEvaluation: {
    _id: string;
    score: number;
    comment: string;
    type: "COURSE";
    registryDate: string;
    registryTimestamp: number;
    course: string;
    lecture: string;
    user: string;
  };
};

export type ResourceData = {
  id: string;
  name: string;
  imgUrl: string;
  downloadUrl: string;
};

export type NotificationData = {
  _id: string;
  title: string;
  content: string;
  openUrl: string;
  type: "ADMIN" | "PUBLIC" | "PRIVATE";
  registryDate: string;
  registryTimestamp: number;
  user: string;
};

export type ProgressData = {
  _id: string;
  total: number;
  completedLectures: string[];
  finished: boolean;
  finishedCourseDate: string;
  certificateUrl: string;
  certificateAccessDate: string;
  registryDate: string;
  registryTimestamp: number;
  course: {
    _id: string;
    name: string;
    product: {
      type: ProductTypesData;
    };
  };
  product: string;
  user: string;
};

export type SingleProgressData = {
  _id: string;
  total: number;
  completedLectures: string[];
  finished: boolean;
  finishedCourseDate: string;
  certificateUrl: string;
  certificateAccessDate: string;
  registryDate: string;
  registryTimestamp: number;
  course: {
    _id: string;
    name: string;
    programContent?: { section: string; items: string[] }[];
    workload: number;
    professionalTitle: string;
    product: {
      type: ProductTypesData;
    };
  };
  product: string;
  user: {
    _id: string;
    personalData: { name: string; surname: string; document: string };
  };
};

export type EvaluationData = {
  _id: string;
  score: number;
  comment: string;
  type: "COURSE" | "LECTURE";
  registryDate: string;
  registryTimestamp: number;
  course: string;
  lecture: string;
  user: string;
};

export type CourseData = {
  _id: string;
  frontId: string;
  name: string;
  description: string;
  registryDate: string;
  registryTimestamp: number;
  sectionsOrder: string[];
  product: string;
  sections: {
    _id: string;
    title: string;
    registryDate: string;
    registryTimestamp: number;
    lecturesOrder: string[];
    course: string;
    lectures: {
      _id: string;
      title: string;
      videoUrl?: string;
      content?: string;
      archives?: {
        _id: string;
        title: string;
        url: string;
      }[];
      questions?: {
        title: string;
        alternatives: { content: string; correct: boolean }[];
      }[];
      isPublished: boolean;
      registryDate: string;
      registryTimestamp: number;
      section: string;
      course: string;
    }[];
  }[];
};

export type CommentData = {
  _id: string;
  type: "SECONDARY" | "PRIMARY";
  status: "PENDING" | "APPROVED" | "DISAPPROVED" | "ANSWERED";
  title: string;
  content: string;
  answer: {
    id: string;
    content: string;
    admin: string;
    upvotesLength: number;
    registryDate: string;
    registryTimestamp: number;
  };
  registryDate: string;
  registryTimestamp: number;
  course: string;
  section: string;
  lecture: string;
  activity: string;
  user: {
    personalData: {
      name: string;
      surname: string;
      document: string;
      phone: string;
    };
    accountData: {
      logo: string;
    };
  };
  upvotes?: string[];
  upvotesLength: number;
  questions: {
    _id: string;
    type: "SECONDARY" | "PRIMARY";
    status: "PENDING" | "APPROVED" | "DISAPPROVED" | "ANSWERED";
    title: string;
    content: string;
    registryDate: string;
    registryTimestamp: number;
    upvotesLength: number;
    user: {
      personalData: {
        name: string;
        surname: string;
        document: string;
        phone: string;
      };
      accountData: {
        logo: string;
      };
    };
  }[];
  primaryQuestion: string;
};

export type OrderData = {
  _id: string;
  paymentType: OrderPaymentTypeData;
  status: OrderStatusData;
  registryDate: string;
  registryTimestamp: number;
  productIncome: number;
  upsellIncome: number;
  installmentsFee: number;
  installments: number;
  totalIncome: number;
  needsReversal: boolean;
  src: string;
  transactionId: string;
  accesses: string[];
  upsell: { title: string; frontId: string }[];
  products: { name: string; frontId: string }[];
  bonus: { name: string; frontId: string }[];
  user: string;
};

export type LecturesData = CourseData["sections"][0]["lectures"];
export type TestData = CourseData["sections"][0]["lectures"][0];
export type QuestionData =
  CourseData["sections"][0]["lectures"][0]["questions"][0];
export type AlternativeData =
  CourseData["sections"][0]["lectures"][0]["questions"][0]["alternatives"][0];

export type UserContextProps = {
  isLoggedIn: boolean;
  userId: string;
  token: string;
  personalData: {
    email: string;
    name: string;
    surname: string;
    document: string;
    phone: string;
  };
  accountData: {
    logo: string;
  };
  products: {
    _id: string;
    status: AccessStatusData;
    productId: string;
    validity: string;
    registryDate: string;
    freeAccessReason: string;
  }[];
  login: (userId: string, token: string, expirationDate?: Date) => void;
  logout: () => void;
  personalDataHandler: (
    email: string,
    name: string,
    surname: string,
    document: string,
    phone: string
  ) => void;
  accountDataHandler: (logo: string) => void;
  productsHandler: (products: UserProductsData) => void;
};

export type UserAuthData = {
  userId: string;
  token: string;
  expiration: Date;
};

export type UserPersonalData = UserContextProps["personalData"];
export type UserAccountData = UserContextProps["accountData"];
export type UserProductsData = UserContextProps["products"];

export type StoreContextData = {
  productsQtd: number;
  amountInCart: number;
  productsInCart: string[];
  upSellInCart: string[];
};

export type StoreContextProps = {
  productsQtd: number;
  amountInCart: number;
  productsInCart: string[];
  upSellInCart: string[];
  addProductHandler: (productId: string, amount: number) => void;
  removeProductHandler: (productId: string, amount: number) => void;
  addUpSellHandler: (productId: string, amount: number) => void;
  removeUpSellHandler: (productId: string, amount: number) => void;
  setTotalAmountHandler: (productsData: ProductData[]) => void;
  setStoreDataHandler: (soreData: StoreContextData) => void;
  setDiscountHandler: (discount: number) => void;
  clearCartHandler: () => void;
};

export interface FilterAPIRequestProps {
  id?: string;
  userCtx: UserContextProps;
  sendRequest: (
    url: string,
    method?: string,
    body?: BodyInit,
    headers?: HeadersInit,
    successMessage?: boolean
  ) => Promise<any>;
  setLoadedItems: React.Dispatch<React.SetStateAction<any[]>>;
  searchValue: string;
  order: string;
  category: string;
  startDate: string;
  endDate: string;
  valueRangeFilterField: string;
  minValueRange: number;
  maxValueRange: number;
  setShowLoadMore?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoadingFilter?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FilterTwoCategoriesAPIRequestProps {
  id?: string;
  userCtx: UserContextProps;
  sendRequest: (
    url: string,
    method?: string,
    body?: BodyInit,
    headers?: HeadersInit,
    successMessage?: boolean
  ) => Promise<any>;
  setLoadedItems: React.Dispatch<React.SetStateAction<any[]>>;
  searchValue: string;
  order: string;
  category1: string;
  category2: string;
  startDate: string;
  endDate: string;
  setShowLoadMore?: React.Dispatch<React.SetStateAction<boolean>>;
}
