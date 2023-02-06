const express = require("express");
const userControllers = require("../controllers/userControllers");

const router = express.Router();

router.get("/", userControllers.getAllUsers);

router.get("/:id", userControllers.getOneUser);

router.post("/", userControllers.addNewUser);

router.patch("/:id", userControllers.updateOneUser);

router.delete("/:id", userControllers.deleteOneUser);


module.exports = router;
