import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../store/modules/todo'
import "../components/TodoForm/TodoForm.css"
import "../components/TodoPalette/TodoPalette.css"

class TodoFormContainer extends Component {
  state = {
    input: '',
    color: '#343a40',
    colorArr: [
      { id: 0, colorNum: '#343a40' },
      { id: 1, colorNum: '#f03e3e' },
      { id: 2, colorNum: '#12b886' },
      { id: 3, colorNum: '#228ae6' }
    ]
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({
      input: value
    });
  }

  handleCreate = (text, color) => {
    const { createTodo } = this.props
    createTodo(text, color)
  }

  handleColor = (id) => {
    const { colorArr } = this.state;
    this.setState({
      color: colorArr[id].colorNum
    })
  }

  render() {
    const { color, colorArr } = this.state
    const colorCube = colorArr.map(
      ({ id, colorNum }) => (
        <div className={colorArr.findIndex(x => x.colorNum === color) === id ? "color-cube color-cube-selected" : "color-cube"}
          style={{ background: colorNum }}
          key={id}
          onClick={() => { this.handleColor(id) }}></div >
      )
    );
    return (
      <div>
        <div className="todo-palette">
          <div className="color-cubes">
            {colorCube}
          </div>
        </div>
        <div className="form">
          <input style={{ color: this.state.color }} value={this.state.input} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
          <div className="create-button" onClick={() => this.handleCreate(this.state.input, this.state.color)}>
            추가
       </div>
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
  createTodo: (text, color) => dispatch(createTodo(text, color)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFormContainer)