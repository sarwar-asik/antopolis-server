
import { Model, ObjectId } from "mongoose";

    export type ICategory ={
      name: string;
      userId:ObjectId
    }

export type Category = Model<ICategory,Record<string,unknown>>
