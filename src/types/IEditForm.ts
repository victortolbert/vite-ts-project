import { IEditable } from '.'
import { ApiDefaultRoute } from '@/routes'

export interface IEditForm {
  InitializeForm(model: IEditable): void
  editMode: boolean
  editRoute: ApiDefaultRoute
  isInsert: boolean
  //ShowEditForm(id: number, callback: any): void
  validationPassed: boolean
}
