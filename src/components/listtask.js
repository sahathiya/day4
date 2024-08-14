import React from 'react'
function Listtask({task,index,removeTask}){
    return(
        <>
        <div className='list-task'>
            {task.title}
            <button className='delete-btn' onClick={()=>removeTask(index)}>Delete</button>
        </div>
        </>
    )
}
export{Listtask}