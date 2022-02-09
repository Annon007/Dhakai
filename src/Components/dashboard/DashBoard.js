import React, {useState,useEffect} from "react";
import Header from "./header/Header";
import SubHeader from "./subHeader/SubHeader";
import Card from "./card/Card";
import styles from "./dashBoard.module.css";
import Login from "../login/Login";
import Loading from "../../Ui/Loading";

// console.log(resData1)
const DashBoard = () => {
    const [showLogin,setShowLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        if(localStorage.getItem("dhakaiToken")){
            setShowLogin(false);
        }
    },[])

    
    const handleLoginModal=()=>{
        setShowLogin(false);
        
    }
    
    const handleResults=result=>{
        
        const logoutTime= new Intl.DateTimeFormat('en-US',{minute: 'numeric'}).format(new Date(result.expiresAt))
        console.log(logoutTime)
        setTimeout(()=>{
            setShowLogin(true);
            localStorage.removeItem("dhakaiToken");
        },logoutTime*60000);
    }
    const handelLoading=()=>{
        setIsLoading(false);
    };
    return <div className={styles.dashBoardContainer}>
        {showLogin && <Login onclose={handleLoginModal} onRsult={handleResults} />}
        <Header />
        <SubHeader />
        <div className={styles.cards} >
        {/* {isLoading && <Loading />}
        {!isLoading && 
            <Card onClose={handelLoading}/>
        } */}
        {!showLogin && <Card/>}
        </div>
        
    </div>
};

export default DashBoard;