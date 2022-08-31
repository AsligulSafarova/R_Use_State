import React from 'react'

export default function ToDoForm ({create}) {


const submit = event =>{
    event.preventDefault();
    const { avatar, name} = event.target;
    create( avatar.value , name.value );
    console.log(name.value, avatar.value);
    
    avatar.value = "";
    name.value ="";
}




  return (
    <div>
        <form onSubmit={submit}>
               <input type="url" placeholder="Avatar..." name="avatar"/>
            <input type="text" placeholder="Fullname..." name="name"/> 
            <button type="">Add</button>
        </form>

    </div>
  )
}
