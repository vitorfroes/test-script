import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "dt-faq-script";
    script.src =
      "https://faq.qa.directtalk.com.br/1.0/static/dist/dt-faq.js?token=7f7bec33-1f55-4ced-8f1b-7c204f35e12b&appearance=e3f2895b-7f36-4180-b061-5c00496364ac";
    script.async = true;

    document.getElementById("FAQ").append(script);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste Script</h1>
      </header>
      <div id="FAQ"></div>
      <footer>
        <p>Test Script @2021</p>
      </footer>
    </div>
  );
}

export default App;
