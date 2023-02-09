import type { ApiDefaultRoute } from '@ExemplarRoutes/ApiDefaultRoute'
import type { IEditable } from '../Interfaces/IEditable'
export interface IEditForm {

  InitializeForm(model: IEditable): void
  editMode: boolean
  editRoute: ApiDefaultRoute | null
  isInsert: boolean
  // ShowEditForm(id: number, callback: any): void
  validationPassed: boolean
}
