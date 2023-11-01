const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();


// Permet de traiter les données de la Request
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use("/post", require("./routes/post.routes"));

// Lancer le serveur sur le port defini
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
  });