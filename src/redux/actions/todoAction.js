import { ADD_TODO,DELETE_TODO,UPDATE_TODO } from "./actionTypes";




// {
//     id:1, 
//     title: "Learn React",
// }

export const add_todo  = (newTodo)=>{
   return{
         type: ADD_TODO,
         payload: newTodo
   }
}

export const delete_todo = (todo_id)=>{
   return{
            type: DELETE_TODO,
            payload: todo_id
   }
}

// revist this later
export const update_todo = (todo_id,updatedTodo)=>{
   return{
            type: UPDATE_TODO,
            payload: {
               id: todo_id,
               newTitle: updatedTodo
            }
   }
}