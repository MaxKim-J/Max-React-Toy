// 컨테이너 컴포넌트는 리덕스 스토어와 연결되어있는 컴포

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../store/modules/todo'
import TodoItem from "../components/TodoItem/TodoItem"

class TodoItemListContainer extends Component {

  handleToggle = id => {
    const { toggleTodo } = this.props;
    toggleTodo(id);
  };
  handleRemove = id => {
    const { removeTodo } = this.props;
    removeTodo(id);
  }

  render() {
    const { todos } = this.props;
    const todoList = todos.map(
      ({ id, text, checked }) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={this.handleToggle}
          onRemove={this.handleRemove}
          key={id}
        />
      )
    );
    return (
      <div>
        {todoList}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos,
})


// 스토어의 리듀서 메소드 연동
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItemListContainer)