import React, { Component } from 'react';
import Todos from './todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'comprar coca'},
      {id: 2, content: 'jogar zelda'},
    ]
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos})
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todo's </h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
