import { configureStore } from '@reduxjs/toolkit'
import favoritesSliceReducer from './favoriteSlice'

export const store = configureStore({
  reducer: {
    favoriteMeals:favoritesSliceReducer
  },
})