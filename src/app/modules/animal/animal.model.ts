import { Schema } from 'mongoose';
import { IAnimal } from './animal.interface';
import { model } from 'mongoose';

const AnimalSchema: Schema<IAnimal> = new Schema<IAnimal>(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Animal_model = model<IAnimal>('Animal', AnimalSchema);
