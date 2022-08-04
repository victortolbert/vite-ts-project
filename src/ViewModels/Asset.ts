
export class Asset {

  public Id: number = 0;

  public AssetFieldId: number | null = null;

  public AssetTypeId: number = 0;

  public AssetName: string = "";

  public CreatedBy: number = 0;

  public UpdatedBy: number = 0;

  public CreatedByUser: string = "";

  public CreatedOn: string = "";

  public Description: string = "";

  public FileName: string = "";

  public FullPath: string = "";

  public HasMetaData: boolean;

  public ImageHeightPixels: number;

  public ImageWidthPixels: number;

  public Make: string = "";

  public Model: string = "";

  public OriginalFileTypeExtension: string = "";

  public Xresolution: string = "";

  public Yresolution: string = "";

  public SoftwareVersion: string = "";

  public IsDeleted: boolean = false;

  public IsSelected: boolean = false;

  public Order: number = 0;

  public ProjectId: number;

  public PropertyInspectionFormId: number;
}
