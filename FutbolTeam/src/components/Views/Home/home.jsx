import styles from "./home.module.css";
import Cards from "../../Cards/cards";
// import equipo from "../../../assets/bdd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJugadores } from "../../../redux/actions/actions";

const Home = () => {
  const dispatch = useDispatch();
  const equipo = useSelector((state) => state.copiaResultados);

  useEffect(() => {
    if (!equipo || equipo.length === 0) {
      dispatch(getJugadores());
    }
  }, [dispatch, equipo]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.cardsContainer}>
        <Cards equipo={equipo} />
      </div>
    </div>
  );
};
export default Home;
