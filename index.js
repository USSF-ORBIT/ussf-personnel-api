import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

await startStandaloneServer(server, { listen: 4000 });
