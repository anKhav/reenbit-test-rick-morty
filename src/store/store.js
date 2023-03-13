import {configureStore} from '@reduxjs/toolkit'
import charactersSlice from "../features/CharactersSlice.js";
import characterSlice from "../features/CharacterSlice.js";
import filterSlice from "../features/FilterSlice.js";

export const store = configureStore({
    reducer:{
        characters:charactersSlice,
        character:characterSlice,
        filter:filterSlice
    }
})