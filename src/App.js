import React, {useEffect, useState, useCallback} from "react";
import "./App.css";
import Header from "./components/Header";
import {useDispatch, useSelector} from "react-redux";
import {setPokemon} from "./actions";
import ListadoPokemon from "./components/ListadoPokemon";
import BuscadorPokemon from "./components/BuscadorPokemon";
import Pagination from "./components/Pagination";

import {
    getPokemon,
    getPokemonData,
    queryPokemon,
} from "./services/pokemonService";

const App = () => {
    const dispatch = useDispatch();
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [searching, setSearching] = useState(false);
    const {listPokemon} = useSelector((state) => state);

    const onPokemon = useCallback( async () => {
        const data = await getPokemon(25, 25 * page);
        const info = data.results.map(
            async (item) => await getPokemonData(item.url)
        );
        const resp = await Promise.all(info);
        dispatch(setPokemon(resp));
        setLoading(false);
        setSearching(false);
        setTotal(Math.ceil(data.count / 25));
      }, [page, dispatch]);

    useEffect(() => {
        if (!searching) {
            //onPokemon();
        }
    }, [onPokemon, searching]);

    const onSearch = async (pokemon) => {
        if (!pokemon) {
            setNotFound(false);
            return onPokemon();
        }
        setLoading(true);
        setSearching(true);
        const resp = await queryPokemon(pokemon);
        if (resp.status !== 200) {
            setNotFound(true);
            setLoading(false);
        } else {
            dispatch(setPokemon([resp]));
            setPage(0);
            setTotal(1);            
        }
        setLoading(false);
    };

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    };

    return (
        <div className="container">
            <div className="row">
                <Header />
                <BuscadorPokemon onSearch={onSearch} />
                <div className="col-12">
                    {notFound ? (
                        <div className="mt-3 alert alert-danger" role="alert">
                            No se encontro el Pokemon que buscabas 😭
                        </div>
                    ) : (
                        <ListadoPokemon
                            loading={loading}
                            listPokemon={listPokemon}
                            page={page}
                            setPage={setPage}
                            total={total}
                        />
                    )}
                </div>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
        </div>
    );
};

export default App;
