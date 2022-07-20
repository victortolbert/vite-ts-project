import { ReportType, RoofAccessories } from '.'

export interface RoofObservationSection {
  BrittlenessTestConducted: string
  BrittlenessTestFrontPass: string
  BrittlenessTestBackPass: string
  BrittlenessTestLeft: string
  BrittlenessTestLeftPass: string
  BrittlenessTestRightPass: string
  DownspoutDamage: string
  DripEdge: string
  ElevationDamage: string
  FasciaDamage: string
  FeltDescription: string
  GutterDamage: string
  HailDamage: string
  HailDamageFront: string
  HailDamageLeft: string
  HailDamageBack: string
  HailDamageRight: string
  HailTestSize: string
  IceWaterShield: string
  PitchFront: string
  PitchBack: string
  PitchLeft: string
  PitchRight: string
  PriorRepairs: string
  PriorRepairsFront: string
  PriorRepairsBack: string
  PriorRepairsLeft: string
  PriorRepairsRight: string
  RoofAccessories: RoofAccessories
  ReportType: ReportType
  RoofMaterial: string
  RoofType: string
  ScreenDamage: string
  SidingDamage: string
  Stories: string
  WindDamage: string
  WindDamageRight: string
  WindDamageBack: string
  WindDamageLeft: string
  WindDamageFront: string
  WindowDamage: string
  WindowScreenDamage: string
}
