import React, { Component } from 'react'

class AddTddo extends Component{
  state = {
    content: ''
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  };
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> O que tu vai fazer? </label>
          <input type="text" name="" id="" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    )
  }
}

export default AddTddo