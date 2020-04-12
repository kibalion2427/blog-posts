import React, { Component } from "react";
import { connect } from "react-redux";

import {
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../redux/actions/todoActions";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { getId } from "../../utils";

const Todos = ({ todo, addTodo, updateTodo, deleteTodo }) => {
  const handlerSubmit = (e) => {
    console.log("OBJETO", todo);
    e.preventDefault();
    const text = e.target[0].value;
    addTodo({ text, checked: false, id: getId() });
    e.target[0].value = "";
  };

  return (
    <>
      <h1>Todos</h1>
      <br />
      {/* FORMULARIO */}
      <TodoForm onSubmit={handlerSubmit} />

      <br />
      {/* LISTA */}
      <TodoList
        todos={todo.todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  // action_name_to_return_As_prop: (value) => dispatch(actionCreator(value));
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  };
};

const mapStateToProps = (state) => ({
  todo: state.todo,
  // property_name_to_return_As_prop: state.property;
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
