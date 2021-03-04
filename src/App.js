import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "dt-faq-script";
    script.src =
      "https://faq.directtalk.com.br/1.0/static/dist/dt-faq.js?token=d4364725-c760-4cc4-9ea0-77fc417861fe&appearance=f4025e75-79b2-4cd0-ad35-cf5f95ea722d";
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
