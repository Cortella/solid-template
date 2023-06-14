import { Repository, getRepository } from "typeorm";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id,
    name,
    email,
    driver_license,
    password,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      email,
      driver_license,
      password,
      avatar,
    });
    await this.repository.save(user);
  }

  async findById(id: string): Promise<User> {
    const user = this.repository.findOne({ id });
    if (!user) {
      throw new AppError("User not found! ");
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({ email });

    return user;
  }
}

export { UsersRepository };
