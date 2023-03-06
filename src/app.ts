import express, { Request, Response } from "express";
import mongoose from "mongoose";

import { User } from "./dataBase/User.model";
import { IUser } from "./types/user.types";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// enum EToken {
//     accessToken = 'accessToken',
//     refreshToken = 'refreshToken'
// }
//
// EToken.accessToken
app.get("/users", async (req: Request, res: Response) => {
  const users = await User.find();

  res.json(users);
});
// app.get("/welcome", (req: Request, res: Response) => {
//   console.log("WELCOME!!!");
//
//   res.send("HELLO!!!!");
// });
app.get(
  "/users/:userId",
  async (req: Request, res: Response): Promise<Response<IUser>> => {
    const { userId } = req.params;
    const user = await User.findById(userId);

    return res.json(user);
  }
);

app.post("/users", async (req: Request, res: Response) => {
  const body = req.body;
  const user = await User.create({ ...body });

  res.status(201).json({
    massege: "User created",
    data: user,
  });
});

const PORT = 5100;

//postgres port 5432//

app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/Users");
  console.log(`Server has started on Port ${PORT}`);
});
