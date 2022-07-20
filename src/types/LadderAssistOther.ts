import {
  CollateralItem, DamageOverviewSection, RoofComponent,
  ReportHeaderSection, RoofSummarySection, StormInfoSection
} from '.'

export interface LadderAssistOther {
  CollateralSection: CollateralItem[]
  DamageOverviewSection: DamageOverviewSection
  RoofComponentsSection: RoofComponent[]
  ReportHeaderSection: ReportHeaderSection
  RoofSummarySection: RoofSummarySection
  StormInfoSection: StormInfoSection
}
