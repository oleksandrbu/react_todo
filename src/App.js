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
    this.getTask();
    setInterval(this.getTask, 200);
  }

  componentDidMount(){
  }
  
  getTask = (event) => {
    fetch(taskEndpoint)
      .then(response => response.json())
      .then(list => this.setState({tasks: list}))
  }

  addTask = ({ body }) => {
    if (String(body).length > 0)
    fetch(taskEndpoint, {method: 'POST', 
          headers:  {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: body})});
  }

  delTask  = ({ body }) => {
    if (body > 0)
    fetch(taskEndpoint + `/${body}`, {method: 'DELETE'})
  }

  onClick = (id) => {
    document.querySelector('#deleteForm>input').value = id;
  }

  patchTask = (id, complited) => {
    fetch(taskEndpoint + `/${id}`, {method: 'PATCH',
          headers:  {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({complited: !complited})});
  }

  render () {
      return (
        <>
          <Header />
          <main>
            <Form id="responseForm" nameInput="taskName" nameButton="Add" placeholder="New task" onSubmit={this.addTask} />
            <Form id="deleteForm" nameInput="deleteId" nameButton="Delete" placeholder="Id for delete" onSubmit={this.delTask} />
            <Tasks tasks={this.state.tasks} onChange={this.patchTask} />
          </main>
        </>
      );
    }
}

export default App;
