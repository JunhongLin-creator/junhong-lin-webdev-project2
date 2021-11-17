import React, { useContext, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';


export function Square(props) {

    const {status,type} = props;

    const dispatch = useDispatch();

    return (<div onClick={() => {
        dispatch({
            type: 'boardClick',
            boardType:props.boardType,
            x: props.x,
            y: props.y,
        })
    }
    } onMouseEnter={()=>{
        dispatch({
            type:'mouseHover',
            boardType:props.boardType,
            x:props.x,
            y:props.y,
        })
    }} id="square" class={borderColor}>
        {symbol}
    </div>);
}