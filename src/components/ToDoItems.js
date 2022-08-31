import React from 'react'


export default function ToDoItems({id, name, lastname, avatar, del, del_user, change_users}) {

const dell= {
    width:"250px",
    height:"20px",
    border:"2px solid black",
    textAlign:"center",
    padding:"15px",
    fontSize:"25px"

}
const border = {
    border:"2px solid grey",
    width:"380px",
    height:"450px",
    margin:"20px",
    padding:"20px"
}


  return (
    <div style={border} onDoubleClick={()=>change_users()} >

 <img src={avatar} alt = "avatar"/> 
 <p>{name}{lastname}</p>
 <p style={dell} onClick={()=>del_user(id)}>{del}</p>



    </div>
  )
}
