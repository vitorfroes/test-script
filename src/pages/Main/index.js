import { useEffect, useRef } from "react";

const Main = () => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef) {
      createScript(divRef.current);
    }
  }, []);

  const createScript = (elem) => {
    const script = document.createElement("script");
    script.id = "dt-faq-script";
    script.src =
      "https://faq.directtalk.com.br/1.0/static/dist/v2/dt-faq.js?token=671715a3-f067-493d-a2d0-3c16d9c145e4&appearance=1b4e2c2e-a0fd-4d20-bf7b-7990eedff144&goTop=false";

    elem.appendChild(script);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste Script</h1>
      </header>
      <main>
        <h2>FAQ</h2>
        <div id="hi-faq" ref={divRef}></div>
      </main>
      <footer>
        <p>Test Script @{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Main;
