import {createSlice} from '@reduxjs/toolkit'
import {LocalStorageService} from "../services/LocalStorageService.js";

const initialState = LocalStorageService.get('user')

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state,action) => state = action.payload
    }
})
export const {setUser} = userSlice.actions
export default userSlice.reducer