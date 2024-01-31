const initState = {
  users: [
    { id: 1, name: "Cảnh" },
    { id: 2, name: "Thanh" },
    { id: 3, name: "Bình" },
  ],
};
const rootReducer = (state = initState, action) => {
  console.log(">>state redux", state)
  switch (action.type) {
    case "DELETE_USER":
      console.log("Delete User!", action);
      let users = state.users;
      users = users.filter(item => item.id !== action.payload.id);
      return { ...state, users };
      break;
    case "CREATE_USER":
      console.log("create User!", action);
      let id = Math.floor(Math.random() * 1001);
      let user = { id: id, name: `name - ${id}` };
      console.log(user)
      return {
        ...state, users: [...state.users, user]
      }
      break;
    default:
      return state;
  }
};
export default rootReducer;
