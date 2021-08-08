import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    setLoadingPokemon,
    setPokemon,
    setErrorPokemon,
} from "../actions/Buscador";
import queryPokemon from "../services/BuscadorService";

const BuscadorPokemon = () => {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState("");

    const onPokemon = async () => {
        const resp = await queryPokemon(pokemonName);
        dispatch(setErrorPokemon(false));
        dispatch(setLoadingPokemon(true));
        if (resp.data.is_default) {
            setTimeout(() => {
                dispatch(setPokemon(resp));
                dispatch(setLoadingPokemon(false));
                dispatch(setErrorPokemon(false));
                setPokemonName("");
            }, 3000);
        } else {
            dispatch(setPokemon(""));
            dispatch(setErrorPokemon(true));
            dispatch(setLoadingPokemon(false));
        }
    };

    return (
        <div className="form-group">
            <label className="text-white">Buscar Pokemon</label>
            <input
                type="text"
                className="form-control"
                value={pokemonName}
                onChange={(event) => setPokemonName(event.target.value)}
            />
            <button
                className="btn btn-primary mt-3"
                onClick={() => onPokemon()}
            >
                Enviar
            </button>
        </div>
    );
};

export default BuscadorPokemon;
