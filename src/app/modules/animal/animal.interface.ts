import { Model, ObjectId } from 'mongoose';

export type IAnimal = {
  title: string;
  category_id: ObjectId;
};

export type Animal = Model<IAnimal, Record<string, unknown>>;
