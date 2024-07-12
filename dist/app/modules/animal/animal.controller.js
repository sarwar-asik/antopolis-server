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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalController = void 0;
const animal_service_1 = require("./animal.service");
const sendResponce_1 = __importDefault(require("../../../shared/sendResponce"));
const http_status_1 = __importDefault(require("http-status"));
const create_animal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const animalData = __rest(req.body, []);
    const response = yield animal_service_1.AnimalService.create_animal_db(animalData);
    if (response) {
        (0, sendResponce_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: 'Animal created successfully',
            data: response,
        });
    }
});
const get_all_animal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield animal_service_1.AnimalService.get_all_animal_db();
    (0, sendResponce_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'animal retrieved successfully',
        data: response,
    });
});
const get_all_animal_by_category = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category_id = req.params.category_id;
    const response = yield animal_service_1.AnimalService.get_animal_by_category_db(category_id);
    (0, sendResponce_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category animal retrieved successfully',
        data: response,
    });
});
exports.AnimalController = {
    create_animal,
    get_all_animal,
    get_all_animal_by_category,
};
