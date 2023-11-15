const express = require('express');
const router = express.Router();
const OS = require("../controller/os");

router.get("/", OS.getAll);
router.get("/:id", OS.getById);
router.post("/", OS.create);

module.exports = router;