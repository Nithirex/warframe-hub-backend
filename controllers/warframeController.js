// Dependencies
const Warframe = require("../models/warframeModel")


// Get all Warframes
const getWarframes = async (req, res) => {
    const warframes = await Warframe.find({}).sort({ name: 1 })
    res.status(200).send(warframes)
}

// Get one
const getWarframe = (req, res) => {
    res.status(200).send({
        mssg: "IT GOT ONE"
    })
}

// Create one
const createWarframe = async (req, res) => {
    try {
        const warframe = await Warframe.create(req.body)
        res.status(200).send(warframe)
    } catch (err) {
        res.status(400).send({
            error: err.message
        })
    }
}

// Delete one
const deleteWarframe = (req, res) => {
    res.status(200).send({
        mssg: "IT DELETED ONE"
    })
}

// Update one
const updateWarframe = (req, res) => {
    res.status(200).send({
        mssg: "IT PATCHED ONE"
    })
}

// Exports
module.exports = {
    getWarframes,
    getWarframe,
    createWarframe,
    deleteWarframe,
    updateWarframe
}