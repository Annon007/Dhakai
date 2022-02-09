import { useState } from "react";
import BodySideBar from "./Components/bodySideBar/BodySideBar";
import DashBoard from "./Components/dashboard/DashBoard";
import styles from "./app.module.css";

const App = () => {

  return (
    <div className={styles.home}>
      <BodySideBar />
      <DashBoard />
    </div>
  );
};

export default App;
