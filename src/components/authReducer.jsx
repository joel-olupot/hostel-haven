// authReducer.js
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // Handle login logic, set user and token
      return /* updated state */;
    case "LOGOUT":
      // Handle logout logic, clear user and token
      return /* updated state */;
    default:
      return state;
  }
};

export default authReducer;
