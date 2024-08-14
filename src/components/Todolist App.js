import React, { useEffect, useState } from "react";
import { Listtask } from "./listtask";
import { Addtask } from "./addtask";
import "./todo.css";

function Todolist(){
    const[tasks,settaskS]=useState([
        // {title:"learn HTML"},
        // {title:"learn CSS"},
        // {title:"learn JAVASCRIPT"}
    ])
    useEffect(()=>{
        document.title=`you have${tasks.length} pending tasks`
    });
    const addtask=(title)=>{
        const newtask=[...tasks,{title}]
  settaskS(newtask)
    }

   const removeTask=(index)=>{
    const newtask=[...tasks]
    newtask.splice(index,1)
    settaskS(newtask)

   }
    return(
        <>
        <div className="To-do-container">
            <div className="Header">TODOLIST APP</div>
            <div className="Add-task"><Addtask addtask={addtask}/></div>
            <div className="Tasks">
                {tasks.map((task,index)=>(<Listtask task={task} removeTask={removeTask} index={index} key={index}/>))}
                 </div>
        </div>
        </>
    )
}
export{Todolist}