import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import StoreRoundedIcon from "@material-ui/icons/StoreRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import EcoRoundedIcon from "@material-ui/icons/EcoRounded";

import { useHttpClient } from "../hooks/httpHook";
import { useForm } from "../hooks/formHook";
import { HtmlHead } from "../components/meta/HtmlHead";
import { PopupError } from "../components/ui/PopupError";
import { PopupInvalid } from "../components/ui/PopupInvalid";
import { PopupSuccess } from "../components/ui/PopupSuccess";
import { InputRegular } from "../components/inputs/InputRegular";
import { InputPhone } from "../components/inputs/InputPhone";
import { InputSelect } from "../components/inputs/InputSelect";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { postFbCustomConversionEvent } from "../util/other/postFbCustomConversionEvent";
import { sendLead } from "./api/leadAPI";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH_NUM,
} from "../util/validation/validators";
import { BILL_VALUE_OPTIONS, UF } from "../data/static";

export const Index: NextPage = () => {
  const router = useRouter();
  const { sendRequest, error, clearError, isLoading, success, clearSuccess } =
    useHttpClient();
  const {
    formState,
    inputHandler,
    reportInvalid,
    invalidInputs,
    clearInvalid,
  } = useForm({}, false);
  const [activeItem, setActiveItem] = useState<0 | 1 | 2 | 3>(0);

  const reportInvalidHandler = () => {
    reportInvalid(formState.inputs);
  };

  const closeInvalidPopupHandler = () => {
    clearInvalid();
  };

  const changeViewHandler = () => {
    router.push("/obrigado");
  };

  const sendLeadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (formState.isValid) {
      sendLead({ sendRequest, formState, activeItem });
    } else {
      reportInvalidHandler();
    }
  };

  useEffect(() => {
    postFbCustomConversionEvent({ eventname: "PAGE-VIEW-LEAD-SFV" });
  }, []);

  return (
    <div>
      <HtmlHead
        title="Lucrasol - Orçamento de Energia Solar Fotovoltaica" // Mudar o nome depois de definido
        description="Lucrasol: Faça já o seu orçamento de energia solar fotovoltaica e descubra quanto você irá economizar em sua conta de energia elétrica!" // Mudar o nome depois de definido
        ogImageUrl="/og-image-energia-lucrativa.png"
      />
      <main className="index">
        <PopupInvalid
          active={!!invalidInputs}
          closeInvalidPopupHandler={closeInvalidPopupHandler}
          invalidInputs={invalidInputs}
        />
        <PopupError
          error={error}
          active={!!error}
          closePopupHandler={clearError}
        />
        <PopupSuccess
          message="Dados enviados com sucesso! Um de nossos consultores entrará em contato com você em até 24 horas úteis."
          active={success}
          closePopupHandler={clearSuccess}
          changeViewHandler={changeViewHandler}
        />
        <div className="index__title-container">
          <h1 className="index__title-1">ORÇAMENTO</h1>
          <span className="index__title-2">DE</span>
          <img
            src="energia-lucrativa-icon-512x512.png"
            alt="Lucrasol Orçamento de Energia Solar Fotovoltaica"
            title="Lucrasol Orçamento de Energia Solar Fotovoltaica"
            className="index__title-logo"
          />
          <h1 className="index__title-3 glow">ENERGIA SOLAR</h1>
        </div>
        <h2 className="index__main-copy">
          Após preencher o formulário abaixo, um dos nossos consultores entrará
          em contato com você para{" "}
          <span className="index__main-copy--highlight">
            elaborar o seu orçamento
          </span>{" "}
          de forma gratuita.
        </h2>
        <div className="index__form-container">
          <div className="form form--wide u-margin-top-lg">
            {isLoading && <LoadingSpinner overlay spinner="GRID_SCALE" />}
            <form
              className="form__inputs"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <p className="index__form-paragraph">Tipo de instalação:</p>
              <div className="checkout__form-payment-choice">
                <button
                  className={`checkout__form-payment-choice-btn btn-icon-outlined ${
                    activeItem === 0 ? "btn-icon-outlined--active" : ""
                  }`}
                  onClick={() => {
                    setActiveItem(0);
                  }}
                  title="Instalação comercial"
                >
                  <StoreRoundedIcon /> Comércio
                </button>
                <button
                  className={`checkout__form-payment-choice-btn btn-icon-outlined ${
                    activeItem === 1 ? "btn-icon-outlined--active" : ""
                  }`}
                  onClick={() => {
                    setActiveItem(1);
                  }}
                  title="Instalação residencial"
                >
                  <HomeRoundedIcon /> Residência
                </button>
                <button
                  className={`checkout__form-payment-choice-btn btn-icon-outlined ${
                    activeItem === 2 ? "btn-icon-outlined--active" : ""
                  }`}
                  onClick={() => {
                    setActiveItem(2);
                  }}
                  title="Instalação em zona rural"
                >
                  <EcoRoundedIcon /> Rural
                </button>
                <button
                  className={`checkout__form-payment-choice-btn btn-icon-outlined ${
                    activeItem === 3 ? "btn-icon-outlined--active" : ""
                  }`}
                  onClick={() => {
                    setActiveItem(3);
                  }}
                  title="Instalação industrial"
                >
                  <BusinessRoundedIcon /> Indústria
                </button>
              </div>
              <div className="form__group-container form__group-container--responsive">
                <div className="form__group">
                  <InputRegular
                    id="name"
                    type="text"
                    label="Nome"
                    title="Insira o seu nome"
                    filter="CHAR_AND_NUM"
                    inputHandler={inputHandler}
                    validators={[VALIDATOR_REQUIRE()]}
                    forceError={formState.inputs?.name?.forceError || false}
                    noMinWidth
                  />
                </div>
                <div className="form__group">
                  <InputPhone
                    id="phone"
                    label="Celular"
                    title="Insira o número do seu celular"
                    inputHandler={inputHandler}
                    validators={[
                      VALIDATOR_REQUIRE(),
                      VALIDATOR_MINLENGTH_NUM(10),
                    ]}
                    forceError={formState.inputs?.phone?.forceError || false}
                    noMinWidth
                  />
                </div>
              </div>
              <div className="form__group-container form__group-container--responsive">
                <div className="form__group">
                  <InputRegular
                    id="email"
                    type="email"
                    label="E-mail"
                    title="Insira o seu e-mail."
                    inputHandler={inputHandler}
                    validators={[VALIDATOR_EMAIL()]}
                    transform="LOWERCASE"
                    forceError={formState.inputs?.email?.forceError || false}
                    noMinWidth
                  />
                </div>
                <div className="form__group">
                  <InputSelect
                    id="billValue"
                    width={100}
                    label="Valor da conta"
                    options={BILL_VALUE_OPTIONS}
                    inputHandler={inputHandler}
                    title="Insira o valor da sua conta de energia"
                    forceError={
                      formState.inputs?.billValue?.forceError || false
                    }
                    listOnTop
                  />
                </div>
              </div>
              <div className="form__group-container form__group-container--10-fr">
                <div className="form__group">
                  <InputSelect
                    id="uf"
                    label="UF"
                    width={100}
                    title="Insira a UF do local da intalação"
                    inputHandler={inputHandler}
                    options={UF}
                    forceError={formState.inputs?.uf?.forceError || false}
                    initialValue="MG"
                    listOnTop
                  />
                </div>
                <div className="form__group">
                  <InputRegular
                    id="city"
                    type="text"
                    label="Cidade"
                    filter="CONTENT"
                    title="Insira a cidade do local da instalação"
                    inputHandler={inputHandler}
                    validators={[VALIDATOR_REQUIRE()]}
                    forceError={formState.inputs?.city?.forceError || false}
                    noMinWidth
                  />
                </div>
              </div>
              <button
                onClick={(e) => {
                  sendLeadHandler(e);
                }}
                className={`btn ${
                  formState.isValid ? "btn--yellow" : "btn--grey"
                } btn--wide btn--sm-animation`}
              >
                {formState.isValid ? "Fazer orçamento" : "O que está faltando?"}
              </button>
            </form>
          </div>
          <div className="index__logo-img-bottom-container">
            <img
              src="/lucrasol-orcamento-energia-solar.png"
              alt="Lucrasol Orçamento de Energia Solar Fotovoltaica"
              title="Lucrasol Orçamento de Energia Solar Fotovoltaica"
              className="index__logo-img-bottom"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
