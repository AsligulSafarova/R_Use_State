 
 
import {useState} from "react"; 
 import {user} from "./data/users";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";


 export default function App() {
  const [todos, SetToDos] = useState(user); 

  const create = (avatar, name)=>SetToDos([...todos,
  {
    id:Date.now(),
     avatar,
    name,
    del:"Delete"
  }
  ]);


  const change_users= ()=>{
    SetToDos(todos=>{
      return{...todos, name:"*****", lastname:"****", avatar:"./media/no_face.png"
    }
    })
  }

  const del_user = id =>SetToDos(todos.filter(elem=>elem.id!==id))

  
  return (
    <div>
      <ToDoForm create= {create}/>
  <ToDoList todos={todos} del_user={del_user} change_users= {change_users}/>
    </div>
  );
}


