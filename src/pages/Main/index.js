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
      "https://faq.directtalk.com.br/1.0/static/dist/v2/dt-faq.js?token=1e237c79-654f-4352-854a-d88ca3292936&appearance=a2187b4d-88b5-42ab-95d6-15ccd116eef9";

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
        <p>Test Script @2022</p>
      </footer>
    </div>
  );
};

export default Main;
