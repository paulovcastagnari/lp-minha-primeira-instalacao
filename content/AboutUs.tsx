import Link from "next/link";

function Aboutus() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="App">
      <div className="containerab">
        <div className="box box-ab1">
          <img id="deboas" src="/deboas.jpg" alt="teste" />
        </div>

        <div className="box box-ab2 class-container">
          <h1 id="abTitle" className="class-title">
            Quem são Thulio e Victor?
          </h1>
          <h1 id="p1" className="class-description">
            Já foram responsáveis por mais de 300 projetos de Energia Solar
            Fotovoltaica somando mais de 300 projetos de 9mil módulos
            fotovoltaicos instalados.
          </h1>
          <h1 id="p2" className="class-description">
            Reunem mais de 150mil seguidores no YOUTUBE, possuindo HOJE um dos
            CANAIS com MAIOR relevância no seguimento de Energia solar.
          </h1>
          <h1 id="p3" className="class-description">
            Hoje estão a frente da Engehall Renováveis , uma empresa que fatura
            múltiplos 7 dígitos por ano e do AZUME, uma plataforma de Geração de
            Orçamentos com mais de 2mil usuários, que ajuda INTEGRADORES de
            energia solar a gerar orçamentos pelo CELULAR RAPIDAMENTE,
            aumentando assim seus ganhos todos os meses.
          </h1>
          <h1 id="p4" className="class-description">
            Juntos desenvolveram o método Energia Solar Lucrativa que já ajudou
            mais de 10 mil pessoas comuns a instalarem Sistemas de Energia Solar
            TODO SANTO DIA obtendo assim ganhos médios de R$4600 a R$23000,
            mensais.
          </h1>
          <button
            className="u-margin-top-sm btn btn--yellow btn--wide btn--small btn--sm-animation"
            onClick={topFunction}
          >
            Garantir a minha vaga!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
