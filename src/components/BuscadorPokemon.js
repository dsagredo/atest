import React, {useState} from "react";

const BuscadorPokemon = ({onSearch}) => {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(null);
        }
    };

    const onClick = async () => onSearch(search);

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar pokemon..."
                onChange={onChange}
            />
            <div className="input-group-append">
                <button
                    className="btn btn btn-primary"
                    onClick={onClick}
                    type="button"
                >
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </div>
    );
};

export default BuscadorPokemon;
