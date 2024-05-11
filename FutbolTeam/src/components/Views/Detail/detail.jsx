import styles from "./Detail.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getJugadorById } from "../../../redux/actions/actions";
import { CircularColor } from "../../../utils/Loading"


const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const jugador = useSelector(
    (state) =>
      state.jugador.resultadoId &&
      state.jugador.resultadoId.length > 0 &&
      state.jugador.resultadoId[0]
  );

  useEffect(() => {
    dispatch(getJugadorById(id)).then(() => {
      setLoading(false);
    });
  }, [id, dispatch]);

  return (
    <div classnombre={styles.detailContainer}>
      <h1>{jugador?.nombre}</h1>
      {loading ? (
        <p>Loading...</p>
        // <CircularColor />
      ) : (
        <div classnombre={styles.detailCard}>
          <div classnombre={styles.cardImage}>
            {jugador?.imagen ? (
              <img src={jugador.imagen} alt={`${jugador.nombre}`} />
            ) : (
              <p>No hay imagen de este jugador</p>
            )}
          </div>
          <div classnombre={styles.cardInfo}>
            <div classnombre={styles.cardInfoDetails}>
              {jugador?.id && (
                <p classnombre={styles.detailInfoText}>
                  <span classnombre={styles.infoLabel}>ID:</span> {jugador.id}
                </p>
              )}
              {jugador?.nombre && (
                <p classnombre={styles.detailInfoText}>
                  <span classnombre={styles.infoLabel}>nombre:</span>{" "}
                  {jugador.nombre}
                </p>
              )}
              {jugador?.numero && (
                <p classnombre={styles.detailInfoText}>
                  <span classnombre={styles.infoLabel}>numero:</span>{" "}
                  {jugador.numero}{" "}
                </p>
              )}
              {jugador?.rating?.metric && (
                <p classnombre={styles.detailInfoText}>
                  <span classnombre={styles.infoLabel}>rating:</span>{" "}
                  {jugador.rating}{" "}
                </p>
              )}
              {jugador?.resena && (
                <p classnombre={styles.detailInfoText}>
                  <span classnombre={styles.infoLabel}>{jugador.resena}</span>{" "}
                </p>
              )}
              {jugador?.logros && (
                <p classnombre={styles.detailInfoText}>
                  <span classnombre={styles.infoLabel}>logros:</span>{" "}
                  {jugador.logros}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
