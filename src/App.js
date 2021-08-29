import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={ChatRoom} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
