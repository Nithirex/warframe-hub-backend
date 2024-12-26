// Dependencies
const express = require("express")
const router = express.Router()
const {
    getWarframes,
    getWarframe,
    createWarframe,
    deleteWarframe,
    updateWarframe
} = require("../controllers/warframeController")

// GET all Warframes
router.get("/", getWarframes)

// GET one
router.get("/:name", getWarframe)

// POST one
router.post("/", createWarframe)

// DELETE one
router.delete("/:name", deleteWarframe)

// PATCH one
router.patch("/:name", updateWarframe)

// Exports
module.exports = router