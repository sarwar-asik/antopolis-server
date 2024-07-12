
import { Request, Response } from 'express';
import { CategoryService  } from './category.service';
import sendResponse from '../../../shared/sendResponce';
import httpStatus from 'http-status';

const create_category = async (req: Request, res: Response) => {
  const { ...categoryData } = req.body;
  const response = await CategoryService.create_category_db(categoryData,);

  if (response) {
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Category created successfully',
      data: response,
    });
  }
};

export const CategoryController = { create_category };

