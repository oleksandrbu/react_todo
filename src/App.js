import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Form from './components/Form'
import Tasks from "./components/Tasks"

const taskEndpoint = "http://localhost:5000/api/tasks";

class App extends Component {
  state = {
    tasks: []
  }

  constructor (){
    super();
    setInterval(this.getTask, 50);
  }

  componentDidMount(){
  }
  
  getTask = (event) => {
    fetch(taskEndpoint)
      .then(response => response.json())
      .then(list => this.setState({tasks: list}))
  }

  addTask = ({ body }) => {
    fetch(taskEndpoint, {method: 'POST', 
          headers:  {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: body})});
  }

  delTask  = ({ body }) => {
    fetch(taskEndpoint + `/${body}`, {method: 'DELETE'})
  }

  render () {
      return (
        <>
          <Header />
          <main>
            <Form id="responseForm" nameInput="taskName" nameButton="Add" placeholder="New task" onSubmit={this.addTask} />
            <Form id="deleteForm" nameInput="deleteId" nameButton="Delete" placeholder="Id for delete" onSubmit={this.delTask} />
            <Tasks tasks={this.state.tasks} />
          </main>
        </>
      );
    }
}

export default App;
