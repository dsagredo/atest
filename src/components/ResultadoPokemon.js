import React from "react";
import { useSelector } from "react-redux";

const ResultadoPokemon = () => {
    const {
        loadingPokemon,
        errorBuscador,
        buscadorPokemon: { data },
    } = useSelector((state) => state);

    return (
        <div>
            <h3 className="text-white">Resultado: </h3>
            {loadingPokemon && <div className="text-warning">Buscando...</div>}
            <div className="text-success">
                <img src={data?.sprites?.front_default} alt={data?.name} />
                <span>{data?.name}</span>
            </div>
            {errorBuscador && (
                <span className="text-danger">No se encontró el pokemon</span>
            )}
        </div>
    );
};

export default ResultadoPokemon;
