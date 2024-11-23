const mongoose=require("mongoose")

const commentSchema = new mongoose.Schema({
    comment: String,
    user: String,   // Reference to user who posted the comment
    rating: Number, // Rating out of 5
    createdAt: { type: Date, default: Date.now }
});
  

const recipeSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ingredients:{
        type:Array,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },

    
    time:{
        type:String,
    },
    coverImage:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    comments: [commentSchema] ,



},{timestamps:true})

module.exports=mongoose.model("Recipes",recipeSchema)