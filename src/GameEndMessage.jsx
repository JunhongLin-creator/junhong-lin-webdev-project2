import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function GameEndMessage(props){
    const {winner} = props

    if(winner==''){
        return;
    }else {
        return(
            <h4>Game over! {winner} Won!</h4>
        );
    }   
}