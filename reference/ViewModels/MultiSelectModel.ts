import { Method } from "axios";

export default class MultiSelectModel {
  dataItems: Array<any> = [];
  dataItemKey?: string | string[] | ((data: Array<any>) => any) = "";
  dataKey: string | ((data: Array<any>) => any) = "";
  optionSourceKey?: string | string[] | ((data: Array<any>) => any) = "";
  optionSourceMethod: Method = "get";
  optionSourceParams: any;
  optionSourceRoute = "";
  valueSourceItemKey?: string | string[] | ((data: Array<any>) => any) = "";
  valueSourceKey?: string | string[] | ((data: Array<any>) => any) = "";
  valueSourceMethod: Method = "get";
  valueSourceParams: any;
  valueSourceRoute = "";
  dataTextField = "";
  dataUpdateRoute = "";
  dataUpdateMethod: Method = "post";
  errorCallback?: (reason: string) => void;
  placeholder = "";
}
