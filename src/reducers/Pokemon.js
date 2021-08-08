import { BUY_POKEMON, RETURN_POKEMON } from "../actions/types";

const buyPokemonReducers = (state = 30, action) => {
    switch (action.type) {
        case BUY_POKEMON:
            return state - action.cantidad;
        case RETURN_POKEMON:
            return state + action.cantidad;
        default:
            return state;
    }
};

export default buyPokemonReducers;
