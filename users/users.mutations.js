import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error("This username/password is already taken.");
        }

        const uglyPassword = await bcrypt.hash(password, 10);
        return client.user.create({
          data: {
            username,
            email,
            firstName,
            lastName,
            password: uglyPassword,
          },
        });
      } catch (e) {
        return e;
      }

      // save and return the user
    },
  },
};
