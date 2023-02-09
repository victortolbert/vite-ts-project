import Vue from "Vue";
import { Component, Watch, Prop} from "vue-property-decorator";
import AssetViewerComponent from "./AssetViewerComponent";
import { filter } from "lodash";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import { AssetTypeEnum } from "../../ViewModels/Enums/AssetTypeEnum";
import { AssetUploadModel } from "../../ViewModels/AssetUploadModel";
import { FieldAsset } from "../../ViewModels/FieldAsset";
import { BModal, BButton } from 'bootstrap-vue'
import { PifEvents, EventBus } from "./../../Events";
import { SectionBase } from "../../SectionBase";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { MasterDataBuilder } from "../../HelperClasses/MasterDataBuilder";

// Controls
import BooleanWrapperComponent from "./Controls/BooleanWrapperComponent";
import CheckboxWrapperComponent from "./Controls/CheckboxWrapperComponent";
import BooleanCameraWrapperComponent from "./Controls/BooleanCameraWrapperComponent";
import NumericWrapperComponent from "./Controls/NumericWrapperComponent";
import TextboxCameraWrapperComponent from "./Controls/TextboxCameraWrapperComponent";

//Sections
import { PropertyInspectionFormMain } from "../../ViewModels/PropertyInspectionFormMain";
import InteriorSectionComponent from "./InteriorSectionComponent";
import ElevationSectionComponent from "./ElevationSectionComponent";
import RoofSectionComponent from "./RoofSectionComponent";



@Component({
    template: "#main-section-template",
    components: {
        AssetViewerComponent,
        BooleanWrapperComponent,
        BooleanCameraWrapperComponent,
        CheckboxWrapperComponent,
        NumericWrapperComponent,
        TextboxCameraWrapperComponent,
        InteriorSectionComponent,
        ElevationSectionComponent,
        RoofSectionComponent,
        BModal, BButton
    }
})

export default class MainSectionComponent extends SectionBase<PropertyInspectionFormMain>{
    
    @Prop({ required: true, type: Array })
    fieldAssets!: Array<FieldAsset>;

    @Prop({ required: true, type: Number })
    companyId!: number;

    @Prop({ required: true, type: Number })
    projectId!: number;

    @Prop({ required: true, type: Number })
    propertyInspectionFormId!: number;

    @Prop({ required: true, type: String })
    location!: string;

    destroy: boolean = false;

    north: string = "North";

    south: string = "South";

    west: string = "West";

    east: string = "East";

    model: PropertyInspectionFormMain = new PropertyInspectionFormMain();
   
    masterDirection = MasterDataBuilder.ReturnDirection();

    masterYesNoNa = MasterDataBuilder.ReturnYesNoNa();

    loaded: boolean = false;

    route: ApiDefaultRoute;

    deleteSectionModal = {
        open: false,
        section: "",
        promptText: "",
        noCloseOnBackdrop: true,
        noCloseOnEsc: true

    };

    mounted() {
       
        this.destroy = false;

        this.route = new ApiDefaultRoute(this.exemplarApiUrl, "PropertyInspectionFormMain");

        this.className = "Property Inspection Form Main";

        this.LoadSection();

        EventBus.$on(PifEvents.Destroy, () => {
            EventBus.$off("create-elevation");
            EventBus.$off("load-elevation");
            EventBus.$off("remove-elevation");

            EventBus.$off("create-interior");
            EventBus.$off("load-interior");
            EventBus.$off("remove-interior");

            EventBus.$off("create-roof");
            EventBus.$off("load-roof");
            EventBus.$off("remove-roof");

            EventBus.$off("save-pif");
        });

        EventBus.$on(PifEvents.DetermineReportType, () => {
            EventBus.$emit(PifEvents.ReportTypeSet, this.model.AllStateInspection);
        });

        EventBus.$on(PifEvents.SavePif,  () => {
            this.SaveMain();
        });
    }

    async SaveMain() {
        if (this.model.Id > 0) {
            if (this.hasChanges(this.model)) {
                await this.Update(this.route.Update(this.model.Id, this.currentUserId), this.model, null, null, "Main section record updated.");
            }
        } else {
            await this.Insert(this.route.Insert(), this.model, this.InsertSuccessCallback, this.InsertErrorCallback, "Main Section record created.");
        }
    }

    ReturnAssetModel(AssetFieldId: number, assetName: string = ""): AssetUploadModel {
        let assetUploadModel = new AssetUploadModel();
        assetUploadModel.AssetFieldId = AssetFieldId;
        assetUploadModel.AssetTypeId = AssetTypeEnum.FieldAsset;
        assetUploadModel.CompanyId = this.companyId;
        assetUploadModel.ProjectId = this.projectId;
        assetUploadModel.AssetName = assetName;
        assetUploadModel.PropertyInspectionFormId = this.propertyInspectionFormId;
        return assetUploadModel;
    }

    ReturnFieldAssets(AssetFieldId: number): Array<FieldAsset> {
        let fieldAssets = <Array<FieldAsset>>filter(this.fieldAssets, { AssetFieldId: AssetFieldId });
        if (!fieldAssets) {
            return new Array<FieldAsset>();
        }
        return <Array<FieldAsset>>filter(this.fieldAssets, { AssetFieldId: AssetFieldId });
    }

    onSectionInspectedChange(section: string, response: boolean) {
        this.deleteSectionModal.section = section;

        if (response) {
            switch (this.deleteSectionModal.section) {
                case "Elevation":
                    this.model.ElevationInspected = true;
                    EventBus.$emit(PifEvents.CreateElevation);
                    break;
                case "Interior":
                    this.model.InteriorInspected = true;
                    EventBus.$emit(PifEvents.CreateInterior);
                    break;
                case "Roof":
                    this.model.RoofInspected = true;
                    EventBus.$emit(PifEvents.CreateRoof);
                    break;
            }
        }
        if (!response) {
               
                switch (this.deleteSectionModal.section) {
                    case "Elevation":
                        if (this.model.ElevationInspected == null) {
                            this.model.ElevationInspected = false;
                            return;
                        }
                        if (!this.model.ElevationInspected) {
                            this.model.ElevationInspected = null;
                            return;
                        }
                        this.model.ElevationInspected = false;
                        break;
                    case "Interior":
                        if (this.model.InteriorInspected == null) {
                            this.model.InteriorInspected = false;
                            return;
                        }
                        if (!this.model.InteriorInspected) {
                            this.model.InteriorInspected = null;
                            return;
                        }
                        this.model.InteriorInspected = false;
                        break;
                    case "Roof":
                        if (this.model.RoofInspected == null) {
                            this.model.RoofInspected = false;
                            return;
                        }
                        if (!this.model.RoofInspected) {
                            this.model.RoofInspected = null;
                            return;
                        }
                        this.model.RoofInspected = false;
                        break;
            }
            this.deleteSectionModal.promptText = 'Changing this to "No" will delete any previous entered ' + section + ' inspection data. Are you sure you want to proceed?';
            this.deleteSectionModal.open = true;
        }
    }

    SectionChangeConfirmed() {

        let route: ApiDefaultRoute;

        switch (this.deleteSectionModal.section) {
            case "Elevation":
                route = new ApiDefaultRoute(this.exemplarApiUrl,"PropertyInspectionFormElevations");
                break;
            case "Interior":
                route = new ApiDefaultRoute(this.exemplarApiUrl,"PropertyInspectionFormInteriors");
                break;
            case "Roof":
                route = new ApiDefaultRoute(this.exemplarApiUrl,"PropertyInspectionFormRoofs");
                break;
        }

        // @ts-ignore
        this.Delete(route.Delete(this.propertyInspectionFormId), null, this.DeleteSectionSuccessfull, null)
    }

    SectionChangeCancelled() {
        switch (this.deleteSectionModal.section) {
            case "Elevation":
                this.model.ElevationInspected = true;
                break;
            case "Interior":
                this.model.InteriorInspected = true;
                break;
            case "Roof":
                this.model.RoofInspected = true;
                break;
        }
        this.deleteSectionModal.open = false;
    }

    SectionChangeHide() {
        switch (this.deleteSectionModal.section) {
            case "Elevation":
                this.model.ElevationInspected = true;
                break;
            case "Interior":
                this.model.InteriorInspected = true;
                break;
            case "Roof":
                this.model.RoofInspected = true;
                break;
        }
        this.deleteSectionModal.open = false;
    }

    DeleteSectionSuccessfull() {

        switch (this.deleteSectionModal.section) {
            case "Elevation":
                this.model.ElevationInspected = false;
                EventBus.$emit(PifEvents.RemoveElevation);
                break;
            case "Interior":
                this.model.InteriorInspected = false;
                EventBus.$emit(PifEvents.RemoveInterior);
                break;
            case "Roof":
                this.model.RoofInspected = false;
                EventBus.$emit(PifEvents.RemoveRoof);
                break;
        }

        ToastrHelper.DisplayToastSuccess(this.deleteSectionModal.section + " Removed.", "Success")

        this.deleteSectionModal.open = false; 

        this.SaveMain();
    }

    InsertErrorCallback(data: any) {
        ToastrHelper.DisplayToastError(data, this.className);
    }

    InsertSuccessCallback(model: any) {
        this.model.CreatedOn = model.CreatedOn;
        this.model.LastModifiedOn = model.LastModifiedOn;
        this.model.Id = model.Id;
    }

    GetModelSuccessCallback(model: PropertyInspectionFormMain) {
        this.model = model;
        this.ready = true;
        this.loaded = true;

        if (this.model == null && this.error == false) {
            this.model = new PropertyInspectionFormMain();
            this.model.PropertyInspectionFormId = this.propertyInspectionFormId;
            this.model.Id = 0;
        } 
    }

    async LoadSection() {
        await this.GetModel(this.route.Get(this.propertyInspectionFormId), this.GetModelSuccessCallback);
        if (this.model.ElevationInspected) {
             EventBus.$emit(PifEvents.LoadElevation);
        }
        if (this.model.InteriorInspected) {
            EventBus.$emit(PifEvents.LoadInterior);
        }
        if (this.model.RoofInspected) {
             EventBus.$emit(PifEvents.LoadRoof);
        }
    }

    @Watch("model.AllStateInspection")
    IsAllstateChanged() {
        if (!this.model.AllStateInspection) {
            this.model.AllPhotos = null;
            this.model.CollaborationSuccessfull = "";
            this.model.EagleViewProvided = null;
            this.model.RoleExplained = null;
            this.model.OutsideAdjusterOnEdge = null;
            this.model.OutsideAdjusterOnLadder = null;
            this.model.LaAccompanied = null;
            this.model.LaOnTime = null;
        } 
    }

    @Watch("model.DirectionNorth")
    SetDirection() {
        if (this.model.DirectionNorth != null) {
            switch (this.model.DirectionNorth) {
                case "Front":
                    this.north = "North/Front";
                    this.south = "South/Back";
                    this.east = "East/Left";
                    this.west = "West/Right";
                    break;
                case "Left":
                    this.north = "North/Left";
                    this.south = "South/Right";
                    this.east = "East/Back";
                    this.west = "West/Front";
                    break;
                case "Back":
                    this.north = "North/Back";
                    this.south = "South/Front";
                    this.east = "East/Right";
                    this.west = "West/Left";
                    break;
                case "Right":
                    this.north = "North/Right";
                    this.south = "South/Left";
                    this.east = "East/Front";
                    this.west = "West/Back";
                    break;
                default:
                    this.north = "North";
                    this.south = "South";
                    this.east = "East";
                    this.west = "West";
            }
        }
    }

    @Watch("model.AllPhotos")
    AllPhotosChanged() {
        if (this.model.AllPhotos) {

        } 
    }

    @Watch("model.OutsideAdjusterPresent")
    private ResetOutsideAdjusterPresent() {
        if (!this.model.OutsideAdjusterPresent) {
            this.model.OutsideAdjusterPresentOnRoof = null;
            this.model.OutsideAdjusterOnEdge = null;
            this.model.OutsideAdjusterOnLadder = null;
        }
    }

    @Watch("model.PublicAdjusterPresent")
    private ResetPublicAdjusterPresent() {
        if (!this.model.PublicAdjusterPresent) {
            this.model.PublicAdjusterPresentOnRoof = null;
        }
    }

    @Watch("model.InsuredPresent")
    private ResetInsuredPresent() {
        if (!this.model.InsuredPresent) {
            this.model.InsuredPresent = false;
        } else { this.model.InsuredPresent = true; }
    }

    @Watch("model.ContractorPresent")
    private ResetContractorPresent() {
        if (!this.model.ContractorPresent) {
            this.model.ContractorPresentOnRoof = null;
        }
    }

    @Watch("model.TarpInstall")
    private ResetTarpInstall() {
        if (!this.model.TarpInstall) {
            this.model.TarpInstallSizeSf = null;
            this.model.TarpResetSizeSf = null;
        }
    }
}
