import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {sortCharactersByName} from "../utils/index.js";

const initialState = {
}

export const getCharacters = createAsyncThunk(
    'characters/getCharacters',
    async (url, {dispatch}) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            dispatch(setCharacters(data))
        } catch (e){
            throw e
        }
    }
)

export const charactersSlice = createSlice({
    name:'characters',
    initialState,
    reducers:{
        setCharacters: (state,action) => state = {...action.payload, results: sortCharactersByName(action.payload.results)}
    }
})
export const {setCharacters} = charactersSlice.actions
export default charactersSlice.reducer