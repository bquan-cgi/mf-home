import { FunctionComponent, ReactElement } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSessionStore } from "./sessionStore";

export const ProtectedRoute: FunctionComponent = (): ReactElement => {
  const sessionStore = useSessionStore();
  return sessionStore.token ? <Outlet /> : <Navigate to="/login" />;
};
