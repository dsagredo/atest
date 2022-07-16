import axios from "axios";

const getPokemon = async (limit = 25, offset = 0) => {
    return await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => res.data)
        .catch((err) => err);
};

const getPokemonData = async (name) => {
    return await axios
        .get(name)
        .then((res) => res)
        .catch((err) => err);
};

const queryPokemon = async (pokemon) => {
    return await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res)
        .catch((err) => err);
};


export {getPokemon, getPokemonData, queryPokemon};
