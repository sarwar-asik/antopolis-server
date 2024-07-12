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
exports.AnimalService = void 0;
const animal_model_1 = require("./animal.model");
const create_animal_db = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield animal_model_1.Animal_model.create(payload);
    return result;
});
const get_all_animal_db = () => __awaiter(void 0, void 0, void 0, function* () {
    const resultDB = yield animal_model_1.Animal_model.find({});
    return resultDB;
});
const get_animal_by_category_db = (category_id) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(category_id, 'category_id');
    const resultDB = yield animal_model_1.Animal_model.find({ category_id }).populate('category_id');
    return resultDB;
});
exports.AnimalService = {
    create_animal_db,
    get_all_animal_db,
    get_animal_by_category_db,
};
