import { InputRegular } from "../components/inputs/InputRegular";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../util/validation/validators";

import { FormState } from "../data/types";

interface HeadlineProps {
  isLoading: boolean;
  inputHandler: (
    id: string,
    value: string | boolean | File,
    isValid: boolean,
    label: string
  ) => void;
  formState: FormState;
  registerLeadHandler: () => Promise<void>;
}

export const Headline = (props: HeadlineProps) => {
  const { isLoading, inputHandler, formState, registerLeadHandler } = props;

  return (
    <div className="headline">
      <img
        src="/thulio-e-victor-minha-primeira-instalacao.png"
        alt="Thulio e Victor - Minha Primeira Instalação"
        className="headline__img"
      />
      <div id="cadastro" className="headline__copy-and-form">
        <p className="headline__main-copy">
          Descubra como ganhar de{" "}
          <span className="headline__main-copy--highlight">
            R$ 4.600 a R$ 23.000
          </span>{" "}
          por mês trabalhando com ENERGIA SOLAR.
        </p>
        <p className="headline__certificate-copy">
          <span className="headline__certificate-copy--highlight">
            certificado de participação e 100% gratuito
          </span>{" "}
        </p>
        <div className="headline__form form--wide">
          <form
            className="headline__form-form"
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
                helpertext="Insira um nome válido"
                forceError={formState?.inputs?.name?.forceError || false}
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
                helpertext="Insira um e-mail válido"
                forceError={formState?.inputs?.email?.forceError || false}
                noMinWidth
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                registerLeadHandler();
              }}
              className="btn btn--yellow btn--wide btn--small"
            >
              Garantir minha vaga!
            </button>
          </form>
        </div>
        <p className="headline__certificate-copy headline__certificate-copy--date">
          30/05 a 05/06 às 20h00
        </p>
      </div>
    </div>
  );
};
