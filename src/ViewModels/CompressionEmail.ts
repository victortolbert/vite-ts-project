export class CompressionEmail {
  public ProjectNumber: string;
  public Carrier: string;
  public FileSizeRestriction: number;
  public FileSizeRestrictionBytes: number;
  public PhotoFormSize: number;
  public PhotoFormSizeBytes: number;

  constructor(projectNumber: string, carrier: string, fileSizeRestriction: number, fileSizeRestrictionBytes: number, photoFormSize: number, photoFormSizeBytes: number) {
    this.ProjectNumber = projectNumber;
    this.Carrier = carrier;
    this.FileSizeRestriction = fileSizeRestriction;
    this.FileSizeRestrictionBytes = fileSizeRestrictionBytes;
    this.PhotoFormSize = photoFormSize;
    this.PhotoFormSizeBytes = photoFormSizeBytes;
  }
}
