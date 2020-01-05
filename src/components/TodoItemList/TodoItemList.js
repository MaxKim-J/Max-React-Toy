import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem'
// 클래스형 컴포 - 성능 최적화에 유용
class TodoItemList extends Component {
  // input prop이 바뀔때마다 렌더링이 되고 있는 상황 -> 굳이 필요 업따!
  // 업데이트에 영향을 끼치는 조건을 리턴값으로 지정하면 todos가 바뀌면 렌더링함
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  render() {
    const { todos, onToggle, onRemove } = this.props;
    // map함수- 넘어온 todos배열을 컴포넌트 배열로 변환해준다
    // 배열을 렌더링할때 key값 필수임
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