import ExcelJS from "exceljs";
import { enlistedUserColumns, officerUserColumns } from "./constants.js";

export const resolvers = {
  Query: {
    getEnlistedUser: async (_, { id }) => {
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile("./enlinv202304_Yu_v2.xlsx");
      const worksheet = workbook.getWorksheet("Enlinv 202304");
      const foundUserRow = worksheet
        .getColumn(enlistedUserColumns.DOD_ID)
        .values.indexOf(id);
      if (foundUserRow) {
        return {
          Grade: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.Grade)
            .value.toString(),
          DUTYTITLE: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.DUTYTITLE)
            .value.toString(),
          AMU: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.AMU)
            .value.toString(),
          DOD_ID: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.DOD_ID)
            .value.toString(),
          ATP31: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.ATP31)
            .value.toString(),
          AFC291_01: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.AFC291_01)
            .value.toString(),
          AMF: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.AMF)
            .value.toString(),
          MPF: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.MPF)
            .value.toString(),
          MAJCOM: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.MAJCOM)
            .value.toString(),
          Country: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.Country)
            .value.toString(),
          BASE_LOC: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.BASE_LOC)
            .value.toString(),
          Org_type: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.Org_type)
            .value.toString(),
          EOPDate: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.EOPDate)
            .value.toString(),
          Last_Name: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.Last_Name)
            .value.toString(),
          First_name: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.First_name)
            .value.toString(),
          Middle_Name: worksheet
            .getRow(foundUserRow)
            .getCell(enlistedUserColumns.Middle_Name)
            .value.toString(),
        };
      }
      return null;
    },
    getOfficerUser: async (_, { id }) => {
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile("./offinv202304_Yu_v2.xlsx");
      const worksheet = workbook.getWorksheet("Offinv 202304");
      const foundUserRow = worksheet
        .getColumn(officerUserColumns.DOD_ID)
        .values.indexOf(id);
      if (foundUserRow) {
        return {
          ANB2: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.ANB2)
            .value.toString(),
          DOD_ID: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.DOD_ID)
            .value.toString(),
          ATP31: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.ATP31)
            .value.toString(),
          CAS3: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.CAS3)
            .value.toString(),
          AMF: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.AMF)
            .value.toString(),
          Grade: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.Grade)
            .value.toString(),
          DUTYTITLE: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.DUTYTITLE)
            .value.toString(),
          MPF: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.MPF)
            .value.toString(),
          CMD: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.CMD)
            .value.toString(),
          MAJCOM: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.MAJCOM)
            .value.toString(),
          Country: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.Country)
            .value.toString(),
          BASE_LOC: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.BASE_LOC)
            .value.toString(),
          org_kind: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.org_kind)
            .value.toString(),
          EOPDate: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.EOPDate)
            .value.toString(),
          Last_Name: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.Last_Name)
            .value.toString(),
          First_name: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.First_name)
            .value.toString(),
          Middle_Name: worksheet
            .getRow(foundUserRow)
            .getCell(officerUserColumns.Middle_Name)
            .value.toString(),
        };
      }
      return null;
    },
  },
};
