import store from "./reduxStore";
import {increment, decrement } from './reduxStore/counter'
import { addComment, addDownVote, addPost, addUpVote, removeComment, removePost, updatePost } from "./reduxStore/posts";
import {addTask, removeTask} from './reduxStore/tasks'


//STORE
store.subscribe(() => console.log(store.getState()));

// store.getState();
// console.log(store.getState());
store.dispatch(increment());
store.dispatch(increment(10));
store.dispatch(increment(20));
store.dispatch(decrement(10));
store.dispatch(addTask(1,"Irem"));
store.dispatch(addTask(2,"Hazer"));
store.dispatch(addTask(3,"Ayse"));
store.dispatch(removeTask(2));

store.dispatch(addPost(1, "deneme bilgisi deneme"));
store.dispatch(addPost(2, "deneme bir şeyler"));
store.dispatch(addPost(3, "deneme dene dene dene"));
store.dispatch(addPost(4, "deneme deneme"));

store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));

store.dispatch(addDownVote(1));
store.dispatch(addDownVote(1));

store.dispatch(removePost(3));

store.dispatch(updatePost(1, "update yaptım"));

store.dispatch(addComment(1, 111, "dssdjdbhcbds"))

// store.dispatch(removeComment(4))
    
console.log(store.getState());
//console.log(store.getState().posts[0].votes);


