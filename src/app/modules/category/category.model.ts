
import { Schema } from 'mongoose';
import { ICategory } from './category.interface';
import { model } from 'mongoose';

const CategorySchema: Schema<ICategory> = new Schema<ICategory>(
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

export const Category_model = model<ICategory>('Category',  CategorySchema);
