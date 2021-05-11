import { useEffect } from "react";

const Bot = () => {
  useEffect(() => {
    const div = document.getElementById("root");
    buildBot(
      div,
      document,
      "https://cdn-bot.qa.hiplatform.com/dtbot.js?token=7f7bec33-1f55-4ced-8f1b-7c204f35e12b",
      "&widget=true&tab=true&text=Alguma%20d%C3%BAvida%3F&textcolor=ffffff&bgcolor=3d70bd&from=bottomright&widgetType=circle&iconId=",
      "dtbot-script"
    );
  }, []);

  const buildBot = (h, i, b, o, t) => {
    if (window.HiBot !== undefined) return true;
    var s = i.createElement("script");
    s.src = b + o;
    s.async = true;
    s.id = t;
    h.appendChild(s);
  };
  return (
    <>
      <header className="App-header">
        <h1>Bot</h1>
      </header>
      <main id="container"></main>
    </>
  );
};

export default Bot;
