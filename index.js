import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./src/resolvers.js";
import { typeDefs } from "./src/schema.js";

const server = new ApolloServer({ typeDefs, resolvers });

await startStandaloneServer(server, { listen: 4000 });
