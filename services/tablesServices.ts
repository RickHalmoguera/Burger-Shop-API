import { TableModel, TableInterface } from "../models/tablesModel"

export const getTables = async (): Promise<TableInterface[]> => {
    try {
        return await TableModel.find();
      } catch (error) {
        console.log(error);
        const databaseError: any = new Error(
          "Error fetching the data."
        );
        databaseError.status = 404;
        throw databaseError;
      }    
}
