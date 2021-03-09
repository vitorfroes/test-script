import { useEffect } from "react";
import "./App.css";

function App() {
  const injectScript = () => {
    const script = document.createElement("script");
    script.id = "dt-widget";
    script.src =
      "https://www5.directtalk.com.br/clientes/custom/YeC/widget.min.js";
    script.async = true;

    document.getElementById("FAQ").append(script);
  };

  useEffect(() => {
    injectScript();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste Script</h1>
      </header>
      <main id="FAQ">
        Silvio Santos Ipsum Wellintaaammmmmmmmm. Ma o Silvio Santos Ipsum é
        muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. Boca
        sujuam... sem vergonhuamm. Valendo um milhão de reaisammm. Mah é a porta
        da esperançaam. Ma vai pra lá. Patríciaaammmm... Luiz Ricardouaaammmmmm.
        Ma! Ao adquirir o carnê do Baú, você estará concorrendo a um prêmio de
        cem mil reaisam. Mah é a porta da esperançaam. Qual é a musicamm? Um,
        dois três, quatro, PIM, entendeuam? Estamos em ritmo de festamm. Ma quem
        quer dinheiroam? O Raul Gil é gayam! ... Maa O Ah Ae! Ih Ih! O Raul Gil
        é gayamm! Mah roda a roduamm. Mah você não consegue né Moisés? Você não
        consegueam. Vem pra lá, mah você vai pra cá. Agora vai, agora vem pra
        láamm. Ma vejam só, vejam só. É com você Lombardiam. Vem pra lá, mah
        você vai pra cá. Agora vai, agora vem pra láamm. Ma não existem mulher
        feiam, existem mulher que não conhece os produtos Jequitiamm. Ma o
        Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar
        textuans ha haae. Ma quem quer dinheiroam? Eu só acreditoammmm....
        Vendoammmm. Valendo um milhão de reaisammm. Mah ooooee vem pra cá. Vem
        pra cá. Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma
        você vai gerar textuans ha haae. É bom ou não éam? Eu não queria
        perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino
        fundamentauam? É fácil ou não éam? Valendo um milhão de reaisammm.
      </main>
      <footer>
        <p>Test Script @2021</p>
      </footer>
    </div>
  );
}

export default App;
