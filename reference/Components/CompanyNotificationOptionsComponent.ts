import { Component, Prop, Vue } from "vue-property-decorator";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Grid from "@ExemplarComponents/Grid/GridComponent";
import MultiSelect from "@ExemplarComponents/MultiSelectComponent";
import CompanyNotificationOptionsModel from "../ViewModels/CompanyNotificationOptionsModel";
import CompanyNotificationGridDetail from "./CompanyNotificationGridDetailComponent";
import GridModel from "../../../../Scripts/ViewModels/GridModel";

@Component({
    components: {
        CompanyNotificationGridDetail,
        Grid,
    },
    template: "#company-notification-options-template"
})
export default class CompanyNotificationOptions extends Vue {
    alertClass: string = "";
    alertHeading = "";
    alertIsVisible = false;
    alertMessage = "";
    alertTimeout: NodeJS.Timeout;
    @Prop()
    dataItem: any;
    emailFieldValue: Array<any> = [];
    @Prop(CompanyNotificationOptionsModel)
    model!: CompanyNotificationOptionsModel;

    @Prop(GridModel)
    gridModel!: GridModel;

    emailUpdateSuccess() {
        this.showAlert("Success!", "The email recipients have been added or updated", "alert-success");
    }

    emailUpdateError() {
        this.showAlert("Error!", "The email recipients could not be added or updated", "alert-danger");
    }

    notificationUpdateSuccess() {
        this.showAlert("Success!", "The notification has been added or updated", "alert-success");
    }

    notificationUpdateError() {
        this.showAlert("Error!", "The notification could not be added or updated", "alert-danger");
    }

    hideAlert() {
        clearTimeout(this.alertTimeout);
        this.alertIsVisible = false;
    }

    showAlert(heading: string, message: string, className: string) {
        this.alertClass = className;
        this.alertHeading = heading;
        this.alertMessage = message;
        this.alertIsVisible = true;
        this.alertTimeout = setTimeout(this.hideAlert, 10000);
    }
}
