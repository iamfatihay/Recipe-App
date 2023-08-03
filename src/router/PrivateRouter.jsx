import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);

  // Redirect to login page if there is no currentUser
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  // Render the content if currentUser exists
  return <Outlet />;
}

export default PrivateRouter;
