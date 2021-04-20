import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        isAdmin: false,
    },
    reducers: {
        // Utilisation : setIsAdmin(true)
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload;
        },
        // Utilisation : setToken('<token>')
        setToken: (state, action) => {
            state.token = action.payload;
        },
        // Utilisation : deleteToken();
        deleteToken: (state) => {
            state.token = '';
        },
        // Utilisation : setUser({token: '<token>', isAdmin: true})
        setUser: (state, action) => {
            let { token, isAdmin } = action.payload
            state.token = token;
            state.isAdmin = isAdmin;
        }
    }
})

// Export des Fonctions/Actions du Reducer
export const {
    setIsAdmin,
    addToken,
    deleteToken,
    setUser
} = authSlice.actions

export default authSlice.reducer
