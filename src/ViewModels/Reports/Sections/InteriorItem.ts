export class InteriorItem {

  public Location: string = "";

  public Size: number = 0;

  public Description: string = "";

  constructor(location: string, size: number, description: string) {
    this.Location = location;
    this.Size = size;
    this.Description = description;
  }
}
