import React from "react";

const ListadoPokemon = ({loading, listPokemon}) => {
    const ListItems = () => {
        return loading ? (
            <div className="mt-2 mb-2">
                <h2 className="text-center text-white">
                    Cargando pokemones...
                </h2>
            </div>
        ) : (
            listPokemon.map(({data}) => (
                <div className="col-md-4 mt-2 mb-2" key={data.id}>
                    <div className="card card-bg">
                        <div
                            className={`card-body bg-${data.types[0].type.name}`}
                        >
                            <div className="row">
                                <div className="col-7 col-sm-6">
                                    <div className="title-pokemon">
                                        <h3 className="card-title">
                                            {data.name}
                                        </h3>
                                        {data.types.map((type, idx) => (
                                            <span
                                                key={idx}
                                                className={`badge border me-1 rounded-pill cl-${data.types[0].type.name}`}
                                            >
                                                {type.type.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-5 col-sm-6">
                                    <div className="bg-pokemon">
                                        <div
                                            className="bg-pokemon-img"
                                            style={{
                                                backgroundImage: `url(${data.sprites.other.dream_world.front_default})`,
                                                position: "absolute",
                                                content: "",
                                                display: "block",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                backgroundSize: 90,
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "right",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        );
    };
    return (
        <>
            <h3 className="text-white text-center mt-2 mb-2">Listados</h3>
            <div className="row">
                <ListItems />
            </div>
        </>
    );
};

export default ListadoPokemon;
