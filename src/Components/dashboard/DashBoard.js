import React, { useState, useEffect, useContext } from "react";
import Header from "./header/Header";
import SubHeader from "./subHeader/SubHeader";
import Card from "./card/Card";
import styles from "./dashBoard.module.css";
import Login from "../login/Login";
import Loading from "../../Ui/Loading";

import LoginContext from "../../Store/user-Context";

const DashBoard = () => {
    const checkLogin = useContext(LoginContext);
    // const [showLogin, setShowLogin] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("dhakaiToken")) {
            // setShowLogin(false);
            checkLogin.setLog(false);

        }
    }, [])


    const handleLoginModal = () => {

        // setShowLogin(false);
        checkLogin.setLog(false);

    };

    const handleResults = result => {

        const logoutTime = new Intl.DateTimeFormat('en-US', { minute: 'numeric' }).format(new Date(result.expiresAt))
        console.log(logoutTime)
        setTimeout(() => {
            checkLogin.removeLog();
            localStorage.removeItem("dhakaiToken");
        }, logoutTime * 60000);
    }
    return <div className={styles.dashBoardContainer}>
        {checkLogin.isLoggedIn && <Login onclose={handleLoginModal} onRsult={handleResults} />}
        <Header />
        <SubHeader />
        <div className={styles.cards} >
            {!checkLogin.isLoggedIn && <Card />}
        </div>

    </div>
};

export default DashBoard;