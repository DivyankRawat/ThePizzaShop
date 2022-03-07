import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import cartReducer from '../services/cartSlice'
import { pizzaApi } from '../services/pizza'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [pizzaApi.reducerPath]: pizzaApi.reducer,
    },
    // middleware provides us advantages of caching, poling, invaluation etc
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pizzaApi.middleware),
});

// it enables refetch for certain events
setupListeners(store.dispatch)