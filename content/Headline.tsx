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
        <p className="headline__sub-copy">
          Independentemente da sua profissão e do seu nível de conhecimento de
          elétrica.
        </p>
        <div className="headline__form form--wide">
          <form
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
        <p className="headline__certificate-copy">
          Evento com{" "}
          <span className="headline__certificate-copy--highlight">
            certificado de participação
          </span>{" "}
          100% online e{" "}
          <span className="headline__certificate-copy--highlight">
            100% gratuito
          </span>{" "}
          do dia 30/05 a 5/06 às 20h
        </p>
      </div>
    </div>
  );
};
