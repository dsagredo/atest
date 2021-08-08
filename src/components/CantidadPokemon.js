import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    const { buyPokemon } = state;
    return {
        buyPokemon,
    };
};

const CantidadPokemon = ({ buyPokemon }) => (
    <React.Fragment>Unidades: {buyPokemon}</React.Fragment>
);

export default connect(mapStateToProps)(CantidadPokemon);
