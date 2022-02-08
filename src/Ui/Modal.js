import React from "react";
import ReactDom from "react-dom";
import styles from "./modal.module.css";
const Overlay = props => {
    return <div className={styles.backdrop}></div>
}
const ModalContent = props => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}
const Modal = props => {
    return <>
        {ReactDom.createPortal(<Overlay />, document.getElementById("overlay"))}
        {ReactDom.createPortal(<ModalContent>{props.children}</ModalContent>, document.getElementById("overlay"))}
    </>
}
export default Modal;