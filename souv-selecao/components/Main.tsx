import React from "react";
import Conteudo from "./Conteudo";
import ComecandoPart from "./ComecandoPart";
import Hero from "./Hero";

//juntando os componentes em um único <main> para manter a semântica do HTML5
const Main = () => {
  return (
    <main>
      <Hero /> 
      <ComecandoPart />
      <Conteudo />
    </main>
  );
};

export default Main;
