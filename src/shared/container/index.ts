import { container } from "tsyringe";

import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { UsersTokensRepository } from "@modules/users/infra/typeorm/repositories/UsersTokensRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/users/repositories/IUsersTokensrepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);
