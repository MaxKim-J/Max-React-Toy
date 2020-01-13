import React, { useState } from 'react'
import "./TodoPalette.css"

const TodoPalette = ({ colorArr, onColor }) => {

  const [colorInd, setColorInd] = useState(0);

  const updateChecked = (num) => {
    setColorInd(num);
  }

  return (
    <div className="todo-palette">
      <div className="color-cubes">
        {
          colorArr.map(
            ({ id, colorNum }) => (
              <div className={colorInd === id ? "color-cube color-cube-selected" : "color-cube"}
                style={{ background: colorNum }}
                key={id}
                onClick={() => { onColor(id); updateChecked(id) }}>
              </div >
            )
          )
        }
      </div>
    </div>
  )
}

export default TodoPalette