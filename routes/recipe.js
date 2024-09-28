const express = require("express");
const {
    getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
    upload
} = require("../controller/recipe");
const verifyToken = require("../middleware/auth");
const router = express.Router();

router.get("/", getRecipes); // Get all recipes
router.get("/:id", getRecipe); // Get recipe by id
router.post("/", upload.single('file'), verifyToken, async (req, res) => {
    try {
        await addRecipe(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); // Add recipe
router.put("/:id", upload.single('file'), async (req, res) => {
    try {
        await editRecipe(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); // Edit recipe
router.delete("/:id", async (req, res) => {
    try {
        await deleteRecipe(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); // Delete recipe

module.exports = router;
