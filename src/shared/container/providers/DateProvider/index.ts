import { container } from "tsyringe";

import { IDateProvider } from "./IDateProvider";
import { DateProvider } from "./implementations/Dateprovider";

container.registerSingleton<IDateProvider>("DateProvider", DateProvider);
