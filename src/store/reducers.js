import createReducer from "../common/createReducer"
import ADD from "../store/actions"


const counterInitialState = {
  value: 0,
}

const reducer = createReducer(counterInitialState, {
  [ADD]: (state, action) => state.value + action.count
})

export default reducer