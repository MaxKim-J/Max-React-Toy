import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate'
import Form from './components/TodoForm/TodoForm'
import TodoItemList from './components/TodoItemList/TodoItemList';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form />}>
        <TodoItemList />
      </TodoListTemplate>
    )
  }
}

export default App;
