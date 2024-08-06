import { configureStore, createSlice } from '@reduxjs/toolkit'

import { Movies } from '../Models/Movie'

const initialState = Movies

export const movieSlice = createSlice({
    name: 'moviesCRUD',
    initialState,
    reducers: {
        create(state, action) {

            const newId = (state.length == 0) ? 1 : state[state.length - 1].id + 1
            action.payload.id = newId
            state.push(action.payload)
        },
        edit(state, action) {

            const existingMovie = state.findIndex(m => m.id == action.payload.id)
            action.payload.id = state[existingMovie].id
            state[existingMovie] = action.payload
        },
        delete(state, action) {
            const existingId = state.findIndex(m => m.id === action.payload.id)
            state = state.splice(existingId, 1)
        }

    }
})

export const movieActions = movieSlice.actions;
