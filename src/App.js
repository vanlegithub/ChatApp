import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import AddRoomModals from "./components/Modals/AddRoomModals";
import InviteMemberModals from "./components/Modals/InviteMemberModals";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={ChatRoom} path="/" />
          </Switch>
          <AddRoomModals />
          <InviteMemberModals />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
