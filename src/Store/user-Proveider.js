import React, { useReducer } from "react";
import LoginContext from "./user-Context";

const loginReducer = (state, action) => {
    if (action.type === "LOG") {
        return state.isLoggedIn = action.value;
        // console.log(state.isLoggedIn, "INSIDE THE REDUCER FUNCTION")
    }
    if (action.type === "LOG") {
        return state.isLoggedIn = true;
    }
    return { isLoggedIn: true }
}
const LoginProvider = props => {
    const [logState, dispatchLoggedIn] = useReducer(loginReducer, { isLoggedIn: true })
    // console.log(logState, "CHECKING THE UODTEING STATE");
    const updatingLog = (state) => {

        dispatchLoggedIn({ type: "LOG", value: state })
    }
    const removingLog = () => {
        dispatchLoggedIn({ type: "LOG_OUT" })
    }
    const initialValue = {
        isLoggedIn: logState.isLoggedIn,
        setLog: updatingLog,
        removeLog: removingLog
    }
    return <LoginContext.Provider value={initialValue}>
        {props.children}
    </LoginContext.Provider>
};
export default LoginProvider;