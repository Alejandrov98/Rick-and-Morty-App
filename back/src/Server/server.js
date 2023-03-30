const express = require("express");
const server = express();
const PORT = 3001;
const getAllChars= require('../controllers/getAllChars')



// Configuración con problema de CORS
// npm install cors --save
// ---
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, // access-control-allow-credentials: true
  optionSuccessStatus: 200,
};
server.use(cors(corsOptions)); // Use this after the variable declaration
// ---

const router = require("../routes/index.js");

server.use(express.json());

server.use("/", router);

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});

// const http = require("http");
// const getCharById = require("../controllers/getCharById");
// const getCharDetail = require("../controllers/getCharDetail");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     let id = req.url.split("/").at(-1);
//     if (req.url.includes("onsearch")) {
//       getCharById(res, id);
//     }
//     if (req.url.includes("detail")) {
//       getCharDetail(res, id);
//     }
//   })
//   .listen(3001, "localhost");
