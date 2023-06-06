import express from "express";
import { hambuguerPost, bebidasPost, combosPost } from "../middlewares/validationPosts.js";
import { addHamburguer, addBebidas, addCombos } from "../controllers/postController.js";

const postRoutes = express.Router();


postRoutes.post("/hamburguers", hambuguerPost, addHamburguer)
postRoutes.post("/bebidas", bebidasPost, addBebidas)
postRoutes.post("/combos", combosPost, addCombos)

export default postRoutes


