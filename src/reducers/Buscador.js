import {
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_LOADING,
    FETCH_POKEMON_FAILURE,
} from "../actions/types";

const buscadorReducers = (state = [], action) => {
    switch (action.type) {
        case FETCH_POKEMON_SUCCESS:
            return action.listPokemon;
        default:
            return state;
    }
};

const loadingBuscadorReducers = (state = false, action) => {
    switch (action.type) {
        case FETCH_POKEMON_LOADING:
            return action.loading;
        default:
            return state;
    }
};

const errorBuscadorReducers = (state = false, action) => {
    switch (action.type) {
        case FETCH_POKEMON_FAILURE:
            return action.error;
        default:
            return state;
    }
};

export { buscadorReducers, loadingBuscadorReducers, errorBuscadorReducers };
