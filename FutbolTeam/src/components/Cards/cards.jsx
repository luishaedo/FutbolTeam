import Card from "../Card/card";
import styles from "./cards.module.css";

const Cards = ({ equipo }) => {
  return (
    <div className={styles.cardsContainer}>
      {equipo?.map((jugador) => (
        <Card
          key={jugador.id}
          id={jugador.id}
          nombre={jugador.nombre}
          imagen={jugador.imagen}
          numero={jugador.numero}
          rating={jugador.rating}
          resena={jugador.resena}
          logros={jugador.logros}
        />
      ))}
    </div>
  );
};

export default Cards;
