import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../store/modules/todo'
import { createStore } from 'redux';

class TodoFormContainer extends Component {
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleCreate = (id, text, checked) => {
    const { createTodo } = this.props
    createTodo(id, text, checked)
  }

  render() {
    const { input } = this.props;
    return (
      <div className="form">
        <input value={input} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        <div className="create-button" onClick={this.handleCreate}>
          추가
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos,
  input: state.todo.input
})

// 스토어의 리듀서 메소드 연동
const mapDispatchToProps = dispatch => ({
  createTodo: id => dispatch(createTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFormContainer)