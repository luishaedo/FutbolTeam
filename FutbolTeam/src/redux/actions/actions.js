import axios from "axios";
import {
  GET_JUGADORES,
  GET_JUGADOR_BY_ID,
  GET_JUGADOR_BY_NOMBRE,
  ERROR,
  // POST_JUGADOR,
} from "./actionsTypes";

import equipo from "../../utils/bdd";

export const getJugadores = () => {
  return async function (dispatch) {
    try {
      // const response = await axios.get("http://localhost:3001/jugadores");
      // const jugadores = response.data;

      const jugadores = equipo;

      dispatch({ type: GET_JUGADORES, payload: jugadores });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getJugadoresByNombre = (nombre) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/jugadores/?nombre=${nombre}`
      );
      const jugadores = response.data;
      dispatch({ type: GET_JUGADOR_BY_NOMBRE, payload: jugadores });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getJugadoresById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/jugadores/${id}`);
      const jugador = response.data;
      dispatch({ type: GET_JUGADOR_BY_ID, payload: jugador });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

// export const postJugador = (jugador) => {
//     return async (dispatch) => {
//       try {
//         const response = await axios.post("http://localhost:3001/jugadores/", jugador);
//         dispatch({
//           type: POST_JUGADOR,
//           payload: response.data,
//         });
//       } catch (error) {
//         dispatch({
//           type: ERROR,
//           payload: error.message,
//         });
//       }
//     };
//   };
