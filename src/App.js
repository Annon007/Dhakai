import BodySideBar from "./Components/bodySideBar/BodySideBar";
import DashBoard from "./Components/dashboard/DashBoard";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.home}>
      <BodySideBar />
      <DashBoard />
    </div>
  );
}

export default App;
