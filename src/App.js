import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate'
import Form from './components/TodoForm/TodoForm'
import TodoItemList from './components/TodoItemList/TodoItemList';
import TodoPalette from './components/TodoPalette/TodoPalette';


class App extends Component {
  id = 0
  //이래도 되는걸까
  state = {
    input: '',
    color: '',
    todos: [],
    colorArr: [
      { id: 0, colorNum: '#343a40' },
      { id: 1, colorNum: '#f03e3e' },
      { id: 2, colorNum: '#12b886' },
      { id: 3, colorNum: '#228ae6' }
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

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


  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const { todos } = this.state;
    // 파라미터로 받은 id를 가지고 몇번재 아이템인지 찾기
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    // todos 배열을 복사 -> 배열을 그 자체를 건들면 안됨!!!!
    const nextTodos = [...todos];
    // 복사된 todos배열의 해당 index값 안의 객체의 checked 속성을 바꿈
    console.log(nextTodos);
    nextTodos[index].checked = !(selected.checked)
    // state 업데이트
    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      // 파라미터로 받아온 id를 가지고있지 않은 배열을 새로 생성
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleColor = (id) => {
    const { colorArr } = this.state;
    this.setState({
      color: colorArr[id].colorNum
    })
    console.log(id)
  }

  render() {
    const { input, todos, colorArr, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
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
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    )
  }
}

export default App;
