import { Component, Prop, Watch } from "vue-property-decorator";
import { BModal, BButton } from 'bootstrap-vue'
import { isEqual } from "lodash";
import { IValidator } from "@ExemplarInterfaces/IValidator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { PageBase } from "@ExemplarCommon/PageBase";
@Component({
    template: "#edit-modal-template",
    components: {
        BModal, BButton
    }
})
export default class EditModalComponent<T> extends PageBase<T> {
    @Prop({ required: true, type: Boolean })
    displayModal!: boolean;

    @Prop({ required: false, type: Object })
    model!: any;

    @Prop({ required: true, type: String })
    title!: string;

    @Prop({ required: true, type: Function  })
    successCallback!: any;

    @Prop({ required: true, type: String })
    route!: string;

    @Prop({ required: true, type: Object })
    modelValidator!: IValidator<T>;

    @Prop({ required: true, type: Boolean })
    isInsert!: boolean;

    accessToken: string = <string>$("#accessToken").val();

    exemplarApiUrl: string = <string>$("#exemplarApiUrl").val();

    editModal = {
        cloneModel : "",
        originalModel: "",
        open:  false,
        validator: "",
        showingItems: false,
        busy: false,
        showUnsavedChangesWarning: false,
        noCloseOnBackdrop: true,
        noCloseOnEsc: true,
        disableSaveButton: true,
        successCallback: "",
        errorCallback: "",
        isEdit: false,
    };
  
    @Watch("displayModal")
    showModal(model: any, isEdit: boolean = false) {
        this.editModal.open = this.displayModal;
    }

    cancel() {
        this.editModal.validator = "";
        this.editModal.open = false;
        GlobalEventBus.$emit(GlobalEvents.CloseEditModal); 
    }

    onHide() {
        this.editModal.validator = "";
        this.editModal.open = false;
        GlobalEventBus.$emit(GlobalEvents.CloseEditModal); 
    }

    hide() {
        this.editModal.validator = "";
        this.editModal.open = false;
        GlobalEventBus.$emit(GlobalEvents.CloseEditModal); 
    }

   
    confirmed() {
        this.editModal.open = false;
    }

    validate(): boolean {
        const message = this.modelValidator.Validate(this.model);
        if (message.length > 0) {
            console.log(" Model Failed validation....");
            this.editModal.validator = message;
            return false;
        } else {
            console.log(" Model Passed validation....");
            this.editModal.validator = "";
            return true;
        }
    }

    sortString(text: string): string {
        return text.split('').sort().join('');
    }

    hasChanges(currentModel: any, showValidator: boolean = false): boolean {
        if (isEqual(this.sortString(JSON.stringify(currentModel)), this.sortString(JSON.stringify(this.editModal.originalModel)))) {
            if (showValidator) {
                this.editModal.validator = "No changes have been detected.";
            }
            return false;
        } else {
            return true;
        }
    }

    InsertErrorCallback() {
        this.onHide();
    }

    async Save() {
         this.editModal.validator = "";

        if (this.validate() == false) {
            return;
        }

        this.editModal.busy = true;

        if (this.isInsert) {
            this.Insert(this.route, this.model, this.successCallback, this.InsertErrorCallback, "Record Created!");
        } else {
            this.Update(this.route, this.model, this.successCallback, this.InsertErrorCallback, "Record Updated!");
        }
       
        this.editModal.busy = false;
        this.onHide();
    }
}

