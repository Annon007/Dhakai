import { useState } from "react";
import BodySideBar from "./Components/bodySideBar/BodySideBar";
import DashBoard from "./Components/dashboard/DashBoard";
import styles from "./app.module.css";
import LoginProvider from "./Store/user-Proveider";

const App = () => {

  return (
    <LoginProvider>
      <div className={styles.home}>
        <BodySideBar />
        <DashBoard />
      </div>
    </LoginProvider>
  );
};

export default App;
