import React from 'react';

const Task = ({task}) => {
    let result;

    if (task.complited){
        result = (
            <li id={task.id}>
                <input type="checkbox" checked/>
                <span>{task.id}. {task.name}</span>;
            </li>
        )
    } else {
        result = (
            <li id={task.id}>
                <input type="checkbox" />
                <span>{task.id}. {task.name}</span>;
            </li>
        )
    }

    return result;  
}    

export default Task