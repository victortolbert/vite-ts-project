import { CollateralItem } from "./Sections/CollateralItem";
import { DamageOverviewSection } from "./Sections/DamageOverviewSection";
import { ReportHeaderSection } from "./Sections/ReportHeaderSection";
import { RoofSummarySection } from "./Sections/RoofSummarySection";
import { RoofComponent } from "./Sections/RoofComponent";
import { StormInfoSection } from "./Sections/StormInfoSection";

export class LadderAssistOther {

  public CollateralSection: Array<CollateralItem> = new Array<CollateralItem>();

  public DamageOverviewSection: DamageOverviewSection = new DamageOverviewSection();

  public RoofComponentsSection: Array<RoofComponent> = new Array<RoofComponent>();

  public ReportHeaderSection: ReportHeaderSection = new ReportHeaderSection();

  public RoofSummarySection: RoofSummarySection = new RoofSummarySection();

  public StormInfoSection: StormInfoSection = new StormInfoSection();

}
