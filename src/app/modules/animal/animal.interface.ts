
import { Model, ObjectId } from "mongoose";

    export type IAnimal ={
      name: string;
      userId:ObjectId
    }

export type Animal = Model<IAnimal,Record<string,unknown>>
