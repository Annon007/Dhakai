import React from "react";
import dress from "../../../images/dress.jpg";
import defaultPic from "../../../images/defaultPic.jpg";
import styles from "./card.module.css";

const Card = () => {
    return <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
            <div className={styles.cardHedaderImages}>
                <img src={dress} className={styles.dressImg} alt="dress" />
                <img src={dress} className={styles.dressImg} alt="dress" />
                <img src={dress} className={styles.dressImg} alt="dress" />
                <div className={styles.cardHeaderAuthor}>
                    <img src={defaultPic} alt="defaultPic" className={styles.userPic} />
                </div>
            </div>
        </div>
        <div className={styles.cardContent}>
            <p className={styles.cardTitle}>Super D Fabrics Ltd.</p>
            <p className={styles.cardDetails}>See more ideas about cute profile pictures, picture icon, profile picture.See more ideas about cute </p>
        </div>
        <button className={styles.btnDetails}>View Details</button>
    </div>
};
export default Card;