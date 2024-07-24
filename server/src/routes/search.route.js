const express = require("express");
const router = express.Router();
const { createUser, searchUser } = require("../controllers/search.controller");
router.post("/create", createUser);
router.post("/search", searchUser);
module.exports = router;
