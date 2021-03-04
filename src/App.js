import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "dt-faq-script";
    script.src =
      "https://faq.directtalk.com.br/1.0/static/dist/dt-faq.js?token=270406db-0a7a-416a-b85c-35409e55f7c6&appearance=0b90f355-7f5f-4c69-b6ba-a2968dccd033";
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
