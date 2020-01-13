import React, { useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem'

const TodoItemList = ({ todos, onToggle, onRemove }) => {
  useEffect(() => {
    console.log(todos)
  }, [todos]);

  return (
    <div>
      {
        todos.map(
          ({ id, text, checked, color }) => (
            <TodoItem
              id={id}
              text={text}
              checked={checked}
              color={color}
              onToggle={onToggle}
              onRemove={onRemove}
              key={id}
            />
          )
        )
      }
    </div>
  )
}
export default TodoItemList;