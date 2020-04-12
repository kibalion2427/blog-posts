import React, { Component } from "react";

const TodoForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" />
      <button>Agregar</button>
    </form>
  );
};

export default TodoForm;
