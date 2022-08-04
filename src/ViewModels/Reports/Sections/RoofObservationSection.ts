import { RoofAccessories } from "./RoofAccessories";

export class RoofObservationSection {

  public BrittlenessTestConducted: boolean | null;

  public BrittlenessTestNorth: boolean | null = false;

  public BrittlenessTestNorthPass: boolean | null = false;

  public BrittlenessTestSouth: boolean | null = false;

  public BrittlenessTestSouthPass: boolean | null = false;

  public BrittlenessTestEast: boolean | null = false;

  public BrittlenessTestEastPass: boolean | null = false;

  public BrittlenessTestWest: boolean | null = false;

  public BrittlenessTestWestPass: boolean | null = false;

  public DownspoutDamage: boolean | null;

  public DripEdge: boolean | null;

  public ElevationDamage: boolean | null;

  public FasciaDamage: boolean | null;

  public FeltDescription: string = "";

  public GutterDamage: boolean | null;

  public HailDamage: boolean | null;

  public HailDamageNorthSf: string = "";

  public HailDamageSouthSf: string = "";

  public HailDamageEastSf: string = "";

  public HailDamageWestSf: string = "";

  public HailTestSize: string = "";

  public IceWaterShield: boolean | null;

  public PitchNorth: string = "";

  public PitchSouth: string = "";

  public PitchEast: string = "";

  public PitchWest: string = "";

  public PriorRepairs: boolean;

  public PriorRepairsNorth: boolean;

  public PriorRepairsSouth: boolean;

  public PriorRepairsEast: boolean;

  public PriorRepairsWest: boolean;

  public RoofAccessories: Array<RoofAccessories> | null;

  public RoofMaterial: string = "";

  public RoofType: string = "";

  public ScreenDamage: boolean | null;

  public SidingDamage: boolean;

  public Stories: number | null;

  public WindDamage: boolean | null;

  public WindDamageNorth: boolean | null;

  public WindDamageSouth: boolean | null;

  public WindDamageEast: boolean | null;

  public WindDamageWest: boolean | null;

  public WindowDamage: boolean | null;

  public WindowScreenDamage: boolean | null;
}
