import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
// import Card from './components/Card.jsx'
import Cards from "./components/Cards.jsx";
// import SearchBar from './components/SearchBar.jsx'
import Nav from "./components/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form";
import Favorites from "./Favorites/Favorites";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAcess] = useState(false);
  const username = "avillamayor720@gmail.com";
  const password = "Osoley15";
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAcess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}
      <div></div>
      <Routes>
        <Route path="/" element={<login />}>
          {" "}
        </Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>

      </Routes>
    </div>
  );
}

export default App;
