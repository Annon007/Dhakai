import React from "react";
import dhakaiLogo from "../../images/dhakai.png";
import { Home } from "../../images/icons/icons"
import styles from "./bodySideBar.module.css";

const BodySideBar = () => {
    return <div className={styles.sideBarContainer}>
        <div className={styles.sideBarTop}>
            <img src={dhakaiLogo} className={styles.logo} alt="logo" />
            <a href="#!">{Home}</a>
            <a href="#!">{Home}</a>
            <a href="#!">{Home}</a>
            <a href="#!">{Home}</a>
            <a href="#!">{Home}</a>
            <a href="#!">{Home}</a>
            <a href="#!">{Home}</a>
        </div>
        <div className={styles.sideBarBottom}>
            <a href="#!">{Home}</a>
            <a href="#!">{Home}</a>
            <a href="#!">{Home}</a>
        </div>
    </div>
}
export default BodySideBar;