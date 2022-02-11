import React, { useState } from "react";
import styles from "./login.module.css";
import Modal from "../../Ui/Modal";
import Loading from "../../Ui/Loading";
import { getLogin, getApiKey } from "../../Api/loginAPI";


const Login = props => {
    const [errMsg, setErrMsg] = useState();
    const [isLoading, setIsLoading] = useState(false)

    const handleFormSubmit = async e => {
        e.preventDefault();
        setIsLoading(true)
        const formSubmit = new FormData(e.target);
        const data = Object.fromEntries(formSubmit);
        const apikey = await getApiKey();
        const formData = {
            "auth": {
                "email": data.email.trim(),
                "deviceUuid": `${apikey}`
            },
            "password": data.password.trim()
        };
        console.log(data);
        console.log(apikey);
        const resMsg = await getLogin(formData, apikey);
        setErrMsg(resMsg.msg);
        if (resMsg?.status === 200) {
            localStorage.setItem("dhakaiToken", resMsg.result.token);
            setIsLoading(false);
            props.onclose();
            props.onRsult(resMsg.result);
        } else {
            setIsLoading(false);

        }
    }
    return <Modal>
        <div className={isLoading ? styles.formCont : ""}>

            {isLoading && <Loading />}
            {!isLoading && <form onSubmit={handleFormSubmit} className={styles.forms}>
                <label>Email</label>
                <input type="email" name="email" defaultValue="rajib2@gmail.com" required />
                <label>Password</label>
                <input type="password" name="password" defaultValue="123456" required />
                {errMsg && <p className={styles.resMsg}>{errMsg.split("_").join(" ")}</p>}
                <button type="submit">submit</button>
            </form>}
        </div>

    </Modal>
};
export default Login;