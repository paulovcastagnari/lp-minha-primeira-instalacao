import { UserContextProps } from "../../data/types";

// GENERAL PROPS  /////////////////////////////////
///////////////////////////////////////////////////
export interface FetchPropsNoAuth {
  sendRequest: (
    url: string,
    method?: string,
    body?: BodyInit,
    headers?: HeadersInit,
    successMessage?: boolean
  ) => Promise<any>;
}

export interface FetchPropsAuth {
  sendRequest: (
    url: string,
    method?: string,
    body?: BodyInit,
    headers?: HeadersInit,
    successMessage?: boolean
  ) => Promise<any>;
  userCtx: UserContextProps;
}

// GET LEGAL CONTENT //////////////////////////////
///////////////////////////////////////////////////
export const getLegalContent = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contents/legal`,
      {
        method: "GET",
        body: null,
        headers: {},
      }
    );

    const responseData: { content: string } = await response.json();
    return responseData.content;
  } catch (err) {}
};
