import {
  GET_JUGADORES,
  GET_JUGADOR_BY_ID,
  GET_JUGADOR_BY_NOMBRE,
  ERROR,
  // POST_JUGADOR,
} from "../actions/actionsTypes";


const initialState = {
  resultados: [],
  copiaResultados: [],
  jugador: [],
  error: null,
  jugadorBuscado: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JUGADORES:
      return {
        ...state,
        resultados: action.payload,
        copiaResultados: action.payload,
      };

    case GET_JUGADOR_BY_ID:
      return { ...state, jugador: action.payload };

    case GET_JUGADOR_BY_NOMBRE:
      return { ...state, copiaResultados: action.payload };

    // case POST_JUGADOR:
    //   return { ...state, jugador: action.payload };

    case ERROR:
      return { ...state, error: action.payload };

    default:
      return { ...state };
  }
};
export default rootReducer;
