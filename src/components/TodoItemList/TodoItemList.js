import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem'
// 클래스형 컴포 - 성능 최적화에 유용
class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <TodoItem text="안녕" />
        <TodoItem text="리액트" />
        <TodoItem text="반가워" />
      </div>
    )
  }
}

export default TodoItemList;