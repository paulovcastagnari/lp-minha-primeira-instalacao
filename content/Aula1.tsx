function Aula1() {
  return (
    <div className="App">
      <div className="container2">
        <div className="l2">
          <img id="alicate" src="/alicate.png" alt="teste" />
        </div>

        <div className="box box-3">
          <img id="grande" src="/grande.jpg" alt="teste" />
        </div>

        <div className="box box-4 class-container">
          <h1 id="tita1" className="class-title">
            Aula 01 - A grande Oportunidade de 2022 30/05 às 20h.
          </h1>
          <h1 id="tita1" className="class-title class-title--2">
            Você vai aprender:
          </h1>
          <h1 id="desca1" className="class-description">
            <ol className="class-description--list">
              <li className="class-description__list-item">
                Porque o setor de energia solar é uma ótima oportunidade de
                trabalho para você
              </li>
              <li className="class-description__list-item">
                Qual é a perspectiva desse setor para os próximos anos
              </li>
              <li className="class-description__list-item">
                Como aproveitar essas oportunidades para trabalhar independente
                do seu nível de conhecimento em elétrica
              </li>
            </ol>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Aula1;
