const { Router } = require("express");

var { getCharById } = require("../controllers/getCharById.js");
var { getCharDetail } = require("../controllers/getCharDetail.js");
var { addFav, getFavs, deleteFav } = require("../controllers/favController.js");
const getAllChars = require("../controllers/getAllChars.js");

const router = Router();

router.get("/rickandmorty/allCharacters", async (req, res) => {
  try {
    const allCharacters = await getAllChars();
    res.status(200).json(allCharacters);
  } catch (error) {
    res.status(404).send("Hubo un error");
  }
});
router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/fav", addFav);
router.get("/fav", getFavs);
router.delete("/fav/:id", deleteFav);

module.exports = router;
