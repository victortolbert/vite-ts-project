import { Component, Watch, Prop} from "vue-property-decorator";
import { PifEvents, EventBus } from "./../../Events";
import { SectionBase } from "../../SectionBase";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { MasterDataBuilder } from "../../HelperClasses/MasterDataBuilder";
import { filter } from "lodash";
import { SectionType } from "../../ViewModels/Enums/SectionType";
import { AssetTypeEnum } from "../../ViewModels/Enums/AssetTypeEnum"; 
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";

//Components
import CheckboxCameraWrapperComponent from "./Controls/CheckboxCameraWrapperComponent";
import CheckboxWrapperComponent from "./Controls/CheckboxWrapperComponent";
import NumericWrapperComponent from "./Controls/NumericWrapperComponent";
import TextboxWrapperComponent from "./Controls/TextboxWrapperComponent";
import BooleanWrapperComponent from "./Controls/BooleanWrapperComponent";
import TextboxCameraWrapperComponent from "./Controls/TextboxCameraWrapperComponent";

// View Models
import { AssetUploadModel } from "../../ViewModels/AssetUploadModel";
import { FieldAsset } from "../../ViewModels/FieldAsset";
import { PropertyInspectionFormInterior } from "../../ViewModels/PropertyInspectionFormInterior";

@Component({
    template: "#interior-section-template",
    components: {
        CheckboxWrapperComponent,
        CheckboxCameraWrapperComponent,
        NumericWrapperComponent,
        TextboxWrapperComponent,
        BooleanWrapperComponent,
        TextboxCameraWrapperComponent
    }
})

export default class InteriorSectionComponent extends SectionBase<PropertyInspectionFormInterior> {
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

    @Prop({ required: true, type: Boolean, default: true })
    validate: boolean;

    formName: string = "";

    model: PropertyInspectionFormInterior = new PropertyInspectionFormInterior();

    route: ApiDefaultRoute;

    masterGutterMaterial = MasterDataBuilder.ReturnGutterMaterial();

    masterGutterSize = MasterDataBuilder.ReturnGutterSize();

    masterHailSize = MasterDataBuilder.ReturnHailSize();

    masterPipebootMaterial = MasterDataBuilder.ReturnPipebootMaterial();

    masterRidgeVentMaterial = MasterDataBuilder.ReturnRidgeVentMaterial();

    masterShingleType = MasterDataBuilder.ReturnShingleType();

    masterStormDamage = MasterDataBuilder.ReturnStormDamageType();

    masterYesNo = MasterDataBuilder.ReturnYesNo();

    masterYesNoNa = MasterDataBuilder.ReturnYesNoNa();
     

    constructor() {
        super();
    }

    mounted() {

        this.route = new ApiDefaultRoute(this.exemplarApiUrl, "PropertyInspectionFormInteriors");

        this.className = "Property Inspection Form Interior";

        EventBus.$on(PifEvents.LoadInterior, async () => {
            this.LoadSection();
        });

        EventBus.$on(PifEvents.RemoveInterior, async () => {
            this.model = new PropertyInspectionFormInterior();
            this.ready = false;
        });

        EventBus.$on(PifEvents.CreateInterior, async () => {
            this.model = new PropertyInspectionFormInterior();
            this.model.PropertyInspectionFormId = this.propertyInspectionFormId;
            this.model.Id = 0;
            this.ready = true;
        });

        EventBus.$on(PifEvents.RequestReportData, async () => {
            EventBus.$emit(PifEvents.SendReportData, this.model, SectionType.Interior);
        });

        EventBus.$on(PifEvents.SavePif, async () => {
             if (this.model.PropertyInspectionFormId != null) {
                if (this.model.Id > 0) {
                if (this.hasChanges(this.model)) {
                    await this.Update(this.route.Update(this.model.Id, this.currentUserId), this.model, null, null, "Interior section record updated.");
                }
            } else {
                await this.Insert(this.route.Insert(), this.model, this.InsertSuccessCallback, this.InsertErrorCallback, "Interior section record created.");
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

    InsertErrorCallback(data: any) {
        ToastrHelper.DisplayToastError(data, this.className);
    }

    InsertSuccessCallback(model: any) {
        this.model.CreatedOn = model.CreatedOn;
        this.model.LastModifiedOn = model.LastModifiedOn;
        this.model.Id = model.Id;
    }

    GetModelSuccessCallback(model: PropertyInspectionFormInterior) {
        this.model = model;
        if (this.model == null && this.error == false) {
            this.model = new PropertyInspectionFormInterior();
            this.model.PropertyInspectionFormId = this.propertyInspectionFormId;
            this.model.Id = 0;
        } 
        this.ready = true;
    }

    async LoadSection() {
        await this.GetModel(this.route.Get(this.propertyInspectionFormId), this.GetModelSuccessCallback);
    }

    @Watch("model.AdditionalOneArea")
    private ResetAdditionalOne() {
        if (this.model.AdditionalOneArea.length == 0) {
            this.model.AdditionalOneDamaged = "";
            this.model.AdditionalOneDescription = "";
            this.model.AdditionalOneSf = null;
        }
    }

    @Watch("model.AdditionalOneDamaged")
    private AdditionalOneDamaged() {
        if (this.model.AdditionalOneDamaged !== 'Yes') {
            this.model.AdditionalOneDescription = "";
            this.model.AdditionalOneSf = null;
        }
    }

    @Watch("model.AdditionalTwoArea")
    private AdditionalTwoArea() {
        if (this.model.AdditionalTwoArea.length == 0) {
            this.model.AdditionalTwoDamaged = "";
            this.model.AdditionalTwoDescription = "";
            this.model.AdditionalTwoSf = null;
        }
    }

    @Watch("model.AdditionalTwoDamaged")
    private AdditionalTwoDamaged() {
        if (this.model.AdditionalTwoDamaged !== 'Yes') {
            this.model.AdditionalTwoDescription = "";
            this.model.AdditionalTwoSf = null;
        }
    }

    @Watch("model.AdditionalThreeArea")
    private AdditionalThreeArea() {
        if (this.model.AdditionalThreeArea.length == 0) {
            this.model.AdditionalThreeDamaged = "";
            this.model.AdditionalThreeDescription = "";
            this.model.AdditionalThreeSf = null;
        }

    }
    @Watch("model.AdditionalThreeDamaged")
    private AdditionalThreeDamaged() {
        if (this.model.AdditionalThreeDamaged !== 'Yes') {
            this.model.AdditionalThreeDescription = "";
            this.model.AdditionalThreeSf = null;
        }
    }

    @Watch("model.AdditionalFourArea")
    private AdditionalFourArea() {
        if (this.model.AdditionalFourArea.length == 0) {
            this.model.AdditionalFourDamaged = "";
            this.model.AdditionalFourDescription = "";
            this.model.AdditionalFourSf = null;
        }

    }

    @Watch("model.AdditionalFourDamaged")
    private AdditionalFourDamaged() {
        if (this.model.AdditionalFourDamaged !== 'Yes') {
            this.model.AdditionalFourDescription = "";
            this.model.AdditionalFourSf = null;
        }
    }

    @Watch("model.AdditionalFiveArea")
    private AdditionalFiveArea() {
        if (this.model.AdditionalFiveArea.length == 0) {
            this.model.AdditionalFiveDamaged = "";
            this.model.AdditionalFiveDescription = "";
            this.model.AdditionalFiveSf = null;
        }
    }

    @Watch("model.AdditionalFiveDamaged")
    private AdditionalFiveDamaged() {
        if (this.model.AdditionalFiveDamaged !== 'Yes') {
            this.model.AdditionalFiveDescription = "";
            this.model.AdditionalFiveSf = null;
        }
    }

    @Watch("model.AtticDamaged")
    private ResetAttic() {
        if (this.model.AtticDamaged !== 'Yes') {
            this.model.AtticDescription = "";
            this.model.AtticSf = null;
        }
    }

    @Watch("model.BasementDamaged")
    private ResetBasement() {
        if (this.model.BasementDamaged !== 'Yes') {
            this.model.BasementDescription = "";
            this.model.BasementSf = null;
        }
    }

    @Watch("model.BathroomThreeDamaged")
    private ResetBathroomThree() {
        if (this.model.BathroomThreeDamaged !== 'Yes') {
            this.model.BathroomThreeDescription = "";
            this.model.BathroomThreeSf = null;
        }
    }

    @Watch("model.BathroomTwoDamaged")
    private ResetBathroomTwo() {
        if (this.model.BathroomTwoDamaged !== 'Yes') {
            this.model.BathroomTwoDescription = "";
            this.model.BathroomTwoSf = null;
        }
    }

    @Watch("model.BedroomFourDamaged")
    private ResetBedroomFour() {
        if (this.model.BedroomFourDamaged !== 'Yes') {
            this.model.BedroomFourDescription = "";
            this.model.BedroomFourSf = null;
        }
    }

    @Watch("model.BedroomFourClosetDamaged")
    private ResetBedroomFourCloset() {
        if (this.model.BedroomFourClosetDamaged !== 'Yes') {
            this.model.BedroomFourClosetDescription = "";
            this.model.BedroomFourClosetSf = null;
        }
    }

    @Watch("model.BedroomThreeDamaged")
    private ResetBedroomThree() {
        if (this.model.BedroomThreeDamaged !== 'Yes') {
            this.model.BedroomThreeDescription = "";
            this.model.BedroomThreeSf = null;
        }
    }

    @Watch("model.BedroomThreeClosetDamaged")
    private ResetBedroomThreeCloset() {
        if (this.model.BedroomThreeClosetDamaged !== 'Yes') {
            this.model.BedroomThreeClosetDescription = "";
            this.model.BedroomThreeClosetSf = null;
        }
    }

    @Watch("model.BedroomTwoDamaged")
    private ResetBedroomTwo() {
        if (this.model.BedroomTwoDamaged !== 'Yes') {
            this.model.BedroomTwoDescription = "";
            this.model.BedroomTwoSf = null;
        }
    }

    @Watch("model.BedroomTwoClosetDamaged")
    private ResetBedroomTwoCloset() {
        if (this.model.BedroomTwoClosetDamaged !== 'Yes') {
            this.model.BedroomTwoClosetDescription = "";
            this.model.BedroomTwoClosetSf = null;
        }
    }

    @Watch("model.BreakfastAreaDamaged")
    private ResetBreakfastArea() {
        if (this.model.BreakfastAreaDamaged !== 'Yes') {
            this.model.BreakfastAreaDescription = "";
            this.model.BreakfastAreaSf = null;
        }
    }

    @Watch("model.ContentsDamaged")
    private ResetContents() {
        if (this.model.ContentsDamaged !== 'Yes') {
            this.model.ContentsDescription = "";
        }
    }

    @Watch("model.CrawlSpaceDamaged")
    private ResetCrawlSpace() {
        if (this.model.CrawlSpaceDamaged !== 'Yes') {
            this.model.CrawlSpaceDescription = "";
            this.model.CrawlSpaceSf = null;
        }
    }

    @Watch("model.DiningRoomDamaged")
    private ResetDiningRoom() {
        if (this.model.DiningRoomDamaged !== 'Yes') {
            this.model.DiningRoomDescription = "";
            this.model.DiningRoomSf = null;
        }
    }

    @Watch("model.FamilyRoomDamaged")
    private ResetFamilyRoom() {
        if (this.model.FamilyRoomDamaged !== 'Yes') {
            this.model.FamilyRoomDescription = "";
            this.model.FamilyRoomSf = null;
        }
    }

    @Watch("model.FoyerDamaged")
    private ResetFoyer() {
        if (this.model.FoyerDamaged !== 'Yes') {
            this.model.FoyerDescription = "";
            this.model.FoyerSf = null;
        }
    }

    @Watch("model.GameRoomDamaged")
    private ResetGameRoom() {
        if (this.model.GameRoomDamaged !== 'Yes') {
            this.model.GameRoomDescription = "";
            this.model.GameRoomSf = null;
        }
    }


    @Watch("model.HallDamaged")
    private ResetHall() {
        if (this.model.HallDamaged !== 'Yes') {
            this.model.HallDescription = "";
            this.model.HallSf = null;
        }
    }

   @Watch("model.HallClosetDamaged")
    private ResetHallCloset() {
        if (this.model.HallClosetDamaged !== 'Yes') {
            this.model.HallClosetDescription = "";
            this.model.HallClosetSf = null;
        }
    }

    @Watch("model.KitchenDamaged")
    private ResetKitchen() {
        if (this.model.KitchenDamaged !== 'Yes') {
            this.model.KitchenDescription = "";
            this.model.KitchenSf = null;
        }
    }

    @Watch("model.LivingRoomDamaged")
    private ResetLivingRoom() {
        if (this.model.LivingRoomDamaged !== 'Yes') {
            this.model.LivingRoomDescription = "";
            this.model.LivingRoomSf = null;
        }
    }

    @Watch("model.MasterBathroomDamaged")
    private ResetMasterBathroom() {
        if (this.model.MasterBathroomDamaged !== 'Yes') {
            this.model.MasterBathroomDescription = "";
            this.model.MasterBathroomSf = null;
        }
    }

    @Watch("model.MasterBedroomDamaged")
    private ResetMasterBedroom() {
        if (this.model.MasterBedroomDamaged !== 'Yes') {
            this.model.MasterBedroomDescription = "";
            this.model.MasterBedroomSf = null;
        }
    }

    @Watch("model.MasterClosetDamaged")
    private ResetMasterCloset() {
        if (this.model.MasterClosetDamaged !== 'Yes') {
            this.model.MasterClosetDescription = "";
            this.model.MasterClosetSf = null;
        }
    }

    @Watch("model.OfficeDamaged")
    private ResetOffice() {
        if (this.model.OfficeDamaged !== 'Yes') {
            this.model.OfficeDescription = "";
            this.model.OfficeSf = null;
        }
    }

    @Watch("model.PantryDamaged")
    private ResetPantry() {
        if (this.model.PantryDamaged !== 'Yes') {
            this.model.PantryDescription = "";
            this.model.PantrySf = null;
        }
    }

    @Watch("model.UtilityDamaged")
    private ResetUtility() {
        if (this.model.UtilityDamaged !== 'Yes') {
            this.model.UtilityDescription = "";
            this.model.UtilitySf = null;
        }
    }
}
