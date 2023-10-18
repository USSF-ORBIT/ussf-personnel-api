import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Rank {
    Title: String
    Abbreviation: String
    Grade: String
    GradeId: String
  }

  type User {
    Rank: Rank
    Grade: String
    DutyTitle: String
    AMU: String
    DOD_ID: String
    ATP31: String
    AFC291_01: String
    AMF: String
    MPF: String
    MajCom: String
    Country: String
    BaseLoc: String
    OrgType: String
    EOPDate: String
    LastName: String
    FirstName: String
    MiddleName: String
    ANB2: String
    CAS3: String
    CMD: String
    OrgKind: String
    UserType: String
    lastModifiedAt: String
  }

  type GuardianDirectoryUser {
    DOD_ID: String
    FirstName: String
    MiddleName: String
    LastName: String
    Email: String
    Rank: Rank
    DutyTitle: String
    BaseLoc: String
    MajCom: String
    OrgType: String
    OrgKind: String
  }

  type Query {
    getEnlistedUser(id: String!): User
    getOfficerUser(id: String!): User
    getUser(id: String!): User
    getGuardianDirectory: [GuardianDirectoryUser]
  }
`;
