import { getCollections } from "../connectToDb"
import { TableModel, TableInterface } from "../models/tablesModel"

export const getTables = async (): Promise<TableInterface[]> => {
    try {
        const tables = await TableModel.find()
        return tables
      } catch (error) {
        console.log(error);
        const databaseError: any = new Error(
          "Error fetching the data."
        );
        databaseError.status = 404
        throw databaseError
      }   
}
