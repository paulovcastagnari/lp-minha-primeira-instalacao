import { Fragment, useState, useEffect } from "react";
import Link from "next/link";

export const CookiesAccept = () => {
  const [accepted, setAccepted] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("cookies-accept") === "true") {
      setAccepted(true);
    }
  }, []);

  const acceptHandler = () => {
    localStorage.setItem("cookies-accept", "true");
    setAccepted(true);
  };

  return (
    <Fragment>
      {!accepted && (
        <div className="cookies-accept">
          <button
            className="cookies-accept__btn btn btn--yellow btn--wide btn--small btn--sm-animation"
            onClick={acceptHandler}
          >
            ACEITAR
          </button>
          <div className="cookies-accept__text">
            Esta página utiliza cookies para melhorar a sua experiência de
            usuário e recomendar conteúdos de seu interesse. Ao se cadastrar em
            nosso evento você concorda nossa política de privacidade.
            <Link href="/termos-de-uso-e-politica-de-privacidade">
              <span className="cookies-accept__link">
                Política de Privacidade
              </span>
            </Link>
          </div>
        </div>
      )}
    </Fragment>
  );
};
