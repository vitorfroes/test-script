import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const faq = document.getElementById("faq");
    const script = document.createElement("script");
    script.id = "dt-faq-script";
    script.src =
      "https://faq.directtalk.com.br/1.0/static/dist/dt-faq.js?token=886c96de-95c4-44a4-b54f-9bed4c9c33a6&appearance=6175a339-096b-11e7-94c7-1231004265b1";
    script.async = true;

    faq.appendChild(script);
  }, []);
  return (
    <>
      <header className="App-header">
        <h1>User</h1>
      </header>
      <div id="faq"></div>
    </>
  );
};

export default User;
