import { combineReducers } from "redux";
import todo from "./todoReducer";
import blog from "./postsReducer";

export default combineReducers({ todo, blog });
