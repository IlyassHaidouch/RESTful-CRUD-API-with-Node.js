//comme vous paramétrez sur mysql dans phpmyadmin 

//on fait appel a la bibliothèque de mongo db qui nous permet de coder bcp plus facilement.
const mongoose = require("mongoose");

// on va créer un schèma
const postSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        likers: {
            type: [String]
        }
    },
    {
        timestamps: true // quand il va créer a chaque fois le post il va nous mettre la date exacte à laquelle ça été créé
    }
)

module.exports = mongoose.model('post', postSchema);