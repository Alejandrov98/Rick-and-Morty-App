import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const textos = { color: "black" };
const info = { textAlign: "left", fontSize: "24px" };
const image = { borderRadius: "10px", border: "2px solid darkslateblue" };
const divPrincipal = {
  color: "black",
  display: "flex",
  justifyContent: "space-around",
  widtth: "80%",
  margin: "auto",
  marginTop: "75px",
};
const styleButton = {
  backgroundColor: "peachpuff",
  color: "18, 114, 182",
  border: "0px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px",
  marginTop: "35px",
  cursor: "pointer",
};
export default function Detail() {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({
    name: "",
    status: "",
    specie: "",
    gender: "",
    origin: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name: char.name,
            status: char.status,
            specie: char.specie,
            gender: char.gender,
            origin: char.origin.name,
            image: char.image,
          });
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <div style={divPrincipal}>
        <div style={info}>
          <p>
            <b style={textos}>Name:</b> {character.name}
          </p>
          <p>
            <b style={textos}>Status:</b>
            {character.status}
          </p>
          {character.specie && (
            <p>
              <b style={textos}>Specie:</b>
              {character.specie}
            </p>
          )}
          <p>
            <b style={textos}>Gender:</b>
            {character.gender}
          </p>
          <p>
            <b style={textos}>Origin:</b>
            {character.origin}
          </p>
        </div>
        <img style={image} src={character.image} alt="" />
      </div>
      <button style={styleButton} onClick={() => navigate('/home')} > Regresar</button>
    </div>
  );
}
