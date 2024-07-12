import { IAnimal } from './animal.interface';
import { Animal_model } from './animal.model';

const create_animal_db = async (payload: IAnimal): Promise<IAnimal> => {
  const result = await Animal_model.create(payload);

  return result;
};

const get_all_animal_db = async (): Promise<IAnimal[]> => {
  const resultDB = await Animal_model.find({});

  return resultDB;
};

const get_animal_by_category_db = async (
  category_id: string
): Promise<IAnimal[]> => {
  const resultDB = await Animal_model.find({ category_id });
  return resultDB;
};
export const AnimalService = {
  create_animal_db,
  get_all_animal_db,
  get_animal_by_category_db,
};