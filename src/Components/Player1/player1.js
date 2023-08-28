import React from 'react';
import messiImage from '../../images/messi.jpg';
import ronaldoImage from '../../images/ronaldo.jpg';
import mbappeImage from '../../images/images.jpg';
import benzemaImage from '../../images/Karim-Benzema.jpeg';

const Player1 = () => {
    const players = [
        {
            name: "Messi",
            team: "PSG",
            nationality: "Argentina",
            jerseyNumber: 30,
            age: 34,
            image: messiImage
        },
        {
            name: "Ronaldo",
            team: "Manchester",
            nationality: "Portugal",
            jerseyNumber: 7,
            age: 36,
            image: ronaldoImage
        },
        {
            name: "Mbappe",
            team: "PSG",
            nationality: "France",
            jerseyNumber: 9,
            age: 34,
            image: mbappeImage
        },
        {
            name: "Benzema",
            team: "Madrid",
            nationality: "France",
            jerseyNumber: 7,
            age: 22,
            image: benzemaImage
        }
    ];

    return (
        <div>
            {players.map((player, index) => (
                <div key={index}>
                    <img src={player.image} alt={player.name} />
                    <p>Name: {player.name}</p>
                    <p>Team: {player.team}</p>
                    <p>Nationality: {player.nationality}</p>
                    <p>Jersey Number: {player.jerseyNumber}</p>
                    <p>Age: {player.age}</p>
                </div>
            ))}
        </div>
    );
}

export default Player1;
