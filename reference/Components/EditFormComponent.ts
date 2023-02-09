import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { BModal, BButton } from 'bootstrap-vue'
import { isEqual, cloneDeep } from "lodash";
import { IValidatorList } from "@ExemplarInterfaces/IValidatorList";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import DataAccess from "@ExemplarCommon/DataAccess";

@Component({
    template: "#edit-form-template",
    components: {
        BModal, BButton
    }
})
export default class EditFormComponent<T> extends Vue {
    @Prop({ required: false, type: Object })
    model!: any;

    @Prop({ required: true, type: String })
    title!: string;

    @Prop({ required: true, type: Function  })
    successCallback!: any;

    @Prop({ required: false, type: Function })
    preSaveCall!: any;

    @Prop({ required: true, type: String })
    endPoint!: string;

    @Prop({ required: true, type: Object })
    modelValidator!: IValidatorList<T>;

    @Prop({ required: true, type: Boolean, default: false })
    isInsert!: boolean;

    @Prop({ required: false, type: Boolean, default: true })
    showButtons!: boolean;

    @Prop({ required: false, type: Boolean, default: false })
    isPreSaveCallSuccess!: boolean;

    @Prop({ required: true, type: String })
    accessToken!: string;

    @Prop({ required: true, type: String })
    exemplarApiUrl!: string;

    @Prop({ required: true, type: Number })
    userId!: number;

    @Prop({ required: false, type: Array })
    additionalValidationMessages!: Array<string>;

    dataAccess: DataAccess = new DataAccess(this.accessToken);

    originalModel!: any;

    validationResult: Array<string> = new Array<string>();

    busy: boolean = false;

    confirmModal = {
        open: false,
        promptText: "",
        title: ""
    };

    @Watch("model", { deep: true })
    private SetOriginalModel() {
        this.originalModel = this.originalModel ?? cloneDeep(this.model);
    }

    @Watch("additionalValidationMessages", {deep: true})
    private SetValidationMessages() {
        if (this.additionalValidationMessages.length > 0) {
            this.validationResult = this.additionalValidationMessages;
        }
    }


    Cancel() {
        if (this.HasChanges()) {
            this.confirmModal.title = "Confirm Cancel";
            this.confirmModal.promptText = "You have uncommitted changes. Are you sure you wish to Cancel?"
            this.confirmModal.open = true;
            return;
        }
        this.originalModel = null;
        this.validationResult = [];
        GlobalEventBus.$emit(GlobalEvents.CloseEditForm); 
    }

    onHide() {
        this.confirmModal.open = false;
        this.originalModel = null;
    }

    onConfirmClicked() {
        this.validationResult = [];
        GlobalEventBus.$emit(GlobalEvents.CloseEditForm);
    }

    validate(): boolean {

        if(this.validationResult === undefined)
            this.validationResult = this.modelValidator.Validate(this.model);

        if (this.validationResult.length > 0) {
            console.log(" Model Failed validation....");
            GlobalEventBus.$emit(GlobalEvents.Validated, false); 
            return false;
        } else {
            console.log(" Model Passed validation....");
            this.validationResult = [];
            return true;
        }
    }

    SortString(text: string): string {
        return text.split('').sort().join('');
    }

    HasChanges(): boolean {
        console.log("originalModel: " + JSON.stringify(this.originalModel));
        
        if (this.isInsert==false) {
            if (isEqual(this.model, this.originalModel)) {
                return false;
            } else {
                return true;
            }
        }
        return true;
    }

    ErrorCallback(model: any) {
        if (model.result === 2) {
            this.validationResult = model.resultText.split(",");
            GlobalEventBus.$emit(GlobalEvents.Validated, false);
        }
        this.busy = false;
    }

    SaveCallback() {
        this.busy = false;
        GlobalEventBus.$emit(GlobalEvents.CloseEditForm);
        this.onHide();
        this.successCallback();
    }

    async CheckValidatorType() {
        try {
            await Promise.resolve(this.modelValidator.Validate(this.model)).then((value) => {
                this.validationResult = value;
            });
        }
        catch (error) {
            console.log(error);
        }

    }

    async Save() {
        this.validationResult = [];

        console.log("Checking for changes...")
        if (!this.HasChanges()) {
            ToastrHelper.DisplayToastWarning("No Changes have been made.");
            return;
        }

        console.log("Validating...")
        await this.CheckValidatorType();
        if (this.validate() == false) {
            return;
        }

        console.log("preSaveCall...")
        if (this.preSaveCall != null) {
            await this.preSaveCall();

            if (this.isPreSaveCallSuccess == false) {
                return;
            }
        }

        this.busy = true;
       
        if (this.isInsert) {
            console.log("Posting Data....")
            this.dataAccess.PostAsync(`${this.endPoint}`, this.model, this.SaveCallback, this.ErrorCallback);
        } else {
            console.log("Updating Data....")
            this.dataAccess.PutAsync(`${this.endPoint}/${this.model.Id}?updatedBy=${this.userId}`, this.model, this.SaveCallback, this.ErrorCallback);
        }
    }
}

