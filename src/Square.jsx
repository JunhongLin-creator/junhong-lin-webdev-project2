import React, { useContext, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';


export function Square(props) {

    const {status,boardType,gameType} = props;

    const dispatch = useDispatch();

    return (<div onClick={() => {
        dispatch({
            type: 'boardClick',
            boardType:props.boardType,
            gameType:props.gameType,
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
    }} id="square" x={props.x} y ={props.y}>
        {showSymbol(status,boardType)}
    </div>);

    function showSymbol(status,boardType){
        //normal game
        if(boardType=='playerGrid'){//the board which holds ai ships
            if(status==''||status=='ship'){
                return;
            }else if(status =='hit'){
                return 'O'
            }else if(status == 'miss'){
                return 'X'
            }
        }else if(boardType=='opponentGrid'){
            //the board which holds player ships
            if(status==''){
                return;
            }else if(status=='ship'){
                return '*';
            }else if(status =='hit'){
                return 'O'
            }else if(status == 'miss'){
                return 'X'
            }
        }
        return;
    }
}