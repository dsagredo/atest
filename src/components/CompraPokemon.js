import React from "react";
import { connect } from "react-redux";
import { setBuyPokemon, setReturnPokemon } from "../actions/Pokemon";

const CompraPokemon = ({ setBuyPokemon, setReturnPokemon }) => (
    <>
        <button
            className="btn btn-dark btn-sm mb-2"
            onClick={() => setBuyPokemon(1)}
        >
            Comprar Pokemon
        </button>
        <button
            className="btn btn-dark btn-sm"
            onClick={() => setReturnPokemon(1)}
        >
            Regresar Pokemon
        </button>
    </>
);

const mapDispatchToProps = {
    setBuyPokemon,
    setReturnPokemon,
};

export default connect(null, mapDispatchToProps)(CompraPokemon);
