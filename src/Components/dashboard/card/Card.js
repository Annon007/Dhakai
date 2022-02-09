import React,{useState,useEffect} from "react";
import dress from "../../../images/dress.jpg";
import defaultPic from "../../../images/defaultPic.jpg";
import styles from "./card.module.css";
import Loading from "../../../Ui/Loading";

const Card = props => {
    const [data,setData] = useState();
    const [flag,setFlag] = useState(false)
    useEffect(()=>{
        const getData= async()=>{
            try{
                const getFiles=fetch("https://devapi.dhakai.com/api/v2/manufacturers",{
                    method:"GET",
                    headers:{
                        "Authorization":localStorage.getItem("dhakaiToken"),
                    }
                });
                const res = await getFiles;
                const data = await res.json();
                console.log(data.result);
                setData(data.result);
                setFlag(true);
            }catch(err){
        
            }
        };
        getData();
    },[flag ,localStorage.getItem("dhakaiToken")])
   console.log(data,"State Dtas");
   const manufacture=data?.manufacturers?.map((el,i)=>{
       return <div key={i} className={styles.cardContainer}>
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
   });



    return <>
        {!flag && <Loading/>}
        {flag && manufacture}
    </>
};
export default Card;