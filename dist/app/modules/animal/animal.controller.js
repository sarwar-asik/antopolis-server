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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalController = void 0;
const animal_service_1 = require("./animal.service");
const sendResponce_1 = __importDefault(require("../../../shared/sendResponce"));
const http_status_1 = __importDefault(require("http-status"));
const cloudinary_1 = require("../../middlesWare/cloudinary/cloudinary");
const create_animal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const animalData = req.body;
    let profileImageUrl;
    // eslint-disable-next-line no-console
    // console.log(req.file, 'req.file');
    if (req.file) {
        const uploadResult = yield (0, cloudinary_1.uploadOnCloudinary)(req.file.path);
        // console.log("🚀  constcreate_animal= ~ uploadResult:", uploadResult)
        if (uploadResult) {
            profileImageUrl = uploadResult.secure_url;
        }
    }
    if (profileImageUrl) {
        animalData.img = profileImageUrl;
    }
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
