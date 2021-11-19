import React, { useContext, useEffect, useState } from 'react';

export function GameEndMessage(props){
    const {winner} = props

    if(winner==''){
        return '';
    }else {
        return(
            <h4>Game over! {winner} Won!</h4>
        );
    }   
}