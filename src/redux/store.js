
import { createStore, combineReducers} from "redux"; 
import counterReducer from "./reducer/counterReducer.js"; 
import todoReducer from "./reducer/todoReducer.js";

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
})

const store = createStore(rootReducer)

export default store;



// dispatch(delete_todo(todo.id))