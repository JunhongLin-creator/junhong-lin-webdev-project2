import React, { useContext, useEffect, useState } from 'react';
import { Square } from "./Square"
import './Board.css'
import { useSelector } from 'react-redux';
import ResetButton from './ResetButton';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import {GameEndMessage} from './GameEndMessage';

export default function Board() {

    const dispatch = useDispatch()
    const gameType = useParams().gameType;
    const boards = useSelector((state) => state.game)

    const playerBoardComponent = [], opponentBoardComponent = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            playerBoardComponent.push((<Square status={boards['playerGrid'][i][j]} x={i} y={j} boardType='playerGrid' gameType={gameType} />));
            opponentBoardComponent.push((<Square status={boards['opponentGrid'][i][j]} x={i} y={j} boardType='opponentGrid' gameType={gameType} />));
            
        }

    }
    console.dir(boards['playerGrid'])//check status of the generated board
    console.dir(boards['opponentGrid'])//check status of the generated board

    return (
        <div>
            <ResetButton text="Reset"/>
            <h3>{"This is an " + gameType + " game"}</h3>
            <h4>Try to hit enemy ships on the left board, your opponent will try to hit your ships on the right board</h4>
            <GameEndMessage winner={boards['winner']} />
            <div id="container">
                <div id="playerBoard">
                {playerBoardComponent}
                </div>    
                <div id="opponentBoard">
                {opponentBoardComponent}
                </div>        
            </div>           
        </div>
    )
}