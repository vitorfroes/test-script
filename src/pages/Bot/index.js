import { useEffect } from "react";

const Bot = () => {
  useEffect(() => {
    buildBot(
      window,
      document,
      "https://cdn-bot.qa.hiplatform.com/dtbot.js?token=87055131-5075-4be2-82ae-e491d39a3338",
      "",
      "dtbot-script"
    );
  }, []);

  const buildBot = (h, i, b, o, t) => {
    if (window.HiBot !== undefined) return true;
    var s = i.createElement("script");
    s.src = b + o;
    s.async = true;
    s.id = t;
    i.body.appendChild(s);
  };
  return (
    <>
      <h1>Bot</h1>
    </>
  );
};

export default Bot;
