// import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Images
import logo from "./assets/img/Marvel_Logo.png";

// Pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";

// Components
import Header from "./components/Header";

const App = () => {
  const [favorisCharacters, setFavorisCharacters] = useState(
    Cookies.get("favorisCharacters") || null
  );
  // console.log(favorisCharacters);
  const [favorisComics, setFavorisComics] = useState(
    Cookies.get("favorisComics") || null
  );

  // Fonction Favoris
  const handleFavorisCharacter = (character) => {};

  const handleFavorisComic = (comic) => {};

  return (
    <Router>
      <Header logo={logo} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="/"
          element={
            <Characters
              handleFavorisCharacter={handleFavorisCharacter}
              favorisCharacters={favorisCharacters}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              handleFavorisComic={handleFavorisComic}
              favorisComics={favorisComics}
            />
          }
        />
        <Route
          path="/favoris"
          element={
            <Favoris
              handleFavorisCharacter={handleFavorisCharacter}
              favorisCharacters={favorisCharacters}
              setFavorisCharacters={setFavorisCharacters}
              favorisComics={favorisComics}
              handleFavorisComic={handleFavorisComic}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
