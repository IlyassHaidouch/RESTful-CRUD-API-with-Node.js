const PostModel = require('../models/post.model');

// getPosts est toujours asynchrone quand on attend une reponse d un serveur distant quel que ce soit le temps que ça prend.
module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find(); // tu await postModel
    res.status(200).json(posts);
}


// ce que l on va faire on va créer une fonction setPost pour mettre en place un message, c de l asynchrone , cette fonction s exporte tt seul
module.exports.setPosts = async (req, res) => {
    // et ici on met toute notre logique pour exécuter 
    if (!req.body.message) {
        res.status(400).json({message : "Merci d'ajouter un message"})
    }

    // c le message que notre utilisateur va envoyer 
    // pk await ? parcequ on a besoin d envoyer des choses à la base de données.
    // qui dit accolade dit objet
    const post = await PostModel.create({
        message: req.body.message, // ce que tu va recevoir dans ta requête et le stocker dans la base de données 
        author: req.body.author
    });
    res.status(200).json(post);
}

module.exports.editPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id)

    if (!post) { // on contrôle qu on a bien cette ID.
        res.status(400).json({ message: "Ce post n'existe pas" }) // le post qu on va identifier c est un await de PostModel il sait qu il doit aller chercher un message avec un id précis qu on va lui passer dans req params.id
    }

    const updatePost = await PostModel.findByIdAndUpdate(post,req.body,
        {
            new: true
        }
    )

    res.status(200).json(updatePost)
}