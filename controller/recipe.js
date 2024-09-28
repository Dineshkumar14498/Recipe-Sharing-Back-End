const Recipes = require("../models/recipe")
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + '-' + file.fieldname
        cb(null, filename)
    }
})

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/; // Allowed file types
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the following filetypes - " + filetypes);
    }


 })

const getRecipes = async (req, res) => {
    const recipes = await Recipes.find()
    return res.json(recipes)
}

const getRecipe = async (req, res) => {
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe = async (req, res) => {
    console.log(req.user)
    const { title, ingredients, instructions, time } = req.body

    if (!title || !ingredients || !instructions) {
        return res.status(400).json({ message: "Required fields can't be empty" });

    }

    const newRecipe = await Recipes.create({
        title,
        ingredients,
        instructions,
        time,
        coverImage: req.file ? req.file.filename : null, // Handle no image case
        createdBy: req.user.id
    });
    return res.status(201).json(newRecipe); // Use 201 status code for created resource

}
const editRecipe = async (req, res) => {
    const { title, ingredients, instructions, time } = req.body;
    const recipeId = req.params.id;
    
    try {
        const recipe = await Recipes.findById(recipeId);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        let coverImage = req.file?.filename ? req.file.filename : recipe.coverImage;
        const updatedRecipe = await Recipes.findByIdAndUpdate(recipeId, { ...req.body, coverImage }, { new: true });
        res.json(updatedRecipe);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
const deleteRecipe = async (req, res) => {
    try {
        await Recipes.deleteOne({ _id: req.params.id })
        res.json({ status: "ok" })
    }
    catch (err) {
        return res.status(400).json({ message: "error" })
    }
}

module.exports = { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload }