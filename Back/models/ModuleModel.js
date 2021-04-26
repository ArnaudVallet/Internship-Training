const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Veuillez saisir un titre au module."],
        unique: true
    },
    time: {
        type: Number,
        default: 5
    }
})

const Module = mongoose.model('Module', ModuleSchema);

module.exports = {
    ModuleSchema,
    Module
}