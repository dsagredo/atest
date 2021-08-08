import { BUY_POKEMON, RETURN_POKEMON } from "./types";

const setBuyPokemon = (cantidad) => ({
    type: BUY_POKEMON,
    cantidad,
});

const setReturnPokemon = (cantidad) => ({
    type: RETURN_POKEMON,
    cantidad,
});

export { setBuyPokemon, setReturnPokemon };
