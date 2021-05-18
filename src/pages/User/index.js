import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const faq = document.getElementById("faq");
    const script = document.createElement("script");
    script.id = "dt-faq-script";
    script.src =
      "https://faq.qa.directtalk.com.br/1.0/static/dist/dt-faq.js?token=7f7bec33-1f55-4ced-8f1b-7c204f35e12b&appearance=0ee58c04-7217-4b2d-849e-a5e31c4c83a4";
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
