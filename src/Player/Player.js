import React from 'react';
import './Player.css';

const Player = (props) => {
    const { players } = props;
    console.log(players);
    const playerList = players.map(player => {
        return (
            <div className="Player-container" key={player.key} >
                <img src={ player.img } alt={ player.name + "'s Image" } />
                <p>{ player.name }</p>
                <p>{ player.playstyle }</p>
                <p>{ player.subs }</p>
            </div>
        );
    })
    return (
        <div className="Player-wrapper">
            {playerList}
        </div>
    );
}

export default Player;