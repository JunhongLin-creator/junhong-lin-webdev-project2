import React, { useContext, useEffect, useState } from 'react';
import { Square } from "./Square"
import './Board.css'
import { useSelector } from 'react-redux';
import ResetButton from './ResetButton';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

export default function Board() {

    const dispatch = useDispatch()
    const gameType = useParams().gameType;
    const boards = useSelector((state) => state.game)

    const playerBoardComponent = [], opponentBoardComponent = [];

    for (let i = 0; i < boards['playerGrid'].length; i++) {
        let row = boards['playerGrid'][i];
        for (let j = 0; j < row.length; j++) {
            playerBoardComponent.push((<Square status={boards['playerGrid'][i][j]} x={i} y={j} boardType='player' />))
            opponentBoardComponent.push((<Square status={boards['opponentGrid'][i][j]} x={i} y={j} boardType='opponent' />))
        }
    }

    return (
        <div>
            <ResetButton text="Reset"/>
            <h3>{"This is an " + gameType + " game"}</h3>
            <div id="playerboard">
            {playerBoardComponent}
            </div>    
            <div id="opponentboard">
            {opponentBoardComponent}    
            </div>        
        </div>
    )
}