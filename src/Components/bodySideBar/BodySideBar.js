import React, { useContext } from "react";
import dhakaiLogo from "../../images/dhakai.png";
import Home from "../../images/icons/house.svg";
import Search from "../../images/icons/search.svg";
import Case from "../../images/icons/case.svg";
import Shirt from "../../images/icons/shirt.svg";
import Wool from "../../images/icons/wool.svg";
import Cart from "../../images/icons/cart.svg";
import Reload from "../../images/icons/reload.svg";
import Settings from "../../images/icons/settings.svg";
import Terms from "../../images/icons/term.svg";
import Logout from "../../images/icons/logout.svg";
import styles from "./bodySideBar.module.css";

import LoginContext from "../../Store/user-Context";

const BodySideBar = props => {
    const userLog = useContext(LoginContext);
    const handleLog = () => {
        userLog.removeLog();
        localStorage.removeItem("dhakaiToken")
    }
    return <div className={styles.sideBarContainer}>
        <div className={styles.sideBarTop}>
            <img src={dhakaiLogo} className={styles.logo} alt="logo" />
            <img src={Home} className={styles.logo} alt="logo" />
            <img src={Search} className={styles.logo} alt="logo" />
            <img src={Case} className={styles.logo} alt="logo" />
            <img src={Shirt} className={styles.logo} alt="logo" />
            <img src={Wool} className={styles.logo} alt="logo" />
            <img src={Cart} className={styles.logo} alt="logo" />
            <img src={Reload} className={styles.logo} alt="logo" />

        </div>
        <div className={styles.sideBarBottom}>
            <img src={Settings} className={styles.logo} alt="logo" />
            <img src={Terms} className={styles.logo} alt="logo" />
            <img src={Logout} onClick={handleLog} className={styles.logo} alt="logo" />
        </div>
    </div>
}
export default BodySideBar;