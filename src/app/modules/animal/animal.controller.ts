import { Request, Response } from 'express';
import { AnimalService } from './animal.service';
import sendResponse from '../../../shared/sendResponce';
import httpStatus from 'http-status';
import { uploadOnCloudinary } from '../../middlesWare/cloudinary/cloudinary';

const create_animal = async (req: Request, res: Response) => {
  const animalData = req.body;

  let profileImageUrl: string | undefined;

  // eslint-disable-next-line no-console
  // console.log(req.file, 'req.file');
  if (req.file) {
    const uploadResult = await uploadOnCloudinary(req.file.path);
    // console.log("🚀  constcreate_animal= ~ uploadResult:", uploadResult)
    if (uploadResult) {
      profileImageUrl = uploadResult.secure_url;
    }
  }
  if (profileImageUrl) {
    animalData.img = profileImageUrl;
  }
  const response = await AnimalService.create_animal_db(animalData);

  if (response) {
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Animal created successfully',
      data: response,
    });
  }
};

const get_all_animal = async (req: Request, res: Response) => {
  const response = await AnimalService.get_all_animal_db();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'animal retrieved successfully',
    data: response,
  });
};

const get_all_animal_by_category = async (req: Request, res: Response) => {
  const category_id = req.params.category_id as string;
  const response = await AnimalService.get_animal_by_category_db(category_id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category animal retrieved successfully',
    data: response,
  });
};

export const AnimalController = {
  create_animal,
  get_all_animal,
  get_all_animal_by_category,
};
