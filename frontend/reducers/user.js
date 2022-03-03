export default function (user = {}, action) {
  if (action.type === "saveUser") {
    console.log(action.gameUser);
    return action.gameUser;
  }
  return user;
}
