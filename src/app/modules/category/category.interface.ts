
import { Model } from "mongoose";

    export type ICategory = {
  
      title: string;
    };

export type Category = Model<ICategory,Record<string,unknown>>
