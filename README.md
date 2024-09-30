# Backend README

## Overview

This is the backend API for TastyVault, built with Node.js, Express.js, and MongoDB.


## Endpoints


### Recipes

* **get("/",getRecipes)**: //Get all recipes
* **get("/:id",getRecipe)**: //Get recipe by id
* **post("/",upload.single('file'),verifyToken ,addRecipe)** : //add recipe
* **put("/:id",upload.single('file'),editRecipe)** : //Edit recipe
* **delete("/:id",deleteRecipe)** //Delete recipe


### Users

*   **POST ("/signUp",userSignUp)**: Login endpoint
*   **POST ("/login", userLogin)**: Registration endpoint
*   **GET ("/user/:id",getUser)**: Retrieve current user information



## Database Schema


### Recipes Collection

*   `_id` (ObjectId)
*   `title` (String)
*   `description` (String)
*   `ingredients` (Array)
*   `instructions` (Array)
*   `userId` (ObjectId)


### Users Collection

*   `_id` (ObjectId)
*   `username` (String)
*   `email` (String)
*   `password` (String)


## Dependencies


*   Express.js
*   MongoDB
*   Mongoose
*   JSON Web Tokens (JWT)
*   Bcrypt


## Support

For any issues or concerns, please open an issue on GitHub or contact dineshvlr9500@gmail.com.

## 🤝 Connect with Me

**LinkedIn:** www.linkedin.com/in/dinesh-kumar-2565191b4
