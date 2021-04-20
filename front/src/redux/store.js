import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter';
import authReducer from './features/auth';

// Configuration du store (comme le nom de la fonction des barres)
export default configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})
