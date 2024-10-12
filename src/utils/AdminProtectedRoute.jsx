import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { admins } from "./Admins";
import Loader from "../Components/Loader/Loader";
import { asynccurrentUser } from "../store/Actions/userActions";

export default function AdminProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const isAdmin = user && admins.some((admin) => admin.email === user.email);
  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  if (!user) {
    return <Loader />;
  }
  if (!isAdmin) {
    return <Navigate to="/error" replace />;
  }

  return children;
}
