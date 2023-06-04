import express from "express";
const patchRoutes = express.Router();


patchRoutes.patch("/hamburguers")
patchRoutes.patch("/bebidas")
patchRoutes.patch("/combos")

export default patchRoutes


