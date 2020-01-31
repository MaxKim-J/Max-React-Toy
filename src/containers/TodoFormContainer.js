import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../store/modules/todo'
import { createStore } from 'redux';

class TodoFormContainer extends Component {
  id = 0;
  state = {
    input: ''
  }
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
    createTodo(id++, this.input, false)
  }

  render() {
    const { input } = this.state;
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