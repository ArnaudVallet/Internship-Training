import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        isAdmin: false,
    },
    reducers: {
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload;
        },
        addToken: (state, action) => {
            state.token = action.payload;
        },
        deleteToken: (state) => {
            state.token = '';
        },
        setUser: (state, action) => {
            state = action.payload;
        }
    }
})

export const {
    setIsAdmin,
    addToken,
    deleteToken,
    setUser
} = authSlice.actions

export default authSlice.reducer
