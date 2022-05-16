import { Fragment, useState } from "react";
import type { GetStaticProps } from "next";

import { HtmlHead } from "../components/meta/HtmlHead";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { RichContent } from "../components/ui/RichContent";
import { getLegalContent } from "./api/contentAPI";

interface LegalProps {
  loadedContent: string;
}

export const Legal = (props: LegalProps) => {
  const { loadedContent } = props;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <Fragment>
      <HtmlHead
        title="Energia Lucrativa - Termos de Uso e Política de Provacidade"
        description="Energia Lucrativa: Ganhar dinheiro com energia elétrica é aqui!"
        ogImageUrl="/og-image-energia-lucrativa.png"
      />
      <main>
        <div className="legal">
          <div className="legal__main-content">
            {!loadedContent && <LoadingSpinner overlay spinner="STD_CIRCLE" />}
            {loadedContent && (
              <RichContent content={loadedContent} type="PAGE" />
            )}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let loadedContent = await getLegalContent();

  return {
    props: {
      loadedContent: loadedContent || "",
    },
    revalidate: 1,
  };
};

export default Legal;
