export class DropdownListValues {

  public text: string = "";
  public value: string = "";

  constructor(text: string, value: string) {
    this.text = text;
    this.value = value;
  }
}

export class DropdownListValuesNumber {

  public text: string = "";
  public value: number | null = null;

  constructor(text: string, value: number) {
    this.text = text;
    this.value = value;
  }
}
