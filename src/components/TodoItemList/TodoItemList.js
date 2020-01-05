import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem'
// 클래스형 컴포 - 성능 최적화에 유용
class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    // map함수- 넘어온 todos배열을 컴포넌트 배열로 변환해준다
    const todoList = todos.map(
      ({ id, text, checked }) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );
    return (
      <div>
        {todoList}
      </div >
    )
  }
}

export default TodoItemList;