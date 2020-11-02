import { LOGIN } from "../constants";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      state = action.user;
      break;
  }
  return state;
};

export default userReducer;
