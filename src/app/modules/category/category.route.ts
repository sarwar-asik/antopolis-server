/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validation';
import validateRequest from '../../middlesWare/validateUserRequest';
const router = Router();
router
  .route('/')
  .post(
    validateRequest(CategoryValidation.create_Category),
    CategoryController.create_category
  )
  .get(CategoryController.get_all_category);

export const CategoryRoutes = router;
