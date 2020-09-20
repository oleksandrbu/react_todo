import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Form from './components/Form'
import Tasks from "./components/Tasks"
import Connection from "./components/Connection"

class App extends Component {
  state = {
    tasks: []
  }

  componentDidMount = () => {
    this.connection = new Connection("http://localhost:5000/api/tasks")
    this.getTask()
  }

  getTask = () => {
    this.connection
      .get()
      .then(list => this.setState({tasks: list}))
  }

  addTask = (props) => {
    const taskName = props.body
    if (taskName != null) 
      this.connection
          .add(taskName)
          .then(response => response.json())
          .then(task => this.setState({tasks: [...this.state.tasks, task]}))
  }

  delTask  = (props) => {
    const id = props.body
    if (id > 0)
      this.connection
          .delete(id)
          .then(response => {
            if (response.ok){
              let list = this.state.tasks
              const index = list.map(t => t.id).indexOf(+id)
              list.splice(index, 1)
              this.setState({tasks: list})
            }
          })
  }

  patchTask = (id, complited) => {
    this.connection
        .patch(id, complited)
        .then(response => response.json())
        .then(task => {
          const tasks = this.state.tasks
          const index = tasks.map(t => t.id).indexOf(task.id)
          tasks[index].complited = task.complited
          this.setState({tasks: tasks})
        })
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
