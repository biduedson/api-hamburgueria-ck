const express = require("express");
const { hambuguerPost, bebidasPost, combosPost } = require("../middlewares/validationPosts.js");
const { addHamburguer, addBebidas, addCombos } = require("../controllers/postController.js");

const postRoutes = express.Router();


postRoutes.post("/hamburguers", hambuguerPost, addHamburguer)
postRoutes.post("/bebidas", bebidasPost, addBebidas)
postRoutes.post("/combos", combosPost, addCombos)

module.exports = postRoutes


