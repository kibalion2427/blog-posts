import React, { Component } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
