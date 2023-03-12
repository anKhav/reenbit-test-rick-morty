import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = []

export const getCharacters = createAsyncThunk(
    'characters/getCharacters',
    async (__, {dispatch}) => {
        try {
            const res = await fetch('https://rickandmortyapi.com/api/character')
            const data = await res.json()
            const results = data.results
            dispatch(setCharacters(results))
        } catch (e){
            throw e
        }
    }
)

export const charactersSlice = createSlice({
    name:'characters',
    initialState,
    reducers:{
        setCharacters: (state,action) => state = action.payload
    }
})
export const {setCharacters} = charactersSlice.actions
export default charactersSlice.reducer