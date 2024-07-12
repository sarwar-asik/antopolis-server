import { ICategory } from './category.interface';
import { Category_model } from './category.model';

const create_category_db = async (payload: ICategory): Promise<ICategory> => {
  const result = await Category_model.create(payload);

  return result;
};

const get_all_category_db = async (): Promise<ICategory[]> => {
  const resultDB = await Category_model.aggregate([
    {
      $lookup: {
        from: 'animal',
        localField: '_id',
        foreignField: 'category_id',
        as: 'animal',
      },
    },
  ]);

  return resultDB;
};

export const CategoryService = { create_category_db, get_all_category_db };
