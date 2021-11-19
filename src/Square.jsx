import React, { useContext, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';


export function Square(props) {

    const {status,boardType,gameType} = props;

    const dispatch = useDispatch();

    let backgroundColor = 'empty';
    let symbol = showSymbol(status,boardType);

    return (<div onClick={() => {
        dispatch({
            type: 'boardClick',
            boardType:props.boardType,
            gameType:props.gameType,
            x: props.x,
            y: props.y,
        })
    }
    }  id="square" x={props.x} y ={props.y} class={backgroundColor}>
        {symbol}
    </div>);

    function showSymbol(status,boardType){
        if(boardType=='playerGrid'){//the board which holds ai ships
            if(status==''||status=='ship'){
                return '';
            }else if(status =='hit'){
                backgroundColor = 'green';
                return 'O'
            }else if(status == 'miss'){
                backgroundColor = 'red';
                return 'X'
            }
        }else if(boardType=='opponentGrid'){
            //the board which holds player ships
            if(status==''){
                return '';
            }else if(status=='ship'){
                return '*';
            }else if(status =='hit'){
                backgroundColor = 'green';
                return 'O'
            }else if(status == 'miss'){
                backgroundColor = 'red';
                return 'X'
            }
        }
        return '';
    }
}