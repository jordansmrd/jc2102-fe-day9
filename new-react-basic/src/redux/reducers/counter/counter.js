import counter_types from "./types";

const init_state = {
  count: 0,
};

function counterReducer(state = init_state, action) {
  //action adalah sebuah perintah
  //reducer adalah yang menjalankan perintah
  //store adalah kumpulan reducer
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
  } else if (action.type === "load") {
    return {
      ...state,
      count: action.payload.count,
    };
  }
  return state;
}

export default counterReducer;
