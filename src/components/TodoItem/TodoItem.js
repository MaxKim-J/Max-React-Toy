import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation();
          // 이벤트의 확산을 멈춰줌, 삭제부분에 들어간 이벤트 버블링이
          // 부모의 이벤트까지 전달되지 않도록 해줌
          onRemove(id)
        }}>
        </div>
        <div className={`todo-text ${checked ? ' checked' : ''}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">●</div>)
        }
      </div>
    )
  }
}

export default TodoItem