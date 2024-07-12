
import { IAnimal } from './animal.interface';
import { Animal_model } from './animal.model';

const create_animal_db = async (payload: IAnimal): Promise<IAnimal> => {
  const result = await Animal_model.create(payload);
  
  return result;
};

export const AnimalService = { create_animal_db };

