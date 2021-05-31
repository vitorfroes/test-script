import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const faq = document.getElementById("faq");
    const script = document.createElement("script");
    script.id = "dt-faq-script";
    script.src =
      "https://faq.directtalk.com.br/1.0/static/dist/dt-faq.js?token=671715a3-f067-493d-a2d0-3c16d9c145e4&appearance=dcb3f402-f7c3-4ada-9511-74347e4594bb";
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
