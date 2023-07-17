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
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

await startStandaloneServer(server, { listen: 4000 });
