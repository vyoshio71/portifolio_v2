import React from "react";

const AboutCard = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-customGray"
    >
      <p className="mb-4">
        Em 2020, decidi deixar a graduação em{" "}
        <span className="font-semibold text-white">Engenharia Elétrica</span>{" "}
        para me dedicar ao mundo da tecnologia, com foco no desenvolvimento de
        software.
      </p>
      <p className="mb-4">
        Durante seis meses, estudei intensamente todos os dias, sem falhar um
        único dia. Esse esforço culminou na minha formação em{" "}
        <span className="font-semibold text-white">
          Análise e Desenvolvimento de Sistemas.
        </span>
        Apaixonei-me pelo processo de desenvolvimento, onde ver o resultado do
        trabalho é extremamente gratificante. Com linhas de código e lógica,
        conseguimos criar algo tangível, como este portfólio.
      </p>{" "}
      <p>
        Atualmente, meu principal objetivo é me tornar um desenvolvedor{" "}
        <span className="font-semibold text-white">Full-Stack</span>, criando
        soluções escaláveis e criativas. Estou comprometido em contribuir
        continuamente para a resolução de problemas e a criação de interfaces
        intuitivas. No meu tempo livre, continuo estudando para aprender e
        aprimorar as habilidades que já possuo.
      </p>
    </section>
  );
};

export default AboutCard;
