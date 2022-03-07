export default function (user = {}, action) {
  if (action.type === "saveUser") {
    console.log(action.gameUser);
    return action.gameUser;
  }
  if (action.type === "saveTopics") {
    user.topics = [...action.topics]
    console.log("IN REDUCER", user)
  }
  return user;
}
