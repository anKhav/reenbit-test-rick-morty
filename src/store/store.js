import {configureStore} from '@reduxjs/toolkit'
import charactersSlice from "../features/CharactersSlice.js";
import characterSlice from "../features/CharacterSlice.js";

export const store = configureStore({
    reducer:{
        characters:charactersSlice,
        character:characterSlice
    }
})