import React from "react";
import { useDispatch } from "react-redux";
import { setBuyPokemon, setReturnPokemon } from "../actions/Pokemon";

const CompraPokemonHook = () => {
    const dispatch = useDispatch();

    return (
        <>
            <button
                className="btn btn-dark btn-sm mb-2"
                onClick={() => dispatch(setBuyPokemon(1))}
            >
                Comprar Pokemon
            </button>
            <button
                className="btn btn-dark btn-sm"
                onClick={() => dispatch(setReturnPokemon(1))}
            >
                Regresar Pokemon
            </button>
        </>
    );
};

export default CompraPokemonHook;
