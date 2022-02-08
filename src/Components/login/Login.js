import React from "react";
import styles from "./login.module.css";
import Modal from "../../Ui/Modal";
// import { getLogin } from "../../Api/login";
const getLogin = async data => {
    try {
        const sendReq = fetch("https://devapi.dhakai.com/api/v2/login-buyer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(data)
        })
        const res = await sendReq;

        console.log(res)
    } catch (err) {

    }
};
const Login = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
        const formSubmit = new FormData(e.target);
        const data = Object.fromEntries(formSubmit);
        console.log(data);
        getLogin(data);
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