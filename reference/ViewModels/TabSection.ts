export class TabSection {

  public constructor(_tabName: string, _isActive: boolean, _hasData: boolean, _setDataCallBack: ((data: any) => void));

  public constructor(_tabName: string, _isActive: boolean, _hasData: boolean);

  public constructor(...args: any[]) {

    this.tabName = args[0];
    this.isActive = args[1];
    this.hasData = args[2];

    if (args.length == 4)
      this.setDataCallBack = args[3];

  }

  public tabName: string = '';
  public isActive: boolean = false;
  public hasData: boolean = false;
  public setDataCallBack?: (data?: any) => void;
}
