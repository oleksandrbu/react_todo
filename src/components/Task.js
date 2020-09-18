import React, { Component } from 'react';

class Task extends Component{
    render (){
        const task = this.props.task;
        let result;

        if (task.complited){
            result = (
                <li id={task.id}/* onClick={this.props.onClick(task.id)}*//* onClick={this.props.onClick(task.id, task.complited)}*/>
                    <input type="checkbox" checked />
                    <span>{task.id}. {task.name}</span>;
                </li>
            )
        } else {
            result = (
                <li id={task.id}/* onClick={this.props.onClick(task.id)}*//* onClick={this.props.onClick(task.id, task.complited)}*/>
                    <input type="checkbox" />
                    <span>{task.id}. {task.name}</span>;
                </li>
            )
        }

        return result;
    }
}    

export default Task