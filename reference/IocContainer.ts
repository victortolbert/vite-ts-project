import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'

// Services
import { AssetDeleteService } from './DeleteServices/AssetDeleteService'
import { FieldTechAvailabilityDeleteService } from './FieldTechAvailabilityDeleteService'
import { IDeleteBatchService } from '@ExemplarScripts/Services/IDeleteBatchService'
import { IDeleteService } from '@ExemplarScripts/Services/IDeleteService'
import { IDeleteService } from '@ExemplarServices/IDeleteService'
import { PifDeleteService } from './DeleteServices/PifDeleteService'

// ViewModels
import { Asset } from './ViewModels/Asset'
import { AvailableServiceType } from '@ExemplarViewModels/AvailableServiceType'
import { ExemplarFeature } from '@ExemplarViewModels/ExemplarFeature'
import { ExemplarFeatureFunction } from '@ExemplarViewModels/ExemplarFeatureFunction'
import { FieldTechAvailability } from './ViewModels/FieldTechAvailability'
import { FieldTechAvailabilityInsert } from './ViewModels/FieldTechAvailabilityInsert'
import { PropertyInspectionForm } from './ViewModels/PropertyInspectionForm'
import { ServiceArea } from '@ExemplarViewModels/ServiceArea'
import { ServiceRegion } from '@ExemplarViewModels/ServiceRegion'

// Validations
import type { IValidator, IValidatorList, IValidatorListAsync } from '@/interfaces'
import { AssetValidator, EditFormValidator, FieldTechAvailabilityValidator, InspectionTimeValidator, PifValidator } from '@/validations'

export class IocContainer {
  private _container!: Container

  get container(): Container {
    return this._container
  }

  public configureIocContainer(): void {
    this._container = new Container({ defaultScope: 'Singleton' })

    // ChangeTracker
    // this._container.bind<IChangeTracker<PropertyInspectionForm>>('IChangeTracker<PropertyInspectionForm>').to(PifChangeTracker)

    this._container.bind<IDeleteBatchService<Array<Asset>>>('IDeleteBatchService<Array<Asset>>').to(AssetDeleteService)
    this._container.bind<IDeleteService<FieldTechAvailability>>('IDeleteService<FieldTechAvailability>').to(FieldTechAvailabilityDeleteService)
    this._container.bind<IDeleteService<PropertyInspectionForm>>('IDeleteService<PropertyInspectionForm>').to(PifDeleteService)
    this._container.bind<IValidator<Asset>>('IValidator<Asset>').to(AssetValidator)
    this._container.bind<IValidator<FieldTechAvailabilityInsert>>('IValidator<FieldTechAvailabilityInsert>').to(FieldTechAvailabilityValidator)
    this._container.bind<IValidator<PropertyInspectionForm>>('IValidator<PropertyInspectionForm>').to(PifValidator)
    this._container.bind<IValidator<String>>('IValidator<String>').to(InspectionTimeValidator)
    this._container.bind<IValidatorList<AvailableServiceType>>('IValidatorList<AvailableServiceType>').to(EditFormValidator)
    this._container.bind<IValidatorList<ServiceArea>>('IValidatorList<ServiceArea>').to(EditFormValidator)
    this._container.bind<IValidatorListAsync<ExemplarFeature>>('IValidatorListAsync<ExemplarFeature>').to(EditFormValidator)
    this._container.bind<IValidatorListAsync<ExemplarFeatureFunction>>('IValidatorListAsync<ExemplarFeatureFunction>').to(EditFormValidator)
    this._container.bind<IValidatorListAsync<ServiceRegion>>('IValidatorListAsync<ServiceRegion>').to(EditFormValidator)
  }
}
const iocContainer = new IocContainer()
iocContainer.configureIocContainer()
const { lazyInject } = getDecorators(iocContainer.container)
export { lazyInject }
