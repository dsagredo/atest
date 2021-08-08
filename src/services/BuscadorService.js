import axios from "axios";

const queryPokemon = async (name) => {
    return await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res)
        .catch(() => "");
};

export default queryPokemon;
