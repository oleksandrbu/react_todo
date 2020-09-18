import React from 'react';

import Task from "./Task"

const Tasks = (props) => {
    return (
        <ol>
            {
                props.tasks.map(m => <Task key={m.id} task={m} onChange={props.onChange} />)
            }
        </ol>
    );
}        

export default Tasks