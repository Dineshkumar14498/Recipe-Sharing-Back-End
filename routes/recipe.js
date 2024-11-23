const express= require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload,rateRecipe} = require("../controller/recipe")
const verifyToken = require("../middleware/auth")
const Recipe = require("../models/recipe")
const router=express.Router()

router.get("/",getRecipes) //Get all recipes
router.get("/:id",getRecipe) //Get recipe by id
router.post("/",upload.single('file'),verifyToken ,addRecipe) //add recipe
router.put("/:id",upload.single('file'),editRecipe) //Edit recipe
router.delete("/:id",deleteRecipe) //Delete recipe
router.post("/rate", verifyToken, rateRecipe)//rateRecipe

router.get('/:id/comments', async (req, res) => {
    try {
        const { comment, rating, user } = req.body;
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

        const newComment = { comment, user, rating };
        recipe.comments.push(newComment);
        await recipe.save();

        res.status(201).json({ message: 'Comment added successfully', comments: recipe.comments });
    } catch (error) {
        res.status(500).json({ message: 'Error adding comment', error });
    }
});

// Rate a recipe
router.post('/:id/rate', async (req, res) => {
    try {
        const { rating, user } = req.body;
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

        const existingComment = recipe.comments.find((c) => c.user === user);
        if (existingComment) {
            existingComment.rating = rating;  // Update rating if user has already rated
        } else {
            recipe.comments.push({ rating, user });
        }

        await recipe.save();
        res.status(200).json({ message: 'Rating updated', comments: recipe.comments });
    } catch (error) {
        res.status(500).json({ message: 'Error updating rating', error });
    }
});
  
  

module.exports=router