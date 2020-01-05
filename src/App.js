import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate'
import Form from './components/TodoForm/TodoForm'
import TodoItemList from './components/TodoItemList/TodoItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false },
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      // form에 바인딩될 input의 값을 비우고
      input: '',
      // push를 통해 데이터를 추가하면 배열에 값이 추가되긴 하지만
      // 가리키는 배열이 똑같기 대문에 렌더링상 비교를 할 수가 없대
      // push를 쓰면 안됨 concat을 이용하여 새 배열을 만듦(불변객체로)
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;
    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} />
      </TodoListTemplate>
    )
  }
}

export default App;
