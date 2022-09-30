import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Require({ children }) {
  const user = useSelector((store) => store.auth.user);
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default Require;
