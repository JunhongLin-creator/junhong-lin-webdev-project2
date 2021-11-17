function gridGenerator() {
    let grid = [];
    let length = 10;
    for (let i = 0; i < length; i++) {
        let row = [];
        for (let j = 0; j < length; j++) {
            row.push('');  //four status of a tile: 1.empty, 2. hit 3.miss 4.hover          
       }
    }
    // insert random boats
    
    return grid;
}

function generateGameBoard(){
    const boards = {
        playerGrid: [],
        opponentGrid:[],
    }
    boards.playerGrid = gridGenerator();
    boards.opponentGrid = gridGenerator();
    return boards;
}
export default function gameReducer(state, action) {
    
    if (state === undefined) {
        return generateGameBoard()

    }

    if (action.type === "CREATE_GAME_BOARD") {
        alert("created a game board!")
    }

    //deal with boardClick event
    if (action.type === 'boardClick') {
        const value = state[action.boardType][action.x][action.y];

        // check winning condition

        return [...state];
    }
    
    //reset the board
    if (action.type === 'RESET' || action.type === 'RESET_GAMEBOARD_ONLY') {
        for (let i = 0; i < state['playerGrid'].length; i++) {
            for (let j = 0; j < state['playerGrid'].length; j++){
                state['playerGrid'][i][j] = '';
                state['opponentGrid'][i][j] = '';
            }
        }
        return [...state];
    }
    return state;
}
