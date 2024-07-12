"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const category_validation_1 = require("./category.validation");
const validateUserRequest_1 = __importDefault(require("../../middlesWare/validateUserRequest"));
const router = (0, express_1.Router)();
router
    .route('/')
    .post((0, validateUserRequest_1.default)(category_validation_1.CategoryValidation.create_Category), category_controller_1.CategoryController.create_category)
    .get(category_controller_1.CategoryController.get_all_category);
exports.CategoryRoutes = router;
