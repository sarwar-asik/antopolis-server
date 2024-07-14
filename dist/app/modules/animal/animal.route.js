"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalRoutes = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const animal_controller_1 = require("./animal.controller");
const animal_validation_1 = require("./animal.validation");
const validateUserRequest_1 = __importDefault(require("../../middlesWare/validateUserRequest"));
const multer_1 = __importDefault(require("../../middlesWare/multer/multer"));
const router = (0, express_1.Router)();
router
    .route('/')
    .get(animal_controller_1.AnimalController.get_all_animal)
    .post(multer_1.default.single('image'), (0, validateUserRequest_1.default)(animal_validation_1.AnimalValidation.create_Animal), animal_controller_1.AnimalController.create_animal);
router.get('/:category_id', animal_controller_1.AnimalController.get_all_animal_by_category);
exports.AnimalRoutes = router;
