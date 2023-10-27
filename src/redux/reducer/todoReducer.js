

import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/actionTypes";


const initialState = []


// let arr = [1,2,3,4,5,6,7,8,9,10]

// [...arr,11]

// [{id:1, title: "Learn React"}, {id:2, title: "Learn Redux"}, {id:3, title: "Learn Node"}]

const todoReducer = (state = initialState, action) => {
    if(action.type == ADD_TODO){
       return [...state, action.payload]
    }
    else if(action.type == DELETE_TODO){
        return state.filter(todo => todo.id != action.payload)
    }
    else if(action.type==UPDATE_TODO){
        let index
       for(let i=0; i<state.length; i++){
              if(state[i].id == action.payload.id){
                  index = i
              }
       }
       let arr = structuredClone(state)
       arr[index].title = action.payload.newTitle
       return arr
     

    }
    else{
        return state
    }
}

export default todoReducer


// todoReducer(state, add_todo({id: 1, title: "Learn React"}))