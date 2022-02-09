import React ,{useState} from "react";
import styles from "./login.module.css";
import Modal from "../../Ui/Modal";
import Loading from "../../Ui/Loading";
// import { getLogin } from "../../Api/login";
const getLogin = async (data) => {
    try {
        const sendReq = fetch("https://devapi.dhakai.com/api/v2/login-buyer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            }, body: JSON.stringify(data)
        })
        const res = await sendReq;
        if(!res.ok) return;
        
        const resData=await res.json();
        return {
            msg:resData.message,
            status:resData.statusCode,
            result:resData.result
        };
    } catch (err) {
        const errMsg= await err.message;
        return {
            msg:errMsg
        };
    }
};
const getApiKey = async () => {
    try {
        const sendAPIreq = fetch("https://devapi.dhakai.com/api/v2/deviceuid");
        const res = await sendAPIreq;
        const response = await res.json();
        return response.result.deviceUuid;
    } catch (err) { }

}
const Login = props => {
    const [errMsg,setErrMsg] = useState();
    const [isLoading, setIsLoading] = useState(false)
    
    const handleFormSubmit = async e => {
        e.preventDefault();
        setIsLoading(true)
        const formSubmit = new FormData(e.target);
        const data = Object.fromEntries(formSubmit);
        const apikey = await getApiKey();
        const formData={
            "auth":{
                "email":data.email.trim(),
                "deviceUuid":`${apikey}`
            },
            "password":data.password.trim()
        };
        console.log(data);
        console.log(apikey);
        const resMsg=await getLogin(formData, apikey);
        setErrMsg(resMsg.msg);
        if(resMsg?.status === 200){
            localStorage.setItem("dhakaiToken",resMsg.result.token);
            setIsLoading(false);
            props.onclose();
            props.onRsult(resMsg.result);
        }else{
            setIsLoading(false);

        }
        // console.log({...data,});
        // const convert = uuidAPIKey.toAPIKey(`${apikey}`);
        // console.log(convert, "API KEY")
        // getLogin(data);
    }
    return <Modal>
        {/* defaultValue="dev.dhakai.us@gmail.com" 
        defaultValue="h3nn2%!7jw"*/}
        <div className={isLoading ? styles.formCont :""}>
            
        {isLoading && <Loading/>}
        {!isLoading && <form onSubmit={handleFormSubmit} className={styles.forms}>
            <label>Email</label>
            <input type="email" name="email"  required />
            <label>Password</label>
            <input type="password" name="password"  required />
            {errMsg && <p className={styles.resMsg}>{errMsg.split("_").join(" ")}</p>}
            <button type="submit">submit</button>
        </form> }
        </div>
        
    </Modal>
};
export default Login;