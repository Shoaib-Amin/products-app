import { legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['navigation']
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    pReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // use for development
)

export const persistor = persistStore(store);
