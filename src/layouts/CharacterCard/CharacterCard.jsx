import React from 'react';
import './CharacterCard.scss'

const CharacterCard = ({character, onClick}) => {
    return (
        <div className='card' onClick={onClick}>
            {/*<img className='card__img' src={character.image} alt=""/>*/}
            <div className='card__img' style={{backgroundImage:`url(${character.image})`}}></div>
            <div className="card__content">
                <h3 className="card__title">{character.name}</h3>
                <h5 className="card__subtitle">{character.type || character.species}</h5>
            </div>
        </div>
    );
};

export default CharacterCard;