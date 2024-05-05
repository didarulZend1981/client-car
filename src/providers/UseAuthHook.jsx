import { useContext } from "react";
import { AuthContext } from "./AuthProviders";


const UseAuthHook = () => {
  const all = useContext(AuthContext);
  return all;
};

export default UseAuthHook;