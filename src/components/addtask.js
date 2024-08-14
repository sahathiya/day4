import React, { useState } from 'react'
const Addtask=({addtask})=>{
    const[value,setvalue]=useState("");
   const handleclick=()=>{
    addtask(value)
    setvalue("")
   }
    return(
        <>
        <div className='input-container'>
            <input type='text'  className="input" placeholder='Add new task' value={value} onChange={(e)=>{setvalue(e.target.value)}}/>
            <button  className="add-btn" onClick={handleclick}>Add task</button>
        </div>
        </>
    )
}
export{Addtask}