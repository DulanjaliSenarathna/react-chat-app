import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';// react binding for redux
import { persistStore, persistReducer } from 'redux-persist' //persist data (prevent lose data)
import { rootPersistConfig, rootReducer } from './rootReducer';

// create store
const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),// we need to pass all the combine reducers to persistReducer
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    }) // function that can run in between writing and reading from our store
});

const persistor = persistStore(store);

const {dispatch} = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export {store, persistor, dispatch, useSelector, useDispatch}