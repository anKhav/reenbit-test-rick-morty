import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {}

export const getCharacter = createAsyncThunk(
    'character/getCharacter',
    async (id, {dispatch}) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await res.json()
            dispatch(setCharacter(data))
        } catch (e){
            throw e
        }
    }
)

export const charactersSlice = createSlice({
    name:'character',
    initialState,
    reducers:{
        setCharacter: (state,action) => state = action.payload
    }
})
export const {setCharacter} = charactersSlice.actions
export default charactersSlice.reducer