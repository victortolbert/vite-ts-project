import { ReportType } from '.'

export interface DamageOverviewSection {
  BrittlenessTestPerformed: string
  LeftBrittlenessResult: string
  LeftHailDamageLf: string
  LeftWindDamageLf: string
  LeftDamageDirection: string
  FrontBrittlenessResult: string
  FrontHailDamageLf: string
  FrontWindDamageLf: string
  FrontDamageDirection: string
  ReportType: ReportType
  BackBrittlenessResult: string
  BackHailDamageLf: string
  BackWindDamageLf: string
  BackDamageDirection: string
  RightBrittlenessResult: string
  RightHailDamageLf: string
  RightWindDamageLf: string
  RightDamageDirection: string
  StormDamageType: string
  StormDamageTypeOther: string
  FrontOtherDamageLf: string
  BackOtherDamageLf: string
  RightOtherDamageLf: string
  LeftOtherDamageLf: string
}
