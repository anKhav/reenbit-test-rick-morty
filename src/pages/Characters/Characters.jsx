import React, {useEffect} from 'react';
import logo from '../../assets/images/RickMortyLogosvg.svg'
import CharacterCard from "../../layouts/CharacterCard/CharacterCard.jsx";
import './Characters.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getCharacters} from "../../features/CharactersSlice.js";
import SearchBar from "../../components/UI/SearchBar/SearchBar.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import Pagination from "../../components/pagination/Pagination.jsx";
import {MutatingDots} from "react-loader-spinner";

const Characters = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page')
    const filterByName = searchParams.get('name')
    const characters = useSelector(state => state.characters.results)
    const navigate = useNavigate()

    useEffect(() => {
      filterByName === null ? dispatch(getCharacters(`https://rickandmortyapi.com/api/character/?page=${page}`)) : dispatch(getCharacters(`https://rickandmortyapi.com/api/character/?page=${page}&name=${filterByName}`))
    }, [page, filterByName])
    return (
        <section className='section-inner characters'>
            <div className="characters__logo">
                <img src={logo} alt="Rick and Morty"/>
            </div>
            <SearchBar page={page}/>
            {
                characters && characters.length !== 0 ?
                    <div className="characters__content">
                        {
                            characters.map(character =>
                                <CharacterCard
                                    onClick={() => navigate(`${character.id}`)}
                                    key={character.id}
                                    character={character}
                                />
                            )
                        }
                    </div> :
                        <MutatingDots
                            height="100"
                            width="100"
                            color="black"
                            secondaryColor= 'lightgrey'
                            radius='12.5'
                            ariaLabel="mutating-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
            }
            {
                 characters && characters.length !== 0 && <Pagination filter={filterByName}/>
            }
        </section>
    );
};

export default Characters;