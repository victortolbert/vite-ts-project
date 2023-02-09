import InspectionDetailsComponent from "./../Components/InspectionDetailsComponent";
export class DivMapperModel {
  public startTime: string = "";
  public slotPosition: number = 0;
  public inspectionDetailsComponent: InspectionDetailsComponent = null as any;

  constructor(_startTime: string, _slotPosition: number, _inspectionDetailsComponent: InspectionDetailsComponent) {
    this.startTime = _startTime;
    this.slotPosition = _slotPosition;
    this.inspectionDetailsComponent = _inspectionDetailsComponent;
  }
}
