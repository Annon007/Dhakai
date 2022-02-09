import React, { useState, useEffect } from "react";
import dress from "../../../images/dress.jpg";
import defaultPic from "../../../images/defaultPic.jpg";
import styles from "./card.module.css";
import Loading from "../../../Ui/Loading";

const Card = props => {
    const [data, setData] = useState();
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        const getData = async () => {
            try {
                const getFiles = fetch("https://devapi.dhakai.com/api/v2/manufacturers", {
                    method: "GET",
                    headers: {
                        "Authorization": localStorage.getItem("dhakaiToken"),
                    }
                });
                const res = await getFiles;
                const data = await res.json();
                console.log(data.result);
                setData(data.result);
                setFlag(true);
            } catch (err) {

            }
        };
        getData();
    }, [flag, localStorage.getItem("dhakaiToken")])
    console.log(data, "State Dtas");
    const manufacture = data?.manufacturers?.map((el, i) => {
        return <div key={el._id} className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${el.meta.banners.length}, 1fr)` }} className={styles.cardHedaderImages}>
                    {el.meta.banners.map(bn => <img key={bn._id} src={bn.url} className={styles.dressImg} alt="dress" />)}
                    <div className={styles.cardHeaderAuthor}>
                        <img src={el.meta.logo.url ?? defaultPic} alt="defaultPic" className={styles.userPic} />
                    </div>
                </div>
            </div>
            <div className={styles.cardContent}>
                <p className={styles.cardTitle}>{el.meta.companyName}</p>
                <p className={styles.cardDetails}>{`${el.addresses?.[0].state}, ${el.addresses?.[0].country} • `} <span>{`Min Qty ${el.minOrderQty}`}</span></p>

                <p className={styles.productGroups}>{` ${el.productGroups.map(pg => pg.name)}`}</p>

            </div>
            <button className={styles.btnDetails}>View Details</button>
        </div>
    });



    return <>
        {!flag && <Loading />}
        {flag && manufacture}
    </>
};
export default Card;