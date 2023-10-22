import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
   next(error)
  }
};
