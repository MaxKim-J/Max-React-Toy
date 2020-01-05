import React, { Component } from 'react'
import "./TodoPalette.css"

class TodoPalette extends Component {

  state = {
    checkedIndex: 0
  }

  updateChecked(num) {
    this.setState({
      checkedIndex: num
    })
  }

  render() {
    const { onColor, colorArr } = this.props;
    const { checkedIndex } = this.state;
    const colorCube = colorArr.map(
      ({ id, colorNum }) => (
        <div className={checkedIndex === id ? "color-cube color-cube-selected" : "color-cube"}
          style={{ background: colorNum }}
          key={id}
          onClick={() => { onColor(id); this.updateChecked(id) }}></div >
      )
    );
    return (
      <div className="todo-palette">
        <div className="color-cubes">
          {colorCube}
        </div>
      </div>
    )
  }
}

export default TodoPalette