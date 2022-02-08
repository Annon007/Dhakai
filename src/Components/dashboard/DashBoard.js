import React from "react";
import Header from "./header/Header";
import SubHeader from "./subHeader/SubHeader";
import Card from "./card/Card";
import styles from "./dashBoard.module.css";
import Login from "../login/Login";

const DashBoard = () => {
    return <div className={styles.dashBoardContainer}>
        <Login />
        <Header />
        <SubHeader />
        <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    </div>
};

export default DashBoard;