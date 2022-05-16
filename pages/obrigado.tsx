import { Fragment } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { HtmlHeadTyp } from "../components/meta/HtmlHeadTyp";

export const ThankYouPage: NextPage = () => {
  return (
    <Fragment>
      <HtmlHeadTyp
        title="Minha Primeira Instalação - Obrigado"
        description="Minha Primeira Instalação: Aprenda a Instalar um Sistema de Energia Solar e ganhe de R$ 4.600 a R$ 23.000 por mês!"
        ogImageUrl="/og-image-energia-lucrativa.png"
      />
      <div className="typ">
        <div className="typ__header">
          <h1 className="heading-primary typ__title">Atenção</h1>

          <p className="typ__subtitle">
            Clique no botão AZUL abaixo para fazer parte do nosso Grupo Vip,
            confirmar a sua INSCRIÇÃO e receber as informações do nosso evento.
          </p>
        </div>
        <div className="typ__isnt">
          <a
            id="zap"
            href="https://www.energiasolarlucrativa.com.br/mpi"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/botao-azul.png" className="typ__whatsapp" />
          </a>
          <h2 className="typ__isnt-item-title">Atenção</h2>
          <p className="typ__isnt-item-text">
            Atenção: Essa etapa é essencial para confirmar a sua inscrição! Na
            próxima tela aperte em “Entrar no Grupo”
          </p>
        </div>
        !
        <div className="typ__cta">
          <a
            id="zap"
            href="https://www.energiasolarlucrativa.com.br/mpi"
            target="_blank"
            rel="noreferrer"
          >
            <button
              id="zap"
              className="btn btn--yellow btn--wide btn--sm-animation"
            >
              Entrar no grupo
            </button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default ThankYouPage;
