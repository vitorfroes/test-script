import { useState } from "react";

const Main = () => {
  const [logged, setLogged] = useState(false);

  function handleLogout() {
    window.FB.logout((response) => {
      if (!response || response.error) {
        throw new Error(response.error);
      } else {
        setLogged(false);
      }
    });
  }

  function handleLogin() {
    window.FB.login(
      (response) => {
        if (response.status === "connected") {
          console.log("Success");
          setLogged(true);
        }
      },
      {
        scope: "public_profile,email,user_messenger_contact",
        messenger_page_id: 109805828122769,
      }
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste Script</h1>
      </header>
      <main id="FAQ">
        Silvio Santos Ipsum Wellintaaammmmmmmmm. Ma o Silvio Santos Ipsum é
        muitoam interesanteam.
        <div>
          {!logged ? (
            <button title="Login Facebook" onClick={handleLogin}>
              Login Facebook
            </button>
          ) : (
            <button title="Logout" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </main>
      <footer>
        <p>Test Script @2021</p>
      </footer>
    </div>
  );
};

export default Main;
