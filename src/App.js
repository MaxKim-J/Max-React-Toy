import React, { useState } from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate'
import Form from './components/TodoForm/TodoForm'
import TodoItemList from './components/TodoItemList/TodoItemList';
import TodoPalette from './components/TodoPalette/TodoPalette';


const App = () => {
  // 결국 setState랑 로직은 똑같은데 좀 더 동기화가 명시적이라고 생각하면 된다

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
      handleCreate();
    }
  }

  const handleColor = (id) => {
    setColor(colorArr[id].colorNum)
  }

  const handleCreate = () => {
    const newTodo = {
      id: id, text: input, color: color, checked: false
    }
    setTodos([...todos, newTodo])
    setId(id + 1)
    console.log(todos)
  }

  const handleToggle = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]
    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    setTodos(nextTodos)
  }

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
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
