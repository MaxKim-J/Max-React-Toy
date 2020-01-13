import React, { useState } from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate'
import Form from './components/TodoForm/TodoForm'
import TodoItemList from './components/TodoItemList/TodoItemList';
import TodoPalette from './components/TodoPalette/TodoPalette';


const App = () => {
  const [id, setId] = useState(0);
  const [input, setInput] = useState("");
  const [color, setColor] = useState("");
  const [todos, setTodos] = useState([]);
  const [colorArr] = useState([
    { id: 0, colorNum: '#343a40' },
    { id: 1, colorNum: '#f03e3e' },
    { id: 2, colorNum: '#12b886' },
    { id: 3, colorNum: '#228ae6' }
  ])

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  const handleCreate = () => {
    const newTodo = {
      id: id, text: input, color: color, checked: false
    }
    setTodos(todos.push(newTodo))
    setId(id + 1)
    console.log(todos)
  }

  const handleToggle = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    setTodos(selected.checked = !(selected.checked))
  }

  const handleRemove = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    setTodos(todos.splice(index, 1))
  }

  const handleColor = (id) => {
    setColor(colorArr[id].colorNum)
  }

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
export default App;
