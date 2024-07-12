
import { Request, Response } from 'express';
import { AnimalService  } from './animal.service';
import sendResponse from '../../../shared/sendResponce';
import httpStatus from 'http-status';

const create_animal = async (req: Request, res: Response) => {
  const { ...animalData } = req.body;
  const response = await AnimalService.create_animal_db(animalData,);

  if (response) {
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Animal created successfully',
      data: response,
    });
  }
};

export const AnimalController = { create_animal };

