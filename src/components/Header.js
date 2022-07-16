import React from "react";


const Header = () => {

  let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav className="mt-2 mb-2">
      <div className="text-center">
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
    </nav>
  );
};

export default Header;