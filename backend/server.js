const express = require("express"); // ça fera appel à express ,on va pouvoir accéder à 
//toutes les méthodes qui adossées  à cette librairie.
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

// connexion a la BD
connectDB();


const app = express(); // ceci dit des que je dirais app.get ou app.use ou app.listen , ça ira dans l app express qu on installé 

// donc, comment est ce qu on s y prend ?

// app.get("/post", (req, res) => {
//     res.json({ message: "Voici les données"}); // ça veut dire que notre serveur il comprend la route qu on lui donne et il arrive a nous formuler une response  
// });

app.use(express.json());
app.use(express.urlencoded({ }))


//quand on lui dira / , j aurais tt le temps envie qu il aille chercher qui a trait à post et il aura tout la logique la dedans 
app.use("/post", require("./routes/post.routes"))


// tt a d abord , lancer le serveur !

app.listen(port, () => console.log("Le serveur a démarré au port " + port))

//app.get
//app.post 
// on va pas tt mettre dans notre serveur.js sinon le fichier au bout d un moment il va etre illisible , difficle a maintenir
// et quand on est développeur  ce qu on aime bien faire c est cloisonner des choses créer plein de fichiers
// ce qu on va faire maintenant avec le dossier root

// à chaque qu on ferait un ctrl+s nodemen il va à chaque fois remettre lese choses à jour 