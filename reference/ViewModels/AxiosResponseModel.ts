import { ResponseType } from "@ExemplarEnums/ResponseType";

export class AxiosResponse {
  public result: ResponseType;
  public resultText: string;
  public model: any;

  public constructor(result: ResponseType, resultText: string, model: any) {
    this.result = result;
    this.resultText = resultText;
    this.model = model;
  }
}
