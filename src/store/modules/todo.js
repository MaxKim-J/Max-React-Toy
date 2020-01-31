// ducks 패턴 구현

// 액션 타입 정의 
const CREATE_TODO = 'todo/CREATE_TODO'
const TOGGLE_TODO = 'todo/TOGGLE_TODO'
const REMOVE_TODO = 'todo/REMOVE_TODO'

// 액션 생성 함수
export const createTodo = (id, text, color, checked) => ({ type: CREATE_TODO, id, text, color, checked })
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id })
export const removeTOdo = (id) => ({ type: REMOVE_TODO, id })

// 초기 상태 정의
const initialState = {
  todos: []
}
export default function todo(state = initialState, action) {
  const { todos } = state
  switch (action.type) {
    case CREATE_TODO:
      return {
        todos: todos.concat({
          id: action.id,
          text: action.text,
          color: action.color,
          checked: action.checked
        })
      }
    case TOGGLE_TODO:
      const index = todos.findIndex(todo => todo.id === action.id);
      const selected = todos[index];
      const nextTodos = [...todos];
      nextTodos[index].checked = !(selected.checked)
      return {
        todos: nextTodos
      }
    case REMOVE_TODO:
      return {
        todos: todos.filter(todo => todo.id !== action.id)
      }
    default:
      return state
  }
}