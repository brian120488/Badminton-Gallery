import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice'
import { useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { WebStorage } from 'redux-persist/lib/types';
import { createMigrate } from 'redux-persist';

export function createPersistStorage(): WebStorage {
  const isServer = typeof window === 'undefined';

  // Returns noop (dummy) storage.
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }

  return createWebStorage('local');
}

const storage = createPersistStorage();
const APP_VERSION = parseFloat(process.env.NEXT_PUBLIC_APP_VERSION || '0.1.0') * 10;

console.log(APP_VERSION)
const persistConfig = {
  key: 'cart',
  version: APP_VERSION,
  storage,
  migrate: createMigrate({
    [APP_VERSION]: () => undefined
  })
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  cart: persistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()