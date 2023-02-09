export class AvailableDates {
  public FieldTechId: number = 0;
  public StartDate: Date;
  public EndDate: Date;
  public ServiceAreaId: number = 0;
  public IsAvailable: boolean = false;

  constructor(_fieldTechId: number, _startDate: string, _endDate: string, _serviceAreaId: number, _isAvailable: boolean) {
    this.FieldTechId = _fieldTechId;
    this.StartDate = new Date(_startDate);
    this.EndDate = new Date(_endDate);
    this.ServiceAreaId = _serviceAreaId;
    this.IsAvailable = _isAvailable;
  }
}
