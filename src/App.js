import "./App.css";
import imgPokemon from "./images/pokemon.jpeg";
//import CantidadPokemon from "./components/CantidadPokemon";
//import CompraPokemon from "./components/CompraPokemon";
import CantidadPokemonHook from "./components/CantidadPokemonHook";
import CompraPokemonHook from "./components/CompraPokemonHook";
import BuscadorPokemon from "./components/BuscadorPokemon";
import ResultadoPokemon from "./components/ResultadoPokemon";

const App = () => (
    <div className="App container">
        <div className="row">
            <div className="col-12">
                <div className="card mt-5" style={{ maxWidth: "370px" }}>
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img
                                src={imgPokemon}
                                alt="pokemon"
                                className="card-img"
                            />
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <div className="card-title h3 text-center">
                                    <CantidadPokemonHook />
                                </div>
                                <CompraPokemonHook />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-4 border-top pt-3">
                <BuscadorPokemon />
            </div>
            <div className="col-12">
                <ResultadoPokemon />
            </div>
        </div>
    </div>
);

export default App;
