import React from 'react';
import { Link } from 'react-router-dom';

export default function Rule(){
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h1>Rules of battleship</h1>
            <p>
            <h3>Rules for BattleShip (a Milton Bradley Game)</h3>
<h3><a name="objective"><b>Game Objective</b></a></h3>
<p>The object of Battleship is to try and sink all of the other player's before
they sink all of your ships. All of the other player's ships are somewhere on
his/her board.&nbsp; You try and hit them by calling out the coordinates of one
of the squares on the board.&nbsp; The other player also tries to hit your ships
by calling out coordinates.&nbsp; Neither you nor the other player can see the
other's board so you must try to guess where they are.&nbsp; Each board in the
physical game has two grids:&nbsp; the lower (horizontal) section for the
player's ships and the upper part (vertical during play) for recording the
player's guesses.</p>
<h3><a name="start">Starting a New Game</a></h3>
<p>Each player places the 5 ships somewhere on their board.&nbsp; The ships can
only be placed vertically or horizontally. Diagonal placement is not allowed. No
part of a ship may hang off the edge of the board.&nbsp; Ships may not overlap
each other.&nbsp; No ships may be placed on another ship.&nbsp; </p>
<p>Once the guessing begins, the players may not move the ships.</p>
<p>The 5 ships are:&nbsp; Carrier (occupies 5 spaces), Battleship (4), Cruiser
(3), Submarine (3), and Destroyer (2).&nbsp;&nbsp;</p>
<h3><a name="playing">Playing the Game</a></h3>
<p>Player's take turns guessing by calling out the coordinates. The opponent
responds with &quot;hit&quot; or &quot;miss&quot; as appropriate.&nbsp; Both
players should mark their board with pegs:&nbsp; red for hit, white for miss.
For example, if you call out F6 and your opponent does not have any ship located
at F6, your opponent would respond with &quot;miss&quot;.&nbsp; You record the
miss F6 by placing a white peg on the lower part of your board at F6.&nbsp; Your
opponent records the miss by placing.</p>
<p>When all of the squares that one your ships occupies have been hit, the ship
will be sunk.&nbsp;&nbsp; You should announce &quot;hit and sunk&quot;.&nbsp; In
the physical game, a red peg is placed on the top edge of the vertical board to
indicate a sunk ship.&nbsp; </p>
As soon as all of one player's ships have been sunk, the game ends. 

            </p>
        </div>
    )
}