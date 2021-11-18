function gridGenerator() {
    let grid = [];
    let length = 10;
    for (let i = 0; i < length; i++) {
        let row = [];
        for (let j = 0; j < length; j++) {
            row.push('');  //five status of a tile: 1.empty, 2. hit 3.miss 4.hover 5.hasship         
       }
       grid.push(row);
    }
    // insert random boats
    // 5 boats of length 5,4,3,3,2
    grid = generateBoats(grid);
    return grid;
}

function generateBoats(grid){
    // generateCarrier(grid);
    // generateBattleship(grid);
    // generateCruiser(grid);
    // generateSubmarine(grid);
    // generateDestroyer(grid);
    return grid;

    function isOccupied(grid,x,y,length,direction){
        let isTaken=false;
        if(direction){//vertical
            if(x+length<=10){
                for(let i=0;i<length;i++){
                    if(grid[x+i][y]==='ship'){
                        isTaken=true;
                    }
                }
            }
        }else{
            if(y+length<=10){
                for (let i = 0; i < length; i++) {
                    if(grid[x][y+i]==='ship'){
                        isTaken=true;
                    }}
            }
        }
        return isTaken;
    }
    function generateCarrier(grid){
        while(true){
        //pick a direction for the boat;
        const direction = Math.floor(Math.random()*2);
        //pick a position for the ship and verify it it is valid to put it in
        let x, y=0;
        if(direction){
            x = Math.floor(Math.random()*6);
             y = Math.floor(Math.random()*10);
        }else{
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*6);
        }
        if(isOccupied(grid,x,y,5,direction)){
            continue;
        } else{
            if(!direction){
                //horizontol

            }else{
                //vertical
            }
        }
        
        
    }}
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
    if (action.type === 'RESET') {
        for (let i = 0; i < state['playerGrid'].length; i++) {
            for (let j = 0; j < state['playerGrid'].length; j++){
                state['playerGrid'][i][j] = '';
                state['opponentGrid'][i][j] = '';
            }
        }
        // return [...state];
        let result = state;
        return result;
    }
    return state;
}
