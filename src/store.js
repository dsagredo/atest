import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import buyPokemonReducers from "./reducers/Pokemon";
import {
    buscadorReducers,
    loadingBuscadorReducers,
    errorBuscadorReducers,
} from "./reducers/Buscador";

const rootReducer = combineReducers({
    buyPokemon: buyPokemonReducers,
    buscadorPokemon: buscadorReducers,
    loadingPokemon: loadingBuscadorReducers,
    errorBuscador: errorBuscadorReducers,
});

const configStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default configStore;
