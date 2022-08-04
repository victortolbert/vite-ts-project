export class DamageOverviewSection {
  public BrittlenessTestPerformed: boolean;

  public NorthHailDamageLf: number | null;
  public SouthHailDamageLf: number | null;
  public EastHailDamageLf: number | null;
  public WestHailDamageLf: number | null;

  public NorthWindDamageLf: number | null;
  public SouthWindDamageLf: number | null;
  public EastWindDamageLf: number | null;
  public WestWindDamageLf: number | null;

  public NorthBrittlenessResult: string = "NA";
  public SouthBrittlenessResult: string = "NA";
  public EastBrittlenessResult: string = "NA";
  public WestBrittlenessResult: string = "NA";
}
