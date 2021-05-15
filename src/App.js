import Login from "./components/Login";
import { Switch,Route } from "react-router-dom";
import Address from "./components/Address";
import "./App.css"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/address">
        <Address />
      </Route>
    </Switch>
  );
}

export default App;