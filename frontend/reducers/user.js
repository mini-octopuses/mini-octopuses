export default function (user = {}, action) {
    if (action.type === 'saveUser') {
        return action.user
    }
    return user
}