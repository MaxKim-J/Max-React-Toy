// ducks 패턴 구현
import { createAction, handleActions } from 'redux-actions'

// 액션 타입 정의 
const CREATE_TODO = 'todo/CREATE_TODO'
const TOGGLE_TODO = 'todo/TOGGLE_TODO'
const REMOVE_TODO = 'todo/REMOVE_TODO'

let id = 1;
// 액션 생성 함수
// 두번째 인자 함수는 payload creator
export const createTodo = createAction(CREATE_TODO, (text, color) => ({ text, color, id: id++, checked: false }))
export const toggleTodo = createAction(TOGGLE_TODO, id => id);
export const removeTodo = createAction(REMOVE_TODO, id => id);

// 초기 상태 정의
const initialState = {
  todos: [
    {
      id: 0,
      text: '자고싶다',
      checked: true,
      color: '#f03e3e'
    }
  ]
}

export default handleActions(
  {
    [CREATE_TODO]: (state, action) => ({
      todos: state.todos.concat({
        id: action.payload.id,
        text: action.payload.text,
        checked: action.payload.checked,
        color: action.payload.color
      })
    }),
    [TOGGLE_TODO]: (state, action) => {
      const { todos } = state
      const index = todos.findIndex(todo => todo.id === action.payload);
      const selected = todos[index];
      const nextTodos = [...todos];
      nextTodos[index].checked = !(selected.checked)
      return {
        todos: nextTodos
      }
    },
    [REMOVE_TODO]: (state, action) => {
      const { todos } = state
      return {
        todos: todos.filter(todo => todo.id !== action.payload)
      }
    }
  },
  initialState
)