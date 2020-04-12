import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../actions/todoActions";
const initialState = {
  todos: [
    {
      text: "Diseñar base de datos",
      id: "sasas",
      checked: false,
    },
    {
      text: "Diseñar prototipos",
      id: "hghgh",
      checked: true,
    },
  ],
};
function todo(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              checked: !todo.checked,
            };
          }
          return todo;
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return action.payload.id !== todo.id;
        }),
      };
    default:
      return state;
  }
}

export default todo;
