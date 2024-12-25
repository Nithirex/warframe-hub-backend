// Dependencies
const express = require("express")
const router = express.Router()

// GET All Warframes
router.get("/", (req, res) => {
    res.status(200).send({
        mssg: "IT GOT ALL"
    })
})

// GET one
router.get("/:id", (req, res) => {
    res.status(200).send({
        mssg: "IT GOT ONE"
    })
})

// POST one
router.post("/", (req, res) => {
    res.status(200).send({
        mssg: "IT POSTED ONE"
    })
})
// DELETE one
router.delete("/:id", (req, res) => {
    res.status(200).send({
        mssg: "IT DELETED ONE"
    })
})

// PATCH one
router.patch("/:id", (req, res) => {
    res.status(200).send({
        mssg: "IT PATCHED ONE"
    })
})

// Exports
module.exports = router