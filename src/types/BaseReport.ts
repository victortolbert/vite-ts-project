import {
  CollateralItem, InteriorItem,
  NonStormDamageItem, RoofComponent
} from '.'

export interface BaseReport {
  AdditionalSummary: string
  OutBuildingDamage: string
  OutBuildingNotes: string
  CollateralItems: CollateralItem[]
  InteriorItems: InteriorItem[]
  NonStormDamageItems: NonStormDamageItem[]
  RoofComponents: RoofComponent[]
}
