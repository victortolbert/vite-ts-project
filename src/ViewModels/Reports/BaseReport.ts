import { CollateralItem } from "./Sections/CollateralItem";
import { DamageOverviewSection } from "./Sections/DamageOverviewSection";
import { ReportHeaderSection } from "./Sections/ReportHeaderSection";
import { InteriorItem } from "./Sections/InteriorItem";
import { RoofSummarySection } from "./Sections/RoofSummarySection";
import { RoofComponent } from "./Sections/RoofComponent";
import { RoofObservationSection } from "./Sections/RoofObservationSection";
import { StormInfoSection } from "./Sections/StormInfoSection";
import { NonStormDamageItem } from "./Sections/NonStormDamageItem";


export class BaseReport {

  public AdditionalSummary: string = "";

  public CollateralItems: Array<CollateralItem> = new Array<CollateralItem>();

  public DamageOverviewSection: DamageOverviewSection = new DamageOverviewSection();

  public InteriorItems: Array<InteriorItem> = new Array<InteriorItem>();

  public NonStormDamageItems: Array<NonStormDamageItem> = new Array<NonStormDamageItem>();

  public ReportHeaderSection: ReportHeaderSection = new ReportHeaderSection();

  public RoofComponents: Array<RoofComponent> = new Array<RoofComponent>();

  public RoofObservationSection: RoofObservationSection = new RoofObservationSection();

  public RoofSummarySection: RoofSummarySection = new RoofSummarySection();

  public StormInfoSection: StormInfoSection = new StormInfoSection();

}
