import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
    listadoReducers,
    buscadorReducers,
    loadingBuscadorReducers,
    errorBuscadorReducers,
} from "./reducers/index";

const rootReducer = combineReducers({
    listPokemon: listadoReducers,
    buscadorPokemon: buscadorReducers,
    loadingPokemon: loadingBuscadorReducers,
    errorBuscador: errorBuscadorReducers,
});

const configStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default configStore;
