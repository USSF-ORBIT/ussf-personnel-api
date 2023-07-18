import { gql } from "graphql-tag";

export const typeDefs = gql`
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
