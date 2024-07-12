
import { Schema } from 'mongoose';
import { IAnimal } from './animal.interface';
import { model } from 'mongoose';

const AnimalSchema: Schema<IAnimal> = new Schema<IAnimal>(
  {
    title: { type: String, required: true },
     userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Animal_model = model<IAnimal>('Animal',  AnimalSchema);
