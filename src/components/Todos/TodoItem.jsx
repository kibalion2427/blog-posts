import React, { Component } from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <li
      key={todo.id}
      //   onClick={() => {
      //     updateTodo(todo);
      //   }}
    >
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => {
          updateTodo(todo);
        }}
      />
      {todo.text}
      <button
        onClick={() => {
          deleteTodo(todo);
        }}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
