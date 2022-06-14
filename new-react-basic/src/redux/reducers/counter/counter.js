import counter_types from "./types";

const init_state = {
  count: 0,
};

function counterReducer(state = init_state, action) {
  //action untuk increment
  if (action.type === counter_types.INCREMENT_COUNTER) {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  //action untuk decrement
  else if (action.type === counter_types.DECREMENT_COUNTER) {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  return state;
}

export default counterReducer;
