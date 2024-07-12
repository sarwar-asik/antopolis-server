import { Schema } from 'mongoose';
import { ICategory } from './category.interface';
import { model } from 'mongoose';

const CategorySchema: Schema<ICategory> = new Schema<ICategory>(
  {
    title: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

CategorySchema.virtual('animals', {
  ref: 'Animal',
  localField: '_id',
  foreignField: 'workspace_id',
  justOne: false,
});

export const Category_model = model<ICategory>('Category', CategorySchema);
