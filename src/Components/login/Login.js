import React from "react";
import styles from "./login.module.css";
import Modal from "../../Ui/Modal";
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
        const resData=await res.json();
        console.log(resData)
    } catch (err) {

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
const Login = () => {
    const handleFormSubmit = async e => {
        e.preventDefault();
        const formSubmit = new FormData(e.target);
        const data = Object.fromEntries(formSubmit);
        const apikey = await getApiKey();
        const formData={
            "auth":{
                "email":data.email,
                "deviceUuid":`${apikey}`
            },
            "password":data.password
        }
        console.log(apikey)
        getLogin(formData, apikey);
        // console.log({...data,});
        // const convert = uuidAPIKey.toAPIKey(`${apikey}`);
        // console.log(convert, "API KEY")
        // getLogin(data);
    }
    return <Modal>
        <form onSubmit={handleFormSubmit}>
            <input type="email" name="email" required />
            <input type="password" name="password" required />
            <button type="submit">submit</button>
        </form>
    </Modal>
};
export default Login;