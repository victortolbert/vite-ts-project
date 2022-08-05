import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'

export class IocContainer {
  private _container!: Container

  get container(): Container {
    return this._container
  }

  public configureIocContainer(): void {
    this._container = new Container({ defaultScope: 'Singleton' })
  }
}
const iocContainer = new IocContainer()
iocContainer.configureIocContainer()

const { lazyInject } = getDecorators(iocContainer.container)

export { lazyInject }
