import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { Repository, getRepository } from "typeorm";

import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

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
