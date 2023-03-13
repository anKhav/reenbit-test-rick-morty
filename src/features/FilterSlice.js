import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    keyword:''
}

export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        setFilterKeyword: (state,action) => void(state.keyword = action.payload)
    }
})
export const {setFilterKeyword} = filterSlice.actions
export default filterSlice.reducer