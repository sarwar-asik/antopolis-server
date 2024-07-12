
import { ICategory } from './category.interface';
import { Category_model } from './category.model';

const create_category_db = async (payload: ICategory): Promise<ICategory> => {
  const result = await Category_model.create(payload);
  
  return result;
};

export const CategoryService = { create_category_db };

