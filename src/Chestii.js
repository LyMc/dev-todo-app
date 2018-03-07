import React from 'react'

class Chestii extends React.Component {
  render() {
    return (
      <div>
	      <input type="text" value={ this.props.name } onChange={ this.props.change }/>
        <div>{ this.props.children }</div>
      </div>
    )
  }
}

export default Chestii
