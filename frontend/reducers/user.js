export default function (user = {}, action) {
  if (action.type === "saveUser") {
    return action.gameUser;
  }
  return user;
}
