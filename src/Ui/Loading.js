import React from "react";
import styles from "./loading.module.css";
import loading from "../images/loading.png";

const Loading=()=>{
    return <div className={styles.loadingContainer}>
        <img src={loading} className={styles.load}/>
    </div>
};
export default Loading;