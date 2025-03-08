// Importo express
const express = require("express")

// Importiamo router di express
const router = express.Router()

// Importiamo il controller
const controller = require("../controllers/controllerRoutes")


// INDEX VISUALIZZA TUTTI GLI ELEMENTI CON .GET 
router.get("/",controller.index)

// SHOW VISUALIZZA UN ELEMENTO CON .GET 
router.get("/:id",controller.show)

// STORE CREA UN NUOVO ELEMENTO CON .POST
router.post("/",(req,res) => {
    res.json("questa e la rotta STORE!!!!!!!!!!!")
})

// UPDATE MODIFICA INTERAMENTE L ELEMENTO  CON .PUT
router.put("/:id",(req,res) => {
    res.json("questa e la rotta UPDATE!!!!!!!!!!!")
})

// DELETE ELIMINA UN ELEMENTO CON .DELETE
router.delete("/:id",controller.destroy)




module.exports = router