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
    // injectScript();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste Script</h1>
      </header>
      <main id="FAQ"></main>
      <footer>
        <p>Test Script @2021</p>
      </footer>
    </div>
  );
}

export default App;
