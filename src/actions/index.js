import {
    FETCH_POKEMON_LOADING,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE,
} from "./types";

const setPokemon = (listPokemon) => ({
    type: FETCH_POKEMON_SUCCESS,
    listPokemon,
});

const setLoadingPokemon = (loading) => ({
    type: FETCH_POKEMON_LOADING,
    loading,
});

const setErrorPokemon = (error) => ({
    type: FETCH_POKEMON_FAILURE,
    error,
});

export { setPokemon, setLoadingPokemon, setErrorPokemon };
