import { Navigate } from "react-router-dom";
import store from "../Store/store";
const PrivateRoute = ({ children }: { children: any }) => {
  const state = store.getState();
  const authToken = state.user.token;
  return authToken ? <>{children}</> : <Navigate to="/homepage" />;
};

export default PrivateRoute;
