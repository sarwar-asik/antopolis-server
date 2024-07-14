"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalValidation = void 0;
const zod_1 = require("zod");
const create_Animal = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'title is Required (zod)',
        }),
        // img: z.string({
        //   required_error: 'img is Required (zod)',
        // }),
        category_id: zod_1.z.string({
            required_error: 'category_id is Required (zod)',
        }),
    }),
});
exports.AnimalValidation = { create_Animal };
