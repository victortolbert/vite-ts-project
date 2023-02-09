import { DataResult } from "@progress/kendo-data-query";

const CustomerEmailAccountModel = {
  pageable: false,
  gridData: [] as any | DataResult,
  skip: 0,
  take: 10,
  total: 100,
  updatedData: [] as any,
  baseURL: "https://localhost:44311/api",
  //errorMessageGridLoad: "Error during getting the grid data",
  //errorMessageGridUpdate: "Error during updating the grid data",
  //successMessageGridUpdate: "Success! The email insert/update has been successful",
  gridfield1: "Email",
  gridtitle1: "Account",
  gridfield2: "Description",
  gridtitle2: "Description",
  gridfield3: "is Active",
}

export default CustomerEmailAccountModel;
