import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Bot from "./pages/Bot";
import Client from "./pages/Client";
import Main from "./pages/Main";
import User from "./pages/User";
import mixpanel from "mixpanel-browser";

function App() {
  mixpanel.init("7b10dddda05e41ad3a600c5b092353c9", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bot">Bot</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/client">Client</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/bot">
            <Bot />
          </Route>
          <Route path="/client">
            <Client />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
