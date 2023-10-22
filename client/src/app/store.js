import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, getDefaultMiddleware({ serializableCheck: false })),
});
