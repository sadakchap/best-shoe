const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32,
        unique: true,
        lowercase: true
    }
}, { timestamps: true });

module.exports = Category = mongoose.model('Category', categorySchema);