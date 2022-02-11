import React from "react";
const LoginContext = React.createContext({
    isLoggedIn: true,
    setLog: () => { },
    removeLog: () => { }
});
export default LoginContext;