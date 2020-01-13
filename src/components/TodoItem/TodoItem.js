import React, { useEffect } from 'react';
import './TodoItem.css';

const TodoItem = ({ text, checked, id, color, onToggle, onRemove }) => {

  useEffect(() => {
    console.log('rendering!')
  });

  return (
    // 아이템 컴포넌트 : toggle되는 경우에 모든 컴포넌트가 리렌더링 될 필요 없음
    // 토글된 컴포넌트만 렌더링하게 할거임 
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