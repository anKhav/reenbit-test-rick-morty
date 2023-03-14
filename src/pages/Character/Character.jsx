import BackButton from "../../components/UI/BackButton/BackButton.jsx";
import './Character.scss'
import {useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCharacter} from "../../features/CharacterSlice.js";
import {useParams} from "react-router-dom";
import {MutatingDots} from "react-loader-spinner";


const Character = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const character = useSelector(state => state.character)


    useLayoutEffect(() => {
        dispatch(getCharacter(id))
    }, [id])

    return (
        <section className='character'>
            <BackButton className='character__back-button'/>
            {
                Object.keys(character).length !== 0 && +character.id === +id ?
                    <div className='section-outer character__wrapper'>
                        <img className="character__avatar" src={character.image} alt=""/>
                        <h2 className="character__title">{character.name}</h2>
                        <ul className='list'>
                            <h4 className="list__title">Information</h4>
                            <li className='item'>
                                <h5 className="item__title">Gender</h5>
                                <p className="item__text">{character.gender}</p>
                            </li>
                            <li className='item'>
                                <h5 className="item__title">Status</h5>
                                <p className="item__text">{character.status}</p>
                            </li>
                            <li className='item'>
                                <h5 className="item__title">Specie</h5>
                                <p className="item__text">{character.species}</p>
                            </li>
                            <li className='item'>
                                <h5 className="item__title">Origin</h5>
                                <p className="item__text">{character.origin.name}</p>
                            </li>
                            <li className='item'>
                                <h5 className="item__title">Type</h5>
                                <p className="item__text">{character.type || 'Unknown'}</p>
                            </li>
                        </ul>
                    </div>
                    :
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
        </section>
    );
};

export default Character;