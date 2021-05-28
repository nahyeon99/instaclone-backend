require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";

const server = new ApolloServer({
  schema,
  context: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIyMTgzNzUzfQ.Wc0lVcaI46Rpv2YVWNL_OFt4lZ52YrSXpDOn0pkZEq0",
  },
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() =>
    console.log(`🎨 Server is running on: http://localhost:${PORT} ✅`)
  );
