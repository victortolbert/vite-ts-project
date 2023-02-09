export class TreeViewValues {

  public id: number;
  public text: string = "";
  public spriteCssClass: string = "";
  public checked: boolean = false;
  public expanded: boolean = false;
  public items: Array<TreeViewValues> = [];
  public description: string = "";
}
