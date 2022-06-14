import { createStore, applyMiddleware, compose } from "redux";
import persistStore from "redux-persist/es/persistStore";
import appReducer from './appReducer'

const composeEnhancements = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancements(applyMiddleware()));
const persistor = persistStore(store);
export { store, persistor };