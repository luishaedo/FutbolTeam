import styles from "./home.module.css";
import Cards from "../../Cards/cards";
import equipo from "../../../assets/bdd";

const Home = () => {


  return (
    <div className={styles.homeContainer}>
      <div className={styles.cardsContainer}>
          <Cards jugadores={equipo} />
      </div>
    </div>
  );
};
export default Home;
