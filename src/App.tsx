import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import PrivateRoute from "./components/PrivateRouteCmp/PrivateRoute";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import EditUser from "./pages/EditUser";
import MyAccount from "./pages/MyAccount";
import Users from "./pages/Users";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} closeOnClick bodyClassName="toastBody" />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/app" element={<PrivateRoute />}>
            <Route path="my-account" element={<MyAccount />} />
            <Route path="users" element={<Users />} />
            <Route path="user/:id" element={<EditUser />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
