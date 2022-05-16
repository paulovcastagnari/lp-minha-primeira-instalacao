import { Fragment, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { HtmlHeadTyp } from "../components/meta/HtmlHeadTyp";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";

export const ThankYouPage: NextPage = () => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

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
            Sua inscrição esta QUASE finalizada. Para concluir sua participação
            no evento assista ao vídeo SUPER CURTO abaixo e clique no botão azul
            abaixo para entrar para nosso grupo VIP do evento!
          </p>
        </div>
        <div className="typ__isnt">
          <div className="typ__progress">
            <div className="typ__progress-done">
              <span className="typ__progress-number">60%</span>
            </div>
          </div>
          <div className="typ__video-container">
            <div className="video">
              {!videoLoaded && <LoadingSpinner spinner="STD_CIRCLE" overlay />}
              <iframe
                title="Vídeo da Aula"
                width="853"
                height="480"
                src="https://www.youtube.com/embed/-J8XGWA4PVM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => {
                  setVideoLoaded(true);
                }}
              ></iframe>
            </div>
          </div>
          <a
            id="zap"
            href="https://www.energiasolarlucrativa.com.br/mpi"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/botao-azul.png" className="typ__whatsapp" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default ThankYouPage;
