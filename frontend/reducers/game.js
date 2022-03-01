export default function (game = {}, action) {
    if (action.type === "saveGame") {
        return action.game
    }
    return game
}