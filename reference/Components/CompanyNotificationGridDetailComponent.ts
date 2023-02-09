import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Button } from "@progress/kendo-vue-buttons";
import EmailFieldModel from "../ViewModels/EmailFieldModel";
import MultiSelect from "@ExemplarComponents/MultiSelectComponent";
import { IEmail } from "../ViewModels/CompanyNotificationOptionsModel";
import { ApiResponse } from "@ExemplarDataAccess/ApiResponse";

@Component({
    components: {
        KendoButton: Button,
        MultiSelect,
    },
    template: "#company-notification-grid-detail-template",
})
export default class CompanyNotificationGridDetail extends Vue {
    @Prop()
    dataItem!: any;
    @Prop()
    model!: EmailFieldModel;
    value: any = [];

    created() {
        //this.model.valueSourceParams = { NotificationTypeId: this.dataItem.NotificationTypeId };
    }
    saveEmails() {
        const companyId = this.model.companyId;
        const notificationTypeId = this.dataItem.NotificationTypeId;
        const recipientEmails = this.value
            .map((email: IEmail) => email.Email);
        const emailFieldRef = this.$refs.emailField as MultiSelect;
        const params = { companyId, recipientEmails, notificationTypeId };
        emailFieldRef.dataUpdateSource!.request(
            { params },
            (response: ApiResponse) => {
                this.$emit("data-update-success", response);
            },
            (response: ApiResponse) => {
                this.$emit("data-update-error", response);
            }
        );
    }
}