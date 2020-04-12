import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

//Middleware

const loggernative = (store) => (next) => (action) => {
  console.log("STORE", store);
  console.log("Acción disparada: ", action);
  //   setTimeout(() => {
  next(action);
  //   }, 1000);
  //   next(action); //envio el objeto que representa la accion

  //   if (action.type !== "ADD_TODO") {
  //     setTimeout(() => {
  //       store.dispatch({
  //         type: "ADD_TODO",
  //         payload: {
  //           text: "Todo creado en Middleware",
  //           checked: false,
  //           id: "sdfgfh",
  //         },
  //       });
  //     }, 4000);
  //   }
};

const confirmDeleteTodo = (store) => (next) => (action) => {
  if (action.type === "DELETE_TODO") {
    let eliminar_todo = window.confirm(
      "Seguro que quieres eliminar la tarea? "
    );
    if (eliminar_todo) {
      next(action);
    }
  } else {
    next(action);
  }
};

export const store = createStore(
  reducer,
  applyMiddleware(confirmDeleteTodo, logger, thunk)
);
