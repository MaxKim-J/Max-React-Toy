import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate'
import Form from './components/TodoForm/TodoForm'
import TodoPalette from './components/TodoPalette/TodoPalette';
import TodoItemListContainer from "./containers/TodoItemListContainer"

class App extends Component {

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      // form에 바인딩될 input의 값을 비우고
      input: '',
      // push를 통해 데이터를 추가하면 배열에 값이 추가되긴 하지만
      // 가리키는 배열이 똑같기 대문에 렌더링상 비교를 할 수가 없대
      // push를 쓰면 안됨 concat을 이용하여 새 배열을 만듦(불변객체로)
      todos: todos.concat({
        id: this.id++,
        text: input,
        color: color,
        checked: false,
      })
    });
  }

  handleColor = (id) => {
    const { colorArr } = this.state;
    this.setState({
      color: colorArr[id].colorNum
    })
  }

  render() {
    const { input, todos, colorArr, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleColor,
    } = this;
    return (
      <TodoListTemplate palette={(
        <TodoPalette colorArr={colorArr} onColor={handleColor} />
      )} form={(
        <Form
          value={input}
          color={color}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemListContainer />
      </TodoListTemplate>
    )
  }
}

export default App;
