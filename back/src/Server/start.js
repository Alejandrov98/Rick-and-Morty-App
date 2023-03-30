const app = require("./server");
const { sequelize } = require("../DB_connection");
const { saveApiData } = require("../controllers/SaveApiData");

sequelize.sync({ force: true }).then(async() => {
  console.log("Base de datos conectada"); //NO SE ME CONECTAAAAA 
  saveApiData();
  app.listen(3001, () => {
    console.log("Server on port 3001");
  });
});
