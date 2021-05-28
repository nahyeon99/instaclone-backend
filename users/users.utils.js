import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  if (!token) {
    return null;
  }
  const { id } = await jwt.verify(token, process.env.SECRET_KEY);
  const user = await client.user.findUnique({ where: { id } });
  try {
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
