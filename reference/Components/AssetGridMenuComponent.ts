import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator";
import { forEach, find, findIndex, sortBy } from "lodash";
import { lazyInject } from "../../IocContainer";
import { PifEvents, EventBus } from "./../../Events";
import { IValidator } from "@ExemplarInterfaces/IValidator";
import { BModal, BButton, BAlert } from 'bootstrap-vue'

// ViewModels
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import { PropertyInspectionForm } from "../../ViewModels/PropertyInspectionForm";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { EditModal } from "@ExemplarScripts/Modals/EditModal";
import { ProjectDetails } from "../../ViewModels/ProjectDetails"

import "@progress/kendo-ui";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
//import "@progress/kendo-theme-bootstrap/dist/all.css"
import { IDeleteService } from "@ExemplarServices/IDeleteService";
import { PageBase } from "@ExemplarCommon/PageBase";

Vue.component('kendo-dropdownlist', KendoDropDown)

@Component({
    template: "#asset-grid-menu-template",
    components: {BModal, BButton, BAlert}
})

export default class AssetGridMenuComponent extends PageBase<PropertyInspectionForm> {
    @lazyInject("IDeleteService<PropertyInspectionForm>")
    PifDeleteService!: IDeleteService<PropertyInspectionForm>;

    @lazyInject("IValidator<PropertyInspectionForm>")
    PifValidator!: IValidator<PropertyInspectionForm>;

    @Prop({ required: true, type: String })
    imgPath!: string;

    @Prop({ required: true, type: String })
    imgToken!: string;

    projectDetails: ProjectDetails = new ProjectDetails();

    propertyInspectionFormRoutes: ApiDefaultRoute;

    propertyInspectionForms: Array<PropertyInspectionForm> = new Array<PropertyInspectionForm>();

    ready: boolean = false;
    
    noRecords: boolean = true;

    showUnDeleteButton: boolean = false;

    formsDropdownDataSource: Array<DropdownListValues> = new Array<DropdownListValues>();

    propertyInspectionForm: PropertyInspectionForm = new PropertyInspectionForm();

    iconClass: string = this.propertyInspectionForm.Id > 0 ? "pifIconMenu pifFormIconsActive cursor" : "pifIconMenu pifFormIconsDisabled";

    newFormPlaceHolder: string = "";

    userId: number = <number>$("#userId").val();

    pifCount: string = "";

    deletedIndex: number = -1;

    editModal: EditModal<PropertyInspectionForm> = new EditModal<PropertyInspectionForm>(this.InsertSuccessCallBack, null, this.PifValidator);

    newModal = {
        formName: {} as string,
        open: false,
        validator: "",
        busy: false,
        isEditMode: () => {
            return this.newModal.formName = "";
        },
        showUnsavedChangesWarning: false,
        noCloseOnBackdrop: true,
        noCloseOnEsc: true
    };

    constructor() {
        super();
    }

    mounted() {
        this.propertyInspectionFormRoutes = new ApiDefaultRoute(this.exemplarApiUrl,"PropertyInspectionForms");

        this.deleteServiceInstance = this.PifDeleteService;

        EventBus.$on(PifEvents.InitializeFormMenu, (projectDetails: ProjectDetails) => {
            this.propertyInspectionForms = sortBy(projectDetails.PropertyInspectionForms, ['IsDeleted'], ['desc']);

            this.projectDetails = projectDetails;

            if (this.propertyInspectionForms && this.propertyInspectionForms.length > 0) {
                this.SetPifCount();
                this.noRecords = false;

                this.SetDropDownDataSource();

            } else {
                this.noRecords = true;
                EventBus.$emit(PifEvents.ShowAssets, false);
                let newProjectDetails: ProjectDetails = new ProjectDetails();
                newProjectDetails.CompanyId = 0;
                newProjectDetails.ClaimNumber = "";
            }
            this.ready = true;
        });

        EventBus.$on(PifEvents.SavePif, async () => {
            this.propertyInspectionForm.LastModifiedOn = new Date().toLocaleString();
        });
    }

    SetPifCount() {
        if (this.propertyInspectionForms.length > 1) {
            this.pifCount = `(${this.propertyInspectionForms.length})`
        } else {
            this.pifCount = "";
        }
    }

    SetIconClass() {
        this.iconClass = this.propertyInspectionForm.Id > 0 ? "pifIconMenu pifFormIconsActive cursor" : "pifIconMenu pifFormIconsDisabled";
    }

    GetPif(id: number): PropertyInspectionForm | undefined {
        return this.propertyInspectionForms.find(item => item.Id === id);
    }

    SetDropDownDataSource() {

        this.formsDropdownDataSource = new Array<DropdownListValues>();

        if (this.propertyInspectionForms && this.propertyInspectionForms.length > 0) {

            this.formsDropdownDataSource.push(new DropdownListValues('Select Form', '0'));
        }
       
        forEach(this.propertyInspectionForms, (item) => {
            if (!item.IsDeleted) {
                this.formsDropdownDataSource.push(new DropdownListValues(item.FormName, String(item.Id)));
            } else {
                this.formsDropdownDataSource.push(new DropdownListValues(item.FormName + ' (Deleted)', String(item.Id)));
            }
        });
    }

  

    DeleteSuccessCallback() {
        let pif = this.GetPif(this.propertyInspectionForm.Id);
        if (pif) {
            pif.IsDeleted = true;
        }
        this.SetDropDownDataSource();
    }
     

    private CreatePropertyInspectionForm(): PropertyInspectionForm {
        var newForm = new PropertyInspectionForm();
        newForm.CreatedBy = this.userId;
        newForm.ProjectId = this.projectDetails.ProjectId;
        return newForm;
    }

      // CallBacks

    InsertSuccessCallBack(pif: PropertyInspectionForm) {
        this.propertyInspectionForms.unshift(pif);
        this.formsDropdownDataSource.push(new DropdownListValues(pif.FormName, String(pif.Id)));
        this.editModal.open = false;
        this.noRecords = false;
        this.SetDropDownDataSource();

        this.$nextTick(function () {
            this.SetPifCount();
        });

        EventBus.$emit(PifEvents.PifCreated, pif);
    }

    UnDeleteSuccessCallback() {
        this.propertyInspectionForm.IsDeleted = false;
        this.propertyInspectionForm = this.propertyInspectionForm;
        EventBus.$emit(PifEvents.ShowAssets, true);
        this.showUnDeleteButton = false;

        let deletedPif: PropertyInspectionForm | undefined = this.propertyInspectionForms.find(item => item.Id === this.propertyInspectionForm.Id);
        if (deletedPif) {
            deletedPif.IsDeleted = false;
        }

        this.deletedIndex = findIndex(this.formsDropdownDataSource, { value: String(this.propertyInspectionForm.Id) });

        this.SetDropDownDataSource();
    }

    // Button Events

    onHide(event: any) {
        if (event.type === "hide" && event.trigger === "header-close") {
            event.preventDefault();
            this.deleteService.open = false;
        }
    }

    onCopyFormClicked() {
        alert("In Development")
    }

    onFormsChange(e: any) {
        var selectedValue: number = Number(e.sender.value());
        this.showUnDeleteButton = false;

        if (selectedValue > 0) {

            this.propertyInspectionForm = <PropertyInspectionForm>find(this.propertyInspectionForms, { Id: selectedValue });

            if (this.propertyInspectionForm.IsDeleted) {
                this.showUnDeleteButton = true;
                EventBus.$emit(PifEvents.ShowAssets, false);

            } else {
                this.propertyInspectionForm = this.propertyInspectionForm;
                EventBus.$emit(PifEvents.ShowAssets, true);
                EventBus.$emit(PifEvents.SearchAssets, this.propertyInspectionForm.Id, this.projectDetails)
            }
        } else {
            this.propertyInspectionForm = new PropertyInspectionForm();
            EventBus.$emit(PifEvents.ShowAssets, false);
        }
        this.SetIconClass();
    }

    onEditFormClicked() {
        EventBus.$emit(PifEvents.ShowPifForm, this.propertyInspectionForm.FormName, this.propertyInspectionForm.Id, this.propertyInspectionForm.PreMigration);
    }

    async onNewFormClicked() {
        this.newFormPlaceHolder = String(this.propertyInspectionForms.length + 1);
        const model: PropertyInspectionForm = this.CreatePropertyInspectionForm();
        this.editModal.showModal(model, false);
    }

    async onSaveFormClicked() {
        if (this.editModal.validate()) {
            await this.Insert(this.propertyInspectionFormRoutes.Insert(), this.editModal.data, this.InsertSuccessCallBack, null, "New Form Created.");
        }
    }

    onCancelFormClicked() {
        if (this.editModal.hasChanges(this.editModal.data)) {
            this.editModal.showUnsavedChangesWarning = true;
        } else {
            this.editModal.open = false;
        }
    }

    onUndeleteClicked() {

        let pif = this.GetPif(this.propertyInspectionForm.Id);
        if (pif) {
            pif.IsDeleted = false;
            this.Update(this.propertyInspectionFormRoutes.Update(pif.Id, this.currentUserId), pif, this.UnDeleteSuccessCallback, null, "Pif Undeleted!");
        }
    }

    onDataBound() {
        var ddl: kendo.ui.DropDownList = (<any>this.$refs.dropdownlist).kendoWidget();

        if (this.deletedIndex > -1) {
            ddl.select(this.deletedIndex);
        } else if (this.propertyInspectionForms.length > 0) {
            ddl.select(1);
        } else {
            ddl.select(0);
        }

        this.deletedIndex = -1;

        ddl.trigger("change");
    }
}
