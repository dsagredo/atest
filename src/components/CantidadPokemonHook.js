import React from "react";
import { useSelector } from "react-redux";

const CantidadPokemonHook = () => {
    const cantidad = useSelector(({ buyPokemon }) => buyPokemon);

    return <React.Fragment>Unidades: {cantidad}</React.Fragment>;
};

export default CantidadPokemonHook;
