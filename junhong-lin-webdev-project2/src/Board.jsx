import React, { useContext, useEffect, useState } from 'react';
// import { Square } from "./Square"
// import './Board.css'
import { useSelector } from 'react-redux';
import ResetButton from './ResetButton';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

export default function Board() {

    const dispatch = useDispatch()
    const gameType = useParams().gameType;
    const clickCount = useSelector((state) => state.clickCount)
    const boardState = useSelector((state) => state.game)

    const boardComponent = [];

    // for (let i = 0; i < boardState.length; i++) {
    //     let row = boardState[i];
    //     for (let j = 0; j < row.length; j++) {
    //         boardComponent.push((<Square symbol={boardState[i][j]} x={i} y={j} />))
    //     }
    // }

    return (
        <div>
            <h3>{"This is an " + gameType + " game"}</h3>
            <div id="board">
            {boardComponent}
            </div>
            <ResetButton text="Reset, pls"/>
        </div>
    )
}