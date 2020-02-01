import React from 'react';
import TodoListTemplate from './components/TodoListTemplate/TodoListTemplate'
import TodoItemListContainer from "./containers/TodoItemListContainer"
import TodoFormContainer from "./containers/TodoFormContainer"

const App = () => {
  return (
    <TodoListTemplate form={(
      <TodoFormContainer />
    )}>
      <TodoItemListContainer />
    </TodoListTemplate>
  )
}
export default App;
