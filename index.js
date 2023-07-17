import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";
import ExcelJS from "exceljs";

const enlistedUserColumns = {
  Grade: 4,
  DUTYTITLE: 8,
  AMU: 9,
  DOD_ID: 10,
  ATP31: 11,
  AFC291_01: 12,
  AMF: 13,
  MPF: 20,
  MAJCOM: 22,
  Country: 23,
  BASE_LOC: 24,
  Org_type: 25,
  EOPDate: 30,
  Last_Name: 32,
  First_name: 33,
  Middle_Name: 34,
};

const officerUserColumns = {
  ANB2: 6,
  DOD_ID: 7,
  ATP31: 8,
  CAS3: 9,
  AMF: 12,
  Grade: 13,
  DUTYTITLE: 16,
  MPF: 21,
  CMD: 23,
  MAJCOM: 24,
  Country: 25,
  BASE_LOC: 26,
  org_kind: 27,
  EOPDate: 31,
  Last_Name: 34,
  First_name: 35,
  Middle_Name: 36,
};

const typeDefs = gql`
  type EnlistedUser {
    Grade: String
    DUTYTITLE: String
    AMU: String
    DOD_ID: String
    ATP31: String
    AFC291_01: String
    AMF: String
    MPF: String
    MAJCOM: String
    Country: String
    BASE_LOC: String
    Org_type: String
    EOPDate: String
    Last_Name: String
    First_name: String
    Middle_Name: String
  }

  type Query {
    getEnlistedUser(id: String!): EnlistedUser
  }

  type OfficerUser {
    ANB2: String
    DOD_ID: String
    ATP31: String
    CAS3: String
    AMF: String
    Grade: String
    DUTYTITLE: String
    MPF: String
    CMD: String
    MAJCOM: String
    Country: String
    BASE_LOC: String
    org_kind: String
    EOPDate: String
    Last_Name: String
    First_name: String
    Middle_Name: String
  }

  type Query {
    getOfficerUser(id: String!): OfficerUser
  }
`;

const resolvers = {
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

const server = new ApolloServer({ typeDefs, resolvers });

await startStandaloneServer(server, { listen: 4000 });
