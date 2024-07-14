"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal_model = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const AnimalSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    img: { type: String },
    category_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Animal_model = (0, mongoose_2.model)('Animal', AnimalSchema);
