/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { AnimalController } from './animal.controller';
import { AnimalValidation } from './animal.validation';
import validateRequest from '../../middlesWare/validateUserRequest';
const router = Router();
router
  .route('/')
  .get(AnimalController.get_all_animal)
  .post(
    validateRequest(AnimalValidation.create_Animal),
    AnimalController.create_animal
  );

router.get('/:category_id', AnimalController.get_all_animal_by_category);
export const AnimalRoutes = router;
