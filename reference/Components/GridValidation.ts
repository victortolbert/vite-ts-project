
export class GridValidator  {

    field: string = "";
    validatorCallBack: (data?: any, dataItems?: any) =>GridValidatorResponse;
}


export class GridValidatorResponse {

    isValid: boolean;
    validationMessage: string = "";

    constructor(_isValid: boolean, _validationMessage: string) {
        this.isValid = _isValid;
        this.validationMessage = _validationMessage;
    }
}