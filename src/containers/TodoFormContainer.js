import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../store/modules/todo'
import "../components/TodoForm/TodoForm.css"

class TodoFormContainer extends Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({
      input: value
    });
  }

  handleCreate = (text) => {
    const { createTodo } = this.props
    createTodo(text)
  }

  render() {
    return (
      <div className="form">
        <input value={this.state.input} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        <div className="create-button" onClick={() => this.handleCreate(this.state.input)}>
          추가
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos
})

// 스토어의 리듀서 메소드 연동
const mapDispatchToProps = dispatch => ({
  createTodo: text => dispatch(createTodo(text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFormContainer)