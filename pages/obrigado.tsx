import { Fragment } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { HtmlHead } from "../components/meta/HtmlHead";

export const ThankYouPage: NextPage = () => {
  return (
    <Fragment>
      <HtmlHead
        title="Lucrasol - Obrigado"
        description="Um de nossos consultores entrará em contato com você em até 24 horas
        úteis."
        ogImageUrl="/og-image-energia-lucrativa.png"
      />
      <div className="typ">
        <div className="typ__header">
          <h1 className="heading-primary typ__title">Obrigado</h1>
          <p className="typ__subtitle">
            Um de nossos consultores entrará em contato com você em até 24 horas
            úteis. Veja abaixo os próximos passos da aquisição do seu sistema de
            Energia Solar Fotovoltaica.
          </p>
        </div>
        <div className="typ__isnt">
          <div className="typ__isnt-item">
            <h2 className="typ__isnt-item-title">1 - Elaboração da proposta</h2>
            <p className="typ__isnt-item-text">
              Assim que entrarmos em contato, elaboraremos uma proposta
              comercial para suprir o seu consumo de energia elétrica.
            </p>
          </div>
          <div className="typ__isnt-item">
            <h2 className="typ__isnt-item-title">2 - Aprovação da proposta</h2>
            <p className="typ__isnt-item-text">
              Você deverá analisar se o sistema proposto está de acordo com os
              seus requisitos e aprovar a proposta ou solicitar modificações.
            </p>
          </div>
          <div className="typ__isnt-item">
            <h2 className="typ__isnt-item-title">3 - Visita técnica</h2>
            <p className="typ__isnt-item-text">
              Após aprovada a proposta, agendaremos uma visita ténica a fim de
              realizar a análise do local de instalação.
            </p>
          </div>
          <div className="typ__isnt-item">
            <h2 className="typ__isnt-item-title">4 - Assinatura do contrato</h2>
            <p className="typ__isnt-item-text">
              Logo que Efetuada a análise do local de instalação, o contrato de
              serviço deverá ser assinado para que a instalação do sistema
              inicie.
            </p>
          </div>
        </div>
        <div className="typ__cta">
          <Link href="/">
            <button className="btn btn--yellow btn--wide btn--sm-animation">
              Retornar à página anterior
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ThankYouPage;
