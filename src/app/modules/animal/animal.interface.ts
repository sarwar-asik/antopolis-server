import { Model, ObjectId } from 'mongoose';

export type IAnimal = {
  title: string;
  img: string;
  category_id: ObjectId;
};

export type Animal = Model<IAnimal, Record<string, unknown>>;
