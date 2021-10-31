import React, {createContext} from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const allContext = useFirebase(); //used all contexts from  firebase hook
  return (
    <div>
      <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
