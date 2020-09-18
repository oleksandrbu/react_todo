import React, { Component } from 'react';

class Task extends Component{
    state = {
        done: this.props.task.complited
    }
    
    onChangeHandler = () => {
        const {id, complited} = this.props.task;
        this.props.onChange(id, complited);
        this.setState({ done: complited});
    }

    render (){
        const {id, name} = this.props.task;

        return (
            <li id={id}>
                <input type="checkbox" defaultChecked={this.state.done} onChange={this.onChangeHandler} />
                <span>{id}. {name}</span>;
            </li>
        )
    }
}    

export default Task