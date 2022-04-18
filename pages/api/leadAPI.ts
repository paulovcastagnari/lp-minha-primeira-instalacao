import { formatPhoneString } from "../../util/string/formatPhoneString";
import { postFbCustomConversionEvent } from "../../util/other/postFbCustomConversionEvent";
import { postGtagCustomConversion } from "../../util/other/postGtagCustomConversion";
import { FormState } from "../../data/types";

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

// SEND LEAD /////////////////////////////
///////////////////////////////////////////////////
interface SendLeadProps extends FetchPropsNoAuth {
  formState: FormState;
  activeItem: 0 | 1 | 2 | 3;
}

export const sendLead = async (props: SendLeadProps) => {
  const { sendRequest, formState, activeItem } = props;

  let installation = "COMMERCE";

  if (activeItem === 0) {
    installation = "COMMERCE";
  } else if (activeItem === 1) {
    installation = "RESIDENCE";
  } else if (activeItem === 2) {
    installation = "RURAL";
  } else if (activeItem === 3) {
    installation = "INDUSTRY";
  }

  try {
    await sendRequest(
      `${process.env.NEXT_PUBLIC_API_URL}/customers/new-lead`,
      "POST",
      JSON.stringify({
        name: formState.inputs.name.value,
        phone: formatPhoneString(formState.inputs.phone.value as string),
        email: formState.inputs.email.value,
        billValue: formState.inputs.billValue.value,
        uf: formState.inputs.uf.value,
        city: formState.inputs.city.value,
        installation,
      }),
      {
        "Content-Type": "application/json",
      },
      true
    );

    postFbCustomConversionEvent({ eventname: "ENVIOU-FORM-LEAD-SFV" });
    // postGtagCustomConversion({ eventId: "" });
  } catch (err) {}
};
