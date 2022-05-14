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
  tag: string;
}

// SEND LEAD /////////////////////////////
///////////////////////////////////////////////////
interface SendLeadProps extends FetchPropsNoAuth {
  formState: FormState;
  tag: string;
}

export const sendLead = async (props: SendLeadProps) => {
  const { sendRequest, formState, tag } = props;

  try {
    await sendRequest(
      "https://energia-lucrativa.herokuapp.com/api/contacts/new/contact",
      "POST",
      JSON.stringify({
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        tag: tag,
        list: "22",
      }),
      {
        "Content-Type": "application/json",
      },
      true
    );

    window.open(
      "https://www.minhaprimeirainstalacao.com.br/obrigado",
      "_blank"
    );

    postFbCustomConversionEvent({
      eventname: "CADASTRO-MINHA_PRIMEIRA_INSTALACAO-SFV",
    });
  } catch (err) {}
};
