import {createSlice} from '@reduxjs/toolkit'
import {LocalStorageService} from "../services/LocalStorageService.js";

const initialState =  LocalStorageService.get('user')

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login: (state,action) => {
            if (!LocalStorageService.get('user')) {
                LocalStorageService.set('user', JSON.stringify(action.payload))
                state = LocalStorageService.get('user')
                return state
            }
            state = LocalStorageService.get('user')
            return state
        },
        logout: (state) => {
            if (!LocalStorageService.get('user')) {
                state = null
                return state
            }
            LocalStorageService.clear()
        }
    }
})
export const {login, logout} = userSlice.actions
export default userSlice.reducer