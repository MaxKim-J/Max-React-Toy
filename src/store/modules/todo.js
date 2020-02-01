// ducks 패턴 구현
import { createAction, handleActions } from 'redux-actions'
import TodoListTemplate from '../../components/TodoListTemplate/TodoListTemplate';

// 액션 타입 정의 
const CREATE_TODO = 'todo/CREATE_TODO'
const TOGGLE_TODO = 'todo/TOGGLE_TODO'
const REMOVE_TODO = 'todo/REMOVE_TODO'

let id = 1;
// 액션 생성 함수
// 두번째 인자 함수는 payload creator
export const createTodo = createAction(CREATE_TODO, text => ({ text, id: id++, checked: false }))
export const toggleTodo = createAction(TOGGLE_TODO, id => id);
export const removeTodo = createAction(REMOVE_TODO, id => id);

// 초기 상태 정의
const initialState = {
  input: '',
  todos: [
    {
      id: 0,
      text: '집에가기',
      checked: false
    }
  ]
}

export default handleActions(
  {
    [CREATE_TODO]: (state, action) => ({
      todos: state.todos.concat({
        id: action.payload.id,
        text: action.payload.text,
        checked: action.payload.checked
      })
    }),
    [TOGGLE_TODO]: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.id);
      const selected = state.todos[index];
      const nextTodos = [...state.todos];
      nextTodos[index].checked = !(selected.checked)
      return {
        todos: nextTodos
      }
    },
    [REMOVE_TODO]: (state, action) => ({
      todos: state.todos.filter(todo => todo.id === action.payload.id)
    })
  },
  initialState
)