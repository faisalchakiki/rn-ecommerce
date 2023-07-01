import { configureStore } from '@reduxjs/toolkit'

import rajaongkirReducer from '../features/rajaongkir/rajaongkirSlice'

export const store = configureStore({
  reducer: {
    rajaongkir : rajaongkirReducer,
  },
})