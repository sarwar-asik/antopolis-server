import { Request, Response } from 'express';
import { CategoryService } from './category.service';
import sendResponse from '../../../shared/sendResponce';
import httpStatus from 'http-status';

const create_category = async (req: Request, res: Response) => {
  const { ...categoryData } = req.body;
  const response = await CategoryService.create_category_db(categoryData);

  if (response) {
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Category created successfully',
      data: response,
    });
  }
};

const get_all_category = async (req: Request, res: Response) => {
  const response = await CategoryService.get_all_category_db();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'category retrieved successfully',
    data: response,
  });
};

export const CategoryController = { create_category, get_all_category };
