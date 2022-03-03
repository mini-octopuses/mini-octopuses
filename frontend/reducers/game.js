export default function (game = {}, action) {
    if (action.type === "saveGame") {
        return action.game
    }
    if (action.type === 'saveGameAnswers') {
        let gameCopy = { ...game }
        gameCopy.userAnswers = action.answers
        return gameCopy
    }
    return game
}