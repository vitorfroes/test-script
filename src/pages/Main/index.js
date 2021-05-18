import { useEffect } from "react";

const Main = () => {
  // useEffect(() => {
  //   const div = document.getElementById("root");
  //   buildBot(
  //     div,
  //     document,
  //     "https://cdn-bot.qa.hiplatform.com/dtbot.js?token=7f7bec33-1f55-4ced-8f1b-7c204f35e12b",
  //     "&widget=true&tab=true&text=Alguma%20d%C3%BAvida%3F&textcolor=ffffff&bgcolor=3d70bd&from=bottomright&widgetType=circle",
  //     "dtbot-script"
  //   );
  // }, []);

  // const buildBot = (h, i, b, o, t) => {
  //   if (window.HiBot !== undefined) return true;
  //   var s = i.createElement("script");
  //   s.src = b + o;
  //   s.async = true;
  //   s.id = t;
  //   h.appendChild(s);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste Script</h1>
      </header>
      <main id="FAQ">
        Silvio Santos Ipsum Wellintaaammmmmmmmm. Ma o Silvio Santos Ipsum é
        muitoam interesanteam.
      </main>
      <footer>
        <p>Test Script @2021</p>
      </footer>
    </div>
  );
};

export default Main;
