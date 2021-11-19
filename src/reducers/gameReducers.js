function gridGenerator() {
    let grid = [];
    let length = 10;
    for (let i = 0; i < length; i++) {
        let row = [];
        for (let j = 0; j < length; j++) {
            row.push('');  //five status of a tile: 1.empty, 2. hit 3.miss 4.hover 5.ship         
       }
       grid.push(row);
    }
    // insert random boats
    // 5 boats of length 5,4,3,3,2
    grid = generateBoats(grid,ships);
    return grid;
}

const ships= {
    carrier:5,
    battleship:4,
    cruiser:3,
    submarine:3,
    destroyer:2,
}

function generateBoats(grid,ships){
    generateShip(grid,ships.carrier);
    generateShip(grid,ships.battleship);
    generateShip(grid,ships.cruiser);
    generateShip(grid,ships.submarine);
    generateShip(grid,ships.destroyer);
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
    function placeShip(grid,x,y,length,direction){
        if(direction){
            //vertical
            for (let i = 0; i < length; i++) {
                grid[x+i][y] = 'ship';    
            }
        }else{
            //horizontol
            for (let i = 0; i < length; i++) {
                grid[x][y+i] = 'ship';    
            }
        }
    }
    function generateShip(grid,length){
        while(true){
        //pick a direction for the boat;
            const direction = Math.floor(Math.random()*2);
            //pick a position for the ship and verify it it is valid to put it in
            let x, y=0;
            let max = grid.length-length+1;
            if(direction){//vertical
                x = Math.floor(Math.random()*max);
                y = Math.floor(Math.random()*grid.length);
            }else{//horizontol
                x = Math.floor(Math.random()*grid.length);
                y = Math.floor(Math.random()*max);
            }
            if(isOccupied(grid,x,y,length,direction)){
                continue;
            } else{
                placeShip(grid,x,y,length,direction);
                break;
            }       
        }
    }
}

function generateGameBoard(){
    const boards = {
        playerGrid: [],
        opponentGrid:[],
        winner:'',
    }
    boards.playerGrid = gridGenerator();
    boards.opponentGrid = gridGenerator();
    return boards;
}

export default function gameReducer(state, action) {
    
    if (state === undefined) {
        return generateGameBoard()

    }

    //deal with boardClick event
    if (action.type === 'boardClick') {
        const {boardType,gameType,x,y} = action;
        if(boardType==='opponentGrid'){
            return state;
        }
        const status = state[action.boardType][action.x][action.y];
        //deal with freePlay game
        if(gameType =='freePlay'){
            updateBoard(boardType,x,y);
        }else if(gameType == 'normal'){        //deal with normal game
            updateBoard(boardType,x,y);
            if(status==='hit'||status==='miss'){
                return state;
            }
            aiAction(state[boardType].length);
        }
        // console.log('a click happens!');
        function updateBoard(boardType,x,y){
            let status = state[boardType][x][y];
            if(status==''){
                //the shot missed
                state[boardType][x][y] = 'miss';
            }else if(status=='ship'){
                //the shot hit a ship
                state[boardType][x][y] = 'hit';
            }
        }
        function aiAction(width){
            let flag = true;
            while(flag){
                //randomly choose a coordinate not chosen before
                let x = Math.floor(Math.random()*width);
                let y = Math.floor(Math.random()*width);
                //check if the coordinate was chosen
                let status = state['opponentGrid'][x][y];
                console.log('coordinate chosen: '+x+' '+y);
                console.log('status before: '+status);
                console.dir(state['opponentGrid']);

                if(status==='hit'||status==='miss'){
                    continue;
                }else if(status==='ship'||status===''){
                    flag=false;
                    updateBoard('opponentGrid',x,y);
                    console.log('status after: '+state['opponentGrid'][x][y]);
                }
            }
            
        }

        // check winning condition
        //if there is no 'ship' status on the grid, the game ends
        let endFlag = true;
        checkBoard('playerGrid');
        if(!endFlag){
            endFlag=true;
            checkBoard('opponentGrid');
        }
        function checkBoard(boardType){
            for (let i = 0; i < state[boardType].length; i++) {
                const row = state[boardType][i];
                for (let j = 0; j < row.length; j++) {
                    const status = row[j];
                    if(status=='ship'){
                        endFlag=false;
                    }
                }
            }
            if(endFlag){//game ends
                let winner = '';
                if(boardType==='playerGrid'){
                    winner='player';
                }else if(boardType==='opponentGrid'){
                    winner = 'AI';
                }
                state['winner']=winner;
            }
        }                
        let result = {
            ...state,
        }
        return result;
    }
    
    //reset the board
    if (action.type === 'RESET') {
        //clear the board
        for (let i = 0; i < state['playerGrid'].length; i++) {
            for (let j = 0; j < state['playerGrid'].length; j++){
                state['playerGrid'][i][j] = '';
                state['opponentGrid'][i][j] = '';
            }
        }
        state = generateGameBoard();
        // return [...state];
        let result = {
            ...state,
        }
        return result;
    }
    return state;
}
