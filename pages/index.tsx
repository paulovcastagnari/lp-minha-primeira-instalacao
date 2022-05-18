import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { useHttpClient } from "../hooks/httpHook";
import { HtmlHead } from "../components/meta/HtmlHead";
import { PopupError } from "../components/ui/PopupError";
import { CookiesAccept } from "../components/ui/CookiesAccept";
import { useForm } from "../hooks/formHook";
import { sendLead } from "./api/leadAPI";
import { Headline } from "../content/Headline";
import Aula1 from "../content/Aula1";
import Aula2 from "../content/Aula2";
import Aula3 from "../content/Aula3";
import Aula4 from "../content/Aula4";
import Aula5 from "../content/Aula5";
import AboutUs from "../content/AboutUs";

export const Login: NextPage = () => {
  const { sendRequest, error, clearError, isLoading } = useHttpClient();
  const { formState, inputHandler } = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const router = useRouter();
  const src: string = (router.query?.src as string) || "";
  const [tag, setTag] = useState<string>("");

  useEffect(() => {
    if (src === "facebook1") {
      setTag("45");
    } else if (src === "facebook2") {
      setTag("46");
    } else if (src === "instagram1") {
      setTag("41");
    } else if (src === "instagram2") {
      setTag("42");
    } else if (src === "instagram-org") {
      setTag("53");
    } else if (src === "stories1") {
      setTag("43");
    } else if (src === "stories2") {
      setTag("44");
    } else if (src === "youtube-org") {
      setTag("40");
    } else if (src === "display") {
      setTag("47");
    } else if (src === "youtube1") {
      setTag("48");
    } else if (src === "youtube2") {
      setTag("49");
    } else if (src === "pesquisa") {
      setTag("50");
    } else {
      setTag("50");
    }
  }, [src]);

  const registerLeadHandler = async () => {
    await sendLead({ sendRequest, formState, tag, router });
  };

  return (
    <div>
      <HtmlHead
        title="Minha Primeira Instalação"
        description="Minha Primeira Instalação: Aprenda a Instalar um Sistema de Energia Solar e ganhe de R$ 4.600 a R$ 23.000 por mês!"
        ogImageUrl="/og-image-energia-lucrativa.png"
      />
      <main>
        <PopupError
          error={error}
          active={!!error}
          closePopupHandler={clearError}
        />
        <div className="App">
          <CookiesAccept />
          <Headline
            isLoading={isLoading}
            inputHandler={inputHandler}
            formState={formState}
            registerLeadHandler={registerLeadHandler}
          />
          <Aula1 />
          <Aula2 />
          <Aula3 />
          <Aula4 />
          <Aula5 />
          <AboutUs />
        </div>
      </main>
    </div>
  );
};

export default Login;
