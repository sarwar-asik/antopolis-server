"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category_model = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    title: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
CategorySchema.virtual('animals', {
    ref: 'Animal',
    localField: '_id',
    foreignField: 'workspace_id',
    justOne: false,
});
exports.Category_model = (0, mongoose_2.model)('Category', CategorySchema);
