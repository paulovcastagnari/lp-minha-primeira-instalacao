import { NextRouter } from "next/router";

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
  router: NextRouter;
}

export const sendLead = async (props: SendLeadProps) => {
  const { sendRequest, formState, tag, router } = props;

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

    var link = document.createElement("a");
    link.href = "https://www.minhaprimeirainstalacao.com.br/obrigado";
    document.body.appendChild(link);
    link.click();
  } catch (err) {
    var link = document.createElement("a");
    link.href = "https://www.minhaprimeirainstalacao.com.br/obrigado";
    document.body.appendChild(link);
    link.click();
  }
};
