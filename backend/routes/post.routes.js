// fichier didié pour ce que qui va concerner les postes
// si jamais on voulait créer une base de donnée utilisateur , une base de donnée client on aurait pu continuer a créer des routes ; pour ce projet on fait que des postes.
// on va d abord appeler 
const express = require("express");
const router = express.Router();




// notre logique , ça fonctionne , qu est ce que je dois faire apres une fois que tu arrives à la bonne route 
// tout ça sera stocké dans une partie contrôleur .
// d abord on va faire toutes nos routes qui concernent les posts 
router.get("/", (req, res) => {
    res.json({ message: "Voici les données"}); // ça veut dire que notre serveur il comprend la route qu on lui donne et il arrive a nous formuler une response  
}); 

router.post("/", (req, res) => {
    console.log(req.body)
    res.json({ message: req.body.message}); // req est la donnée qu on envoie pour faire notre requête ça peut donc être à l ID ou un message , et à la fin on renvoie une reponse res ,on peut s en tenir à ça 
});

//quand on veut faire un mise à jour 
//pour en faire (l édition d un message) , on a besoin de savoir quel message on veut éditer, on va lui passer directement un ID

router.put('/:id', (req, res) => {
    res.json({ messageId: req.params});
});

router.delete('/:id', (req, res) => {
    res.json({ message : "Post supprimé id : " + req.params.id});
});

// pour finir nos routes , 
// chaque post il aura un p'tit tableau qui sera accolé avec tous les gens qui ont liké
// on va voir quel poste a été liké apres faudrait aussi transmettre par qui ça a été liké pour pouvoir éventuellement déliker un peu plus tard .

router.patch('/like-post/:id', (req, res) => {
    res.json({ message : "Post liké id : " + req.params.id});
});


// bien sûr il va falloir qu on exporte à la fin tout ça
module.exports = router;