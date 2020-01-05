import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate'
import Form from './components/TodoForm/TodoForm'

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form />}>
      </TodoListTemplate>
    )
  }
}

export default App;
