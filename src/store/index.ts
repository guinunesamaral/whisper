import { combineReducers, configureStore } from '@reduxjs/toolkit'
import chatReducer from './slices/chatSlice'

const rootReducer = combineReducers({
    chat: chatReducer
})

export const store = configureStore({ reducer: rootReducer })