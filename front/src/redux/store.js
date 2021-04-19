import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter';
import authReducer from './features/auth';

export default configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})
