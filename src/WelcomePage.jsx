import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {

    return (<div class="WelcomePage">
        <h1>
        Welcome to the battleship game!
        </h1>
        <h3>You can play two type of games: a normal game against an AI or a free play game which skips AI turns</h3>
        <Link to={"/gameBoard/normal"}>Play a normal Game</Link>
        <br />
        <Link to={"/gameBoard/freePlay"}>Play a free play Game</Link>

    </div>)

}