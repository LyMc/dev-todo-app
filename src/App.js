import React from 'react'
import './App.css'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import List from 'material-ui/List'

import TaskItem from './TaskItem'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      task: '',
      taskList: [
        {
          task: 'First task',
          done: false,
        },
      ]
    }
	  this.handleChange = this.handleChange.bind(this)
	  this.addTask = this.addTask.bind(this)
	  this.handleEnter = this.handleEnter.bind(this)
	  this.toggleTask = this.toggleTask.bind(this)
	  this.deleteTask = this.deleteTask.bind(this)
  }
  handleChange(event) {
    this.setState({
      task: event.target.value,
    })
  }
  handleEnter(event) {
	  if (this.state.task && event.which === 13) {
	    this.addTask()
    }
  }
  addTask() {
    const { taskList, task } = this.state
    this.setState({
	    task: '',
	    taskList: [ ...taskList, {
	      task,
        done: false,
	    } ]
    })
  }
	toggleTask(key) {
    return () => {
	    const { taskList } = this.state
      taskList[key].done = !taskList[key].done
	    this.setState({ taskList })
    }
  }
	deleteTask(key) {
    return () => {
	    const { taskList } = this.state
	    taskList.splice(key, 1)
	    this.setState({ taskList })
    }
  }
  render() {
	  const { taskList, task } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="addNew">
	        <TextField
		        placeholder="Task"
		        margin="normal"
            value={ task }
            onChange={ this.handleChange }
            onKeyPress={ this.handleEnter }
	        />
	        <Button color="primary" variant="raised"
            onClick={ this.addTask }
            disabled={ !task }
          >
		        Add
	        </Button>
        </div>
	      <List>
          { taskList.map((item, key) => (
	          <TaskItem
		          key={ key }
              item={ item }
              toggle={ this.toggleTask(key) }
              remove={ this.deleteTask(key) }
            />
          )) }
	      </List>
      </div>
    )
  }
}

export default App
