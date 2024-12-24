// Dependencies
const Warframe = require("../models/warframeModel")


// Get all Warframes
const getWarframes = (req, res) => {
    res.status(200).send({
        mssg: "IT GOT ALL"
    })
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