// Dependencies
const express = require("express")
const router = express.Router()

// GET All Warframes
router.get("/", (req, res) => {
    res.status(200).send({
        mssg: "IT WORKED"
    })
})


// Exports
module.exports = router