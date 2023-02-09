export default class ReportService {

  public ReturnBrittlenessTestResults(tested: boolean | null, result: string): string {

    var result: string = "N/A"

    if (tested != null && tested) {

      switch (result) {
        case "":
          result = "N/A"
          break;
        case "Yes":
          result = "Pass"
          break;
        case "No":
          result = "Failed"
          break;
      }
    }

    return result;
  }

  public Total(northValue: number, southValue: number, eastValue: number, westValue: number): number {

    return northValue + southValue + eastValue + westValue;

  }

  public Total2(northValue: number, southValue: number, eastValue: number, westValue: number): number {

    return northValue + southValue + eastValue + westValue;

  }
}
