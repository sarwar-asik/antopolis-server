"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const category_model_1 = require("./category.model");
const create_category_db = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category_model.create(payload);
    return result;
});
const get_all_category_db = () => __awaiter(void 0, void 0, void 0, function* () {
    const resultDB = yield category_model_1.Category_model.aggregate([
        {
            $lookup: {
                from: 'animals',
                localField: '_id',
                foreignField: 'category_id',
                as: 'animals',
            },
        },
    ]);
    return resultDB;
});
exports.CategoryService = { create_category_db, get_all_category_db };
