import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./components/Context/AuthProvider";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={ChatRoom} path="/" />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
