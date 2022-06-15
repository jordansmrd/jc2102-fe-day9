import user_types from "./types";
const init_state = {
  id: 0,
  username: "",
  email: "",
  role: "",
  pacar: "",
};

function userReducer(state = init_state, action) {
  //kumpulan action
  //akan mempengaruhi state
  //if direction === "login"
  //username => username dari database kita
  if (action.type === user_types.USER_LOGIN) {
    return {
      ...state,
      id: action.payload.id,
      username: action.payload.username,
      email: action.payload.email,
      role: action.payload.role,
    };
  } else if (action.type === user_types.USER_LOGOUT) {
    return init_state;
  }
  return state;
}

export default userReducer;
