import { z } from 'zod';
const create_Animal = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is Required (zod)',
    }),
    category_id: z.string({
      required_error: 'category_id is Required (zod)',
    }),
  }),
});

export const AnimalValidation = { create_Animal };
