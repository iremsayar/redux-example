import { combineReducers,createStore } from "redux";

import counterReducer from "./counter";
import taskReducer from "./tasks";
import postsReducer from "./posts";
//reducer bilgilerini birlestirdik
const rootReducer = combineReducers({
    counter: counterReducer,
    tasks: taskReducer,
    posts: postsReducer

})

const store = createStore(rootReducer)

export default store;