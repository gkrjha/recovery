import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/Todo/TodoSclice';

export const store = configureStore({
    reducer: todoReducer
})