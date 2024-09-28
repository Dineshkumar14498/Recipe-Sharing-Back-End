const express = require("express");
const router = express.Router();
const { userLogin, userSignUp, getUser } = require("../controller/user");

router.post("/signUp", async (req, res) => {
    try {
        await userSignUp(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        await userLogin(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/user/:id", async (req, res) => {
    try {
        await getUser(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
