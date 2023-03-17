import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {sortCharactersByName} from "../utils/index.js";

const initialState = {
    loading:false,
    data:{
        info:{
            pages:0
        }
    }
}

export const getCharacters = createAsyncThunk(
    'characters/getCharacters',
    async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            return data
            // dispatch(setCharacters(data))
        } catch (e){
            throw e
        }
    }
)

export const charactersSlice = createSlice({
    name:'characters',
    initialState,
    // reducers:{
    //     setCharacters: (state,action) => state = {...action.payload, results: sortCharactersByName(action.payload.results)}
    // },
    extraReducers:(builder) => {
        builder.addCase(getCharacters.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getCharacters.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
    }
})
export const {setCharacters} = charactersSlice.actions
export default charactersSlice.reducer