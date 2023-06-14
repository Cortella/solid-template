import { Response, Request } from "express";
import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createUserUseCase = container.resolve(CreateUserUseCase);
      const { name, email, password, driver_license }: ICreateUserDTO =
        request.body;

      const user = await createUserUseCase.execute({
        name,
        email,
        password,
        driver_license,
      });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };
