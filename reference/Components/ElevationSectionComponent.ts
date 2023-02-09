import { Component, Watch, Prop } from "vue-property-decorator";
import { PifEvents, EventBus } from "./../../Events";
import { SectionBase } from "../../SectionBase";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { MasterDataBuilder } from "../../HelperClasses/MasterDataBuilder";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import { filter } from "lodash";
import { AssetTypeEnum } from "../../ViewModels/Enums/AssetTypeEnum"; 

//Components
import BooleanWrapperComponent from "./Controls/BooleanWrapperComponent";
import BooleanCameraWrapperComponent from "./Controls/BooleanCameraWrapperComponent";
import CheckboxCameraWrapperComponent from "./Controls/CheckboxCameraWrapperComponent";
import CheckboxWrapperComponent from "./Controls/CheckboxWrapperComponent";
import DirectionalCameraWrapperComponent from "./Controls/DirectionalCameraWrapperComponent";
import DirectionalNumericWrapperComponent from "./Controls/DirectionalNumericWrapperComponent";
import NumericWrapperComponent from "./Controls/NumericWrapperComponent";
import TextboxWrapperComponent from "./Controls/TextboxWrapperComponent";
import { SectionType } from "../../ViewModels/Enums/SectionType";

// View PropertyInspectionFormElevation
import { AssetUploadModel } from "../../ViewModels/AssetUploadModel";
import { FieldAsset } from "../../ViewModels/FieldAsset"; 
import { PropertyInspectionFormElevation } from "../../ViewModels/PropertyInspectionFormElevation";


@Component({
    template: "#elevation-section-template",
    components: {
        BooleanWrapperComponent,
        BooleanCameraWrapperComponent,
        CheckboxWrapperComponent,
        CheckboxCameraWrapperComponent,
        NumericWrapperComponent,
        TextboxWrapperComponent,
        DirectionalNumericWrapperComponent,
        DirectionalCameraWrapperComponent
    }
})

export default class ElevationSectionComponent extends SectionBase<PropertyInspectionFormElevation> {
    @Prop({ required: true, type: Number })
    propertyInspectionFormId!: number;

    @Prop({ required: false, type: Boolean, default: false })
    isAllState!: boolean;

    @Prop({ required: true, type: Array })
    fieldAssets!: Array<FieldAsset>;

    @Prop({ required: true, type: Number })
    companyId!: number;

    @Prop({ required: true, type: Number })
    projectId!: number;

    @Prop({ required: true, type: Boolean, default: false })
    validate: boolean;

    @Prop({ required: true, type: String })
    north!: string;

    @Prop({ required: true, type: String })
    south!: string;

    @Prop({ required: true, type: String })
    east!: string;

    @Prop({ required: true, type: String })
    west!: string;

    model: PropertyInspectionFormElevation = new PropertyInspectionFormElevation();

    route: ApiDefaultRoute;

    masterYesNo = MasterDataBuilder.ReturnYesNo();

    masterYesNoNa = MasterDataBuilder.ReturnYesNoNa();

    masterAwningMaterial = MasterDataBuilder.ReturnAwningMaterial();

    masterDeckMaterial = MasterDataBuilder.ReturnDeckMaterial();

    masterHandRailMaterial = MasterDataBuilder.ReturnHandRailMaterial();

    masterFenceMaterial = MasterDataBuilder.ReturnFenceMaterial();

    masterSidingMaterial = MasterDataBuilder.ReturnSidingMaterial();

    masterDownspoutMaterial = MasterDataBuilder.ReturnDownspoutMaterial();

    masterDownspoutSize = MasterDataBuilder.ReturnDownspoutSize();

    masterFasciaMaterials = MasterDataBuilder.ReturnFasciaMaterial();

    masterFasciaSize = MasterDataBuilder.ReturnFasciaSize();

    masterWindowWrapMaterial = MasterDataBuilder.ReturnWindowWrapMaterial();

    constructor() {
        super();
    }

    mounted() {

        this.route = new ApiDefaultRoute(this.exemplarApiUrl, "PropertyInspectionFormElevations");

        this.className = "Property Inspection Form Elevation";

        EventBus.$on(PifEvents.LoadElevation, async () => {
            this.LoadSection();
        });

        EventBus.$on(PifEvents.RemoveElevation, async () => {
            this.model = new PropertyInspectionFormElevation();
            this.ready = false;
        });

        EventBus.$on(PifEvents.CreateElevation, async () => {
            this.model = new PropertyInspectionFormElevation();
            this.model.PropertyInspectionFormId = this.propertyInspectionFormId;
            this.model.Id = 0;
            this.ready=true;
        });

        EventBus.$on(PifEvents.RequestReportData, async () => {
            EventBus.$emit(PifEvents.SendReportData, this.model, SectionType.Elevation);
        });

        EventBus.$on(PifEvents.SavePif, async () => {
            if (this.model.PropertyInspectionFormId != null) {
                if (this.model.Id > 0) {
                      if (this.hasChanges(this.model)) {
                          await this.Update(this.route.Update(this.model.Id, this.currentUserId), this.model, null, null, "Elevation section record updated.");
                     }
                } else {
                     await this.Insert(this.route.Insert(), this.model, this.InsertSuccessCallback, this.InsertErrorCallback, "Elevation section record created.");
                 }
             }
        });
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

    InsertErrorCallback(data:any) {
        ToastrHelper.DisplayToastError(data, this.className);
    }

    InsertSuccessCallback(model: any) {
        this.model.CreatedOn = model.CreatedOn;
        this.model.LastModifiedOn = model.LastModifiedOn;
        this.model.Id = model.Id;
    }

    GetModelSuccessCallback(model: PropertyInspectionFormElevation) {
        this.model = model;
        if (this.model == null && this.error == false) {
            this.model = new PropertyInspectionFormElevation();
            this.model.PropertyInspectionFormId = this.propertyInspectionFormId;
            this.model.Id = 0;
        } 
        this.ready = true;
    }

    async LoadSection() {
        await this.GetModel(this.route.Get(this.propertyInspectionFormId), this.GetModelSuccessCallback);
    }

    @Watch("model.RefrigerationCoilsDamaged")
    private ResetRefrigerationCoil() {
        if (this.model.RefrigerationCoilsDamaged !== 'Yes') {
            this.model.RefrigerationCoilUnits = null;
        }
    }

    @Watch("model.DeckDamaged")
    private ResetDeck() {
        if (this.model.DeckDamaged !== 'Yes') {
            this.model.DeckMaterial = "";
            this.model.DeckPainted = null;
            this.model.DeckStained = null;
            this.model.DeckSf = null;
        }
    }

    @Watch("model.DownSpoutsDamaged")
    private ResetDownSpoutsDamaged() {
        if (this.model.DownSpoutsDamaged !== 'Yes') {
            this.model.DownSpoutsNorthDamaged = "";
            this.model.DownSpoutsEastDamaged = "";
            this.model.DownSpoutsSouthDamaged = "";
            this.model.DownSpoutsWestDamaged = "";
            this.model.DownSpoutsNorthLf = null;
            this.model.DownSpoutsEastLf = null;
            this.model.DownSpoutsWestLf = null;
            this.model.DownSpoutsSouthLf = null;
        }
    }

    @Watch("model.WindowWrapDamaged")
    private ResetWindowWrapDamaged() {
        if (this.model.WindowWrapDamaged !== 'Yes') {
            this.model.WindowWrapLf = null;
            this.model.WindowWrapMaterial = "";
            this.model.WindowWrapMaterialOther = "";
            this.model.WindowWrapPainted = null;
        }
    }

    @Watch("model.HandrailDamaged")
    private ResetHandrail() {
        if (this.model.HandrailDamaged !== 'Yes') {
            this.model.HandrailMaterial = "";
            this.model.HandrailPainted = null;
            this.model.HandrailStained = null;
            this.model.HandrailLf = null;
        }
    }

    @Watch("model.FenceDamaged")
    private ResetFence() {
        if (this.model.FenceDamaged !== 'Yes') {
            this.model.FencePainted = null;
            this.model.FenceStained = null;
            this.model.FenceMaterial = "";
            this.model.FenceMaterialOther = "";
            this.model.FenceSf = null;
            this.model.FenceHeightLf = null;
        }
    }

    @Watch("model.WindowsDamaged")
    private ResetWindows() {
        if (this.model.WindowsDamaged !== 'Yes') {
            this.model.WindowSmallSf = null;
            this.model.WindowMediumSf = null;
            this.model.WindowLargeSf = null;
            this.model.WindowXlargeSf = null;
            this.model.WindowOtherSf = null;
            this.model.WindowOtherDescription = "";
         }
    }

    @Watch("model.WindowOtherSf")
    private ResetWindowOtherSf() {
        if (this.model.WindowOtherSf == null) {
            this.model.WindowOtherDescription = "";
           
        }
    }

    @Watch("model.WindowScreenDamaged")
    private ResetScreen() {
        if (this.model.WindowScreenDamaged !== 'Yes') {
            this.model.WindowScreenLargeSf = null;
            this.model.WindowScreenMediumSf = null;
            this.model.WindowScreenSmallSf = null;
            this.model.WindowScreenXlargeSf = null;
        }
    }

    @Watch("model.AwningDamaged")
    private ResetAwning() {
        if (this.model.AwningDamaged !== 'Yes') {
            this.model.AwningMaterial = "";
            this.model.AwningMaterialOther = "";
        }
    }

    @Watch("model.SidingDamage")
    private ResetSiding() {
        if (this.model.SidingDamage !== 'Yes') {
            this.model.SidingMaterial = "";
            this.model.SidingMaterialOther = "";
            this.model.SidingNorthQty = null;
            this.model.SidingSouthQty = null;
            this.model.SidingEastQty = null;
            this.model.SidingWestQty = null;
            this.model.SidingNotes = "";
        }
    }

    @Watch("model.DownSpoutsMaterial")
    private ResetDownSpoutsMaterial() {
        if (this.model.DownSpoutsMaterial != 'Other') {
            this.model.DownSpoutsMaterialOther = "";
        }
    }

    @Watch("model.DownSpoutsSize")
    private ResetDownSpoutsSize() {
        if (this.model.DownSpoutsSize != 0) {
            this.model.DownSpoutsSizeOther = null;
        }
    }

    @Watch("model.DownSpoutsNorthDamaged")
    private ResetDownSpoutsNorthDamaged() {
        if (this.model.DownSpoutsNorthDamaged !== 'Yes') {
            this.model.DownSpoutsNorthLf = null;
        }
    }

    @Watch("model.DownSpoutsSouthDamaged")
    private ResetDownSpoutsSouthDamaged() {
        if (this.model.DownSpoutsSouthDamaged !== 'Yes') {
            this.model.DownSpoutsSouthLf = null;
        }
    }

    @Watch("model.DownSpoutsEastDamaged")
    private ResetDownSpoutsEastDamaged() {
        if (this.model.DownSpoutsEastDamaged !== 'Yes') {
            this.model.DownSpoutsEastLf = null;
        }
    }

    @Watch("model.DownSpoutsWestDamaged")
    private ResetDownSpoutsWestDamaged() {
        if (this.model.DownSpoutsWestDamaged !== 'Yes') {
            this.model.DownSpoutsWestLf = null;
        }
    }

    @Watch("model.GarageDamaged")
    private ResetGarage() {
        if (this.model.GarageDamaged !== 'Yes') {
            this.model.GarageDescription = "";
            this.model.GarageSf = null;
        }
    }
}
