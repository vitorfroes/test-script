import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Bot from "./pages/Bot";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bot">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/bot">
            <Bot />
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
