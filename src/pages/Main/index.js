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
      "https://faq.qa.directtalk.com.br/1.0/static/dist/dt-faq.js?token=47aba87a-84a9-4151-a84a-813603ca475c&appearance=51481a6f-4b8a-4205-ba8a-74f4049526e1&goTop=false&action=search&value=0fa34845-6229-424c-8339-5f81d27fdc15";

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
