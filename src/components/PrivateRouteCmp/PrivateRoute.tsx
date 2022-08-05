import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { loadToken } from "../../redux/token";

const PrivateRoute: React.FC<{ auth: any }> = ({ auth }) => {
  return loadToken() ? <Outlet /> : <Navigate to="/login" />;
};

const mapState = (state: any) => ({
  auth: state.auth,
});

export default connect(mapState)(PrivateRoute);
