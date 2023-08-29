import { enlistedUserColumns, officerUserColumns } from "./constants.js";
import { getEnlistedWorksheet, getOfficerWorksheet } from "./helpers.js";

export const resolvers = {
  Query: {
    getEnlistedUser: async (_: any, { id }: { id: string }) => {
      const { worksheet, lastModifiedAt: lastMod } =
        await getEnlistedWorksheet();

      let worksheetValues = worksheet.getColumn(
        enlistedUserColumns.DOD_ID
      ).values;

      worksheetValues = worksheetValues.map((value) => {
        return value?.toString().trim();
      });

      // Find the index of the DOD_ID we're looking for in the DOD_ID column
      const foundUserRow = worksheetValues.indexOf(id);
      const foundUser = worksheet.getRow(foundUserRow);

      if (foundUserRow !== -1 && foundUser) {
        return {
          Grade: foundUser.getCell(enlistedUserColumns.Grade).value,
          DUTYTITLE: foundUser.getCell(enlistedUserColumns.DUTYTITLE).value,
          AMU: foundUser.getCell(enlistedUserColumns.AMU).value,
          DOD_ID: foundUser.getCell(enlistedUserColumns.DOD_ID).value,
          ATP31: foundUser.getCell(enlistedUserColumns.ATP31).value,
          AFC291_01: foundUser.getCell(enlistedUserColumns.AFC291_01).value,
          AMF: foundUser.getCell(enlistedUserColumns.AMF).value,
          MPF: foundUser.getCell(enlistedUserColumns.MPF).value,
          MAJCOM: foundUser.getCell(enlistedUserColumns.MAJCOM).value,
          Country: foundUser.getCell(enlistedUserColumns.Country).value,
          BASE_LOC: foundUser.getCell(enlistedUserColumns.BASE_LOC).value,
          Org_type: foundUser.getCell(enlistedUserColumns.Org_type).value,
          EOPDate: foundUser.getCell(enlistedUserColumns.EOPDate).value,
          Last_Name: foundUser.getCell(enlistedUserColumns.Last_Name).value,
          First_name: foundUser.getCell(enlistedUserColumns.First_name).value,
          Middle_Name: foundUser.getCell(enlistedUserColumns.Middle_Name).value,
          userType: "Enlisted",
          lastModifiedAt: lastMod.toString(),
        };
      }
      return null;
    },
    getOfficerUser: async (_: any, { id }: { id: string }) => {
      const { worksheet, lastModifiedAt: lastMod } =
        await getOfficerWorksheet();

      let officerWorksheetValues = worksheet.getColumn(
        officerUserColumns.DOD_ID
      ).values;

      officerWorksheetValues = officerWorksheetValues.map((value) => {
        return value?.toString().trim();
      });

      // Find the index of the DOD_ID we're looking for in the DOD_ID column
      const foundUserRow = officerWorksheetValues.indexOf(id);
      const foundUser = worksheet.getRow(foundUserRow);

      if (foundUserRow !== -1 && foundUser) {
        return {
          ANB2: foundUser.getCell(officerUserColumns.ANB2).value,
          DOD_ID: foundUser.getCell(officerUserColumns.DOD_ID).value,
          ATP31: foundUser.getCell(officerUserColumns.ATP31).value,
          CAS3: foundUser.getCell(officerUserColumns.CAS3).value,
          AMF: foundUser.getCell(officerUserColumns.AMF).value,
          Grade: foundUser.getCell(officerUserColumns.Grade).value,
          DUTYTITLE: foundUser.getCell(officerUserColumns.DUTYTITLE).value,
          MPF: foundUser.getCell(officerUserColumns.MPF).value,
          CMD: foundUser.getCell(officerUserColumns.CMD).value,
          MAJCOM: foundUser.getCell(officerUserColumns.MAJCOM).value,
          Country: foundUser.getCell(officerUserColumns.Country).value,
          BASE_LOC: foundUser.getCell(officerUserColumns.BASE_LOC).value,
          org_kind: foundUser.getCell(officerUserColumns.org_kind).value,
          EOPDate: foundUser.getCell(officerUserColumns.EOPDate).value,
          Last_Name: foundUser.getCell(officerUserColumns.Last_Name).value,
          First_name: foundUser.getCell(officerUserColumns.First_name).value,
          Middle_Name: foundUser.getCell(officerUserColumns.Middle_Name).value,
          userType: "Officer",
          lastModifiedAt: lastMod.toString(),
        };
      }
      return null;
    },
    getUser: async (_: any, { id }: { id: string }) => {
      // First check officer list
      const { worksheet: officerWorksheet, lastModifiedAt: officerLastMod } =
        await getOfficerWorksheet();

      let worksheetValues = officerWorksheet.getColumn(
        officerUserColumns.DOD_ID
      ).values;

      worksheetValues = worksheetValues.map((value) => {
        return value?.toString().trim();
      });

      // Find the index of the DOD_ID we're looking for in the DOD_ID column
      const foundOfficerUserRow = worksheetValues.indexOf(id);
      const foundOfficerUser = officerWorksheet.getRow(foundOfficerUserRow);

      if (foundOfficerUserRow !== -1 && foundOfficerUser) {
        return {
          ANB2: foundOfficerUser.getCell(officerUserColumns.ANB2).value,
          DOD_ID: foundOfficerUser.getCell(officerUserColumns.DOD_ID).value,
          ATP31: foundOfficerUser.getCell(officerUserColumns.ATP31).value,
          CAS3: foundOfficerUser.getCell(officerUserColumns.CAS3).value,
          AMF: foundOfficerUser.getCell(officerUserColumns.AMF).value,
          Grade: foundOfficerUser.getCell(officerUserColumns.Grade).value,
          DUTYTITLE: foundOfficerUser.getCell(officerUserColumns.DUTYTITLE)
            .value,
          MPF: foundOfficerUser.getCell(officerUserColumns.MPF).value,
          CMD: foundOfficerUser.getCell(officerUserColumns.CMD).value,
          MAJCOM: foundOfficerUser.getCell(officerUserColumns.MAJCOM).value,
          Country: foundOfficerUser.getCell(officerUserColumns.Country).value,
          BASE_LOC: foundOfficerUser.getCell(officerUserColumns.BASE_LOC).value,
          org_kind: foundOfficerUser.getCell(officerUserColumns.org_kind).value,
          EOPDate: foundOfficerUser.getCell(officerUserColumns.EOPDate).value,
          Last_Name: foundOfficerUser.getCell(officerUserColumns.Last_Name)
            .value,
          First_name: foundOfficerUser.getCell(officerUserColumns.First_name)
            .value,
          Middle_Name: foundOfficerUser.getCell(officerUserColumns.Middle_Name)
            .value,
          userType: "Officer",
          lastModifiedAt: officerLastMod.toString(),
        };
      }
      // If not found in officer list, check enlisted list
      const { worksheet: enlistedWorksheet, lastModifiedAt: enlistedLastMod } =
        await getEnlistedWorksheet();

      let enlistedWorksheetValues = enlistedWorksheet.getColumn(
        enlistedUserColumns.DOD_ID
      ).values;

      enlistedWorksheetValues = enlistedWorksheetValues.map((value) => {
        return value?.toString().trim();
      });

      // Find the index of the DOD_ID we're looking for in the DOD_ID column
      const foundEnlistedUserRow = enlistedWorksheetValues.indexOf(id);
      const foundEnlistedUser = enlistedWorksheet.getRow(foundEnlistedUserRow);

      if (foundEnlistedUserRow !== -1 && foundEnlistedUser) {
        return {
          Grade: foundEnlistedUser.getCell(enlistedUserColumns.Grade).value,
          DUTYTITLE: foundEnlistedUser.getCell(enlistedUserColumns.DUTYTITLE)
            .value,
          AMU: foundEnlistedUser.getCell(enlistedUserColumns.AMU).value,
          DOD_ID: foundEnlistedUser.getCell(enlistedUserColumns.DOD_ID).value,
          ATP31: foundEnlistedUser.getCell(enlistedUserColumns.ATP31).value,
          AFC291_01: foundEnlistedUser.getCell(enlistedUserColumns.AFC291_01)
            .value,
          AMF: foundEnlistedUser.getCell(enlistedUserColumns.AMF).value,
          MPF: foundEnlistedUser.getCell(enlistedUserColumns.MPF).value,
          MAJCOM: foundEnlistedUser.getCell(enlistedUserColumns.MAJCOM).value,
          Country: foundEnlistedUser.getCell(enlistedUserColumns.Country).value,
          BASE_LOC: foundEnlistedUser.getCell(enlistedUserColumns.BASE_LOC)
            .value,
          Org_type: foundEnlistedUser.getCell(enlistedUserColumns.Org_type)
            .value,
          EOPDate: foundEnlistedUser.getCell(enlistedUserColumns.EOPDate).value,
          Last_Name: foundEnlistedUser.getCell(enlistedUserColumns.Last_Name)
            .value,
          First_name: foundEnlistedUser.getCell(enlistedUserColumns.First_name)
            .value,
          Middle_Name: foundEnlistedUser.getCell(
            enlistedUserColumns.Middle_Name
          ).value,
          userType: "Enlisted",
          lastModifiedAt: enlistedLastMod.toString(),
        };
      }

      // If not found in either list, return null
      return null;
    },
  },
};
