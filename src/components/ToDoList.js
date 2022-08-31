import React from 'react'
import ToDoItems from './ToDoItems';
export default function ToDoList({todos, del_user, change_users}) {
    const style = {
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"40px",

        width:"350px",
        height:"450px",
        padding:"20px",
        margin:"30px"
     }
  return (
    <div style={style}>

{
    todos.map(elem=><ToDoItems key ={elem.id} {...elem} del_user={del_user} change_users={change_users} />)
  }

    </div>
  )
}
