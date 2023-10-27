
import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_todo, delete_todo, update_todo } from "../redux/actions/todoAction";


const TodoComponent = () => {
    const [todo, setTodo] = useState("")
    const [editId, setEditId] = useState(0)
    const todoArr = useSelector(state => state.todo)  



    const dispatch = useDispatch()

    function implementAddToDo(e){
         e.preventDefault()
        if(editId==0){
            let  length = todoArr.length
            console.log("todoArr",todoArr)
            dispatch(add_todo({id: length + 1, title: todo}))
            setTodo("")
        }
        else{
            dispatch(update_todo( editId, todo))
            setEditId(0)
            setTodo("")
        }
    }

    return(
        <div>
             {editId!=0?  <h1>Update ToDo</h1>:  <h1>Add ToDo</h1>}

              <form>
                    <input type="text" placeholder="Enter Todo" 
                      onChange={e => setTodo(e.target.value)}
                      value={todo}
                    />
                    <button onClick={implementAddToDo}>
                    {editId!=0?  "Update ToDo":  "Add ToDo"}
                    </button>
              </form>

         <ul>
              {
                todoArr.length>0 && todoArr.map((todo, index) => (
                    <li key={todo.id}>
                         <span>{todo.title}</span>
                         <button onClick={()=>dispatch(delete_todo(todo.id))}> Delete </button>
                         <button onClick={()=>setEditId(todo.id)}> Edit </button>
                   </li>
                )
                )
              }
        </ul>
        </div>
    )

}

export default TodoComponent;