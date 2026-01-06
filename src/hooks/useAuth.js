import { useContext } from "react";
import AuthContext from "../context/auth_context.js";

const useAuth = () => useContext(AuthContext);

export default useAuth;
