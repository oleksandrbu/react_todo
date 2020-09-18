import React, { Component } from 'react';

import Task from "./Task"

class Tasks extends Component{
    render () {
        return (
            <ol>
                {
                    this.props.tasks.map((m, i) => <Task key={i} task={m}/* onClick={this.props.onClick} *//* onClick={this.props.onClick} *//>)
                }
            </ol>
        );
    }
}

export default Tasks