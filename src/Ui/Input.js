import React from "react";
import styles from "./input.module.css";
import { Search } from "../images/icons/icons";

const Input = () => {
    return <div className={styles.input}>
        <input placeholder="Search by name, group, type and others" />
        {Search}
    </div>
}
export default Input;