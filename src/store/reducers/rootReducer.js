const initState = {
  users: [
    { id: 1, name: "Cảnh" },
    { id: 2, name: "Thanh" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log("Delete User!", action);
      let users = state.users;
      users = users.filter(item=>item.id !== action.payload.id);
      
      return state;
      break;
    default:
      return state;
  }
  return state;
};
export default rootReducer;
