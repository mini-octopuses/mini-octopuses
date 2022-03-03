export default function (game = {}, action) {
    if (action.type === "saveGame") {
        return action.game
    }
    if (action.type === 'saveGameAnswers') {
        let gameCopy = { ...game }
        gameCopy.userAnswers = action.answers
        return gameCopy
    }
    if(action.type === 'saveScore'){
        console.log('apppel',action.score)
        return{
            ...game,
            score:action.score
        }
    }
    return game
}