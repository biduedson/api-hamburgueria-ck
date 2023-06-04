import express from "express";
const deleteRoutes = express.Router();

deleteRoutes.delete("/hamburguers")
deleteRoutes.delete("/bebidas")
deleteRoutes.delete("/combos")

export default deleteRoutes


