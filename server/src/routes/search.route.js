const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/search.controller");
router.post("/create", createUser);
module.exports = router;
