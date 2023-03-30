
var axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const params = req.params;

  axios
    .get(`${URL}${params.id}`)
    .then(({ data }) => {
      const obj = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
      };
      res.status(200).json(obj);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

module.exports = { getCharById };





// const axios = require ("axios")

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result => result.data)
//     .then((data) => {
//       let character = {
//         id: data.id,
//         name: data.name,
//         image: data.image,
//         gender: data.gender,
//         species: data.species,
//       };
//       res
//         .writeHead(200, { "Content-Type": "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch((err) =>
//       res
//         .writeHead(500, { "Content-Type": "text/plain" })
//         .end(`El personaje con id: ${id} no fue encontrado`)
//     );
// };

// module.exports = getCharById;
