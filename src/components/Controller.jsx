import React, { Component } from "react";
import { connect } from "react-redux";
import todo from "../redux/reducers/todoReducer";
import { addAsyncThunk } from "../redux/actions/todoActions";

const Controller = (props) => {
  console.log("CONTROLLER", props);

  const handler = () => {
    //   FUNCION SINCRONA
    // props.dispatch({
    //   type: "ADD_TODO",
    //   payload: { text: "task", id: "kjhgfds", checked: true },
    // });

    //FUNCION ASINCRONA

    props.dispatch(addAsyncThunk(5000));
  };
  return (
    <div>
      <h1>{props.todo.todos.length.toString()}</h1>
      <button onClick={handler}>Dispatch</button>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   // action_name_to_return_As_prop: (value) => dispatch(actionCreator(value));
//   return {
//     addTodo: (todo) => dispatch(addTodo(todo)),
//     updateTodo: (todo) => dispatch(updateTodo(todo)),
//     deleteTodo: (todo) => dispatch(deleteTodo(todo)),
//   };
// };

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Controller);
