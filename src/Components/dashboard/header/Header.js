import React from "react";
import styles from "./header.module.css";
import Input from "../../../Ui/Input";
import { Message, Notify, User } from "../../../images/icons/icons";

const Header = () => {
    return <div className={styles.headerContainer}>
        <div className={styles.headerContentLeft}>
            <div>
                <button className={styles.btnActive}>Explore</button>
                <button>Activity</button>
            </div>
        </div>

        <Input />

        <div className={styles.headerContentRight}>
            <a href="#!">{Message}</a>
            <a href="#!">{Notify}</a>
            <a href="#!">{User}</a>
        </div>
    </div>
};

export default Header;