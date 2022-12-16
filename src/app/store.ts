
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productApi } from '../apiSlice/product';
import productReducer from '../slice/product';
const store = configureStore({
    reducer: {
        products: productReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
    
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;