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
      "https://faq.qa.directtalk.com.br/1.0/static/dist/v2/dt-faq.js?token=47aba87a-84a9-4151-a84a-813603ca475c&appearance=f62c3d54-f1f7-4b92-a9b7-37b03dd43d86&goTop=false";

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
