import React, {useEffect} from 'react';
import logo from '../../assets/images/RickMortyLogosvg.svg'
import CharacterCard from "../../layouts/CharacterCard/CharacterCard.jsx";
import './Characters.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacters} from "../../features/CharactersSlice.js";
import SearchBar from "../../components/UI/SearchBar/SearchBar.jsx";
import {useNavigate} from "react-router-dom";

const Characters = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters)
    const navigate = useNavigate()
    useEffect(() => {
      dispatch(getCharacters())
    }, [])
    return (
        <section className='section-inner characters'>
            <div className="characters__logo">
                <img src={logo} alt="Rick and Morty"/>
            </div>
            <SearchBar/>
            {
                characters.length !== 0 ? <div className="characters__content">
                    {
                        characters && characters.map(character => <CharacterCard onClick={() => navigate(`${character.id}`)} key={character.id} character={character}/>)
                    }
                </div> :
                    <div>Loading</div>
            }
        </section>
    );
};

export default Characters;