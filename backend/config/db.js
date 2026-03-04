const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    // plus besoin de useNewUrlParser ni useUnifiedTopology
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connecté");
  } catch (err) {
    console.error("Erreur DB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;