import React from 'react';
import './TodoItem.css';

const TodoItem = ({ text, checked, id, color, onToggle, onRemove }) => {
  return (
    <div className="todo-item" onClick={() => onToggle(id)}>
      <div className="remove" onClick={(e) => {
        e.stopPropagation();
        onRemove(id);
      }}>X
        </div>
      <div className={`todo-text ${checked ? ' checked' : ''}`}>
        <div style={{ color: color }}>{text}</div>
      </div>
      {
        checked && (<div className="check-mark">●</div>)
      }
    </div>
  )
}

export default TodoItem