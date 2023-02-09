import "reflect-metadata";
import { Container } from "inversify";

// Validator
import { IValidator } from "@ExemplarInterfaces/IValidator";
import { RouteInspectionValidator } from "./Validation/RouteInspectionValidator";

// Models
import { Route } from "./ViewModels/Route";

import getDecorators from "inversify-inject-decorators";

export class TechnicianIocContainer {

  private _container!: Container;

  get container(): Container {
    return this._container;
  }

  public configureIocContainer(): void {
    this._container = new Container({ defaultScope: "Singleton" });
    //this._container.bind<IChangeTracker<RouteInspections>>("IChangeTracker<RouteInspections>").to(RouteInspectionsChangeChecker);
    this._container.bind<IValidator<Route>>("IValidator<Route>").to(RouteInspectionValidator);

  }
}

const iocContainer = new TechnicianIocContainer();
iocContainer.configureIocContainer();
const { lazyInject } = getDecorators(iocContainer.container);
export { lazyInject };
