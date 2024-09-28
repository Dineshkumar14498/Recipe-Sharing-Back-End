const mongoose=require("mongoose")

const recipeSchema= new mongoose.Schema({
    title: {
        type:String,
        required:[true, 'Recipe title is required'],
    },
    ingredients: {
        type:Array,
        required:true
    },
    instructions: {
        type:String,
        required:[true,'Recipe instruction are required'],
    },
    time: {
        type:String,
    },

    coverImage: {
        type:String,
        required:true
    },
    
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
    
},{timestamps:true})

const Recipe= mongoose.model("Recipe",recipeSchema);

module.exports=Recipe;