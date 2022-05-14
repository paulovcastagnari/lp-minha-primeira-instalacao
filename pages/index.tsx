import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPage } from "next";

import { useHttpClient } from "../hooks/httpHook";
import { HtmlHead } from "../components/meta/HtmlHead";
import { InputRegular } from "../components/inputs/InputRegular";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { PopupError } from "../components/ui/PopupError";
import { useForm } from "../hooks/formHook";
import { sendLead } from "./api/leadAPI";
import Aula1 from "../content/Aula1";
import Aula2 from "../content/Aula2";
import Aula3 from "../content/Aula3";
import Aula4 from "../content/Aula4";
import Aula5 from "../content/Aula5";
import AboutUs from "../content/AboutUs";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../util/validation/validators";

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

  const registerLeadHandler = () => {
    sendLead({ sendRequest, formState, tag });
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
          <div className="container">
            <svg className="svg">
              <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                <path d="M0,0 H0.915 a0.055,0.098,0,0,1,0.085,0.08 V0.902 a0.065,0.098,0,0,1,-0.085,0.098 H0 a0,0,0,0,1,0,0 V0 A0,0,0,0,1,0,0"></path>
              </clipPath>
            </svg>
            <div className="clipped"></div>
            <div className="l1">
              <h1>space</h1>
            </div>
            <div className="r1"></div>
            <div className="box box-1">
              <h1 id="chamada1">
                Aprenda a Instalar um <br />
                Sistema de Energia Solar e<br /> ganhe de{" "}
                <span style={{ color: "#ff9635" }}>R$ 4.600 </span> <br />a{" "}
                <span style={{ color: "#ff9635" }}>R$ 23.000</span> por mês
              </h1>

              <div id="form">
                <form
                  id="f123"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  {isLoading && <LoadingSpinner spinner="GRID_SCALE" />}
                  <div className="form__group">
                    <InputRegular
                      id="name"
                      type="text"
                      label="Nome"
                      title="Insira o seu nome"
                      inputHandler={inputHandler}
                      validators={[VALIDATOR_REQUIRE()]}
                      filter="CHAR_ONLY"
                      noMinWidth
                    />
                  </div>
                  <div className="form__group">
                    <InputRegular
                      id="email"
                      type="email"
                      label="E-mail"
                      title="Insira o seu e-mail"
                      inputHandler={inputHandler}
                      validators={[VALIDATOR_EMAIL()]}
                      transform="LOWERCASE"
                      noMinWidth
                    />
                  </div>
                  <button
                    disabled={!formState.isValid}
                    onClick={(e) => {
                      e.preventDefault();
                      registerLeadHandler();
                    }}
                    className="btn btn--yellow btn--wide btn--small"
                  >
                    Garantir a vaga!
                  </button>
                </form>
              </div>
            </div>
            <div className="box box-2">
              <img id="Logo" src="/Logo.png" alt="teste" />
              <img id="img1" src="/teste.png" alt="teste" />
              <img id="img2" src="/Teste2.png" alt="teste" />
            </div>
          </div>
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
