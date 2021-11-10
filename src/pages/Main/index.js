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
        messenger_page_id: 100918475750023,
      }
    );
  }

  function handleReset() {
    const requestUrl = `https://www.facebook.com/v12.0/dialog/oauth?
    client_id=1076671459078829
    &redirect_uri="https://kind-lichterman-2d9143.netlify.app/"
    &auth_type=rerequest
    &scope=email,user_messenger_contact
    &messenger_page_id=100918475750023
    &reset_messenger_state=1`;

    const headers = new Headers();
    const initFetch = {
      method: "GET",
      headers: headers,
      mode: "no-cors",
      cache: "default",
    };

    fetch(requestUrl, initFetch)
      .then((response) => {
        console.log({ response });
      })
      .catch((err) => {
        console.log(err);
      });
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
            <button
              title="Login Facebook"
              className="login-btn"
              onClick={handleLogin}
            >
              Login Facebook
            </button>
          ) : (
            <button title="Logout" className="login-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
        <div className="reset">
          Reset FB Login Connected
          <button
            type="button"
            title="reset"
            className="reset-btn"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </main>
      <footer>
        <p>Test Script @2021</p>
      </footer>
    </div>
  );
};

export default Main;
