import React from 'react'
import Chestii from './Chestii'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'world safla nlk',
      nn: 'ceva diferit'
    }
  }
  changeName() {
    fetch('http://localhost:3001/user', {
	    method: 'POST',
	    body: JSON.stringify({
        name: 'Dima'
      }),
	    headers: {
		    'content-type': 'application/json',
	    }
    })
      .then( resp => resp.json() )
      .then( user => this.setState({ name: user.name }) )
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value })
  }
  render() {
    return (
      <div>
        { this.props.test } { this.state.name }
        <button onClick={ this.changeName.bind(this) }>Update</button>
	      <hr/>
        <Chestii name={ this.state.name } change={ this.handleChangeName.bind(this) }><strong>Hey, eu sunt un copil.</strong></Chestii>
      </div>
    )
  }
}

export default App
