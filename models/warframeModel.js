// Dependencies
const mongoose = require("mongoose")

// Defining Schema
const Schema = mongoose.Schema

// Making Schema
const warframeSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "aquisition": {
        type: String,
        required: true
    },
    "primed": {
        type: String,
        required: true
    },
    "parts": {
        "neuroptics": {
            "aquisition": {
                type: String,
                required: true
            },
            "materials": [{
                "name": {
                    type: String,
                    required: true
                },
                "number": {
                    type: Number,
                    required: true
                }
            }]
        },
        "chassis": {
            "aquisition": {
                type: String,
                required: true
            },
            "materials": [{
                "name": {
                    type: String,
                    required: true
                },
                "number": {
                    type: Number,
                    required: true
                }
            }]
        },
        "systems": {
            "aquisition": {
                type: String,
                required: true
            },
            "materials": [{
                "name": {
                    type: String,
                    required: true
                },
                "number": {
                    type: Number,
                    required: true
                }
            }]
        },
        "material": {
            "name": {
                type: String,
                required: true
            },
            "number": {
                type: Number,
                required: true
            },
        }
    }
})

module.exports = mongoose.model("Warframe", warframeSchema)