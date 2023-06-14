import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";

import { ensureAuthenticated } from "../middlewares/ensuredAuthenticated";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/users/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/:user_id/admin", createUserController.handle);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRoutes };
