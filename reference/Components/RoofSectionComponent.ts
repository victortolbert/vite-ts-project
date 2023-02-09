import { Component, Watch, Prop } from "vue-property-decorator";
import { PifEvents, EventBus } from "./../../Events";
import { SectionBase } from "../../SectionBase";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { MasterDataBuilder } from "../../HelperClasses/MasterDataBuilder";
import { filter } from "lodash";
import { AssetTypeEnum } from "../../ViewModels/Enums/AssetTypeEnum"; 
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";

//Components
import BooleanCameraWrapperComponent from "./Controls/BooleanCameraWrapperComponent";
import BooleanWrapperComponent from "./Controls/BooleanWrapperComponent";
import CheckboxCameraWrapperComponent from "./Controls/CheckboxCameraWrapperComponent";
import CheckboxWrapperComponent from "./Controls/CheckboxWrapperComponent";
import DirectionalCameraWrapperComponent from "./Controls/DirectionalCameraWrapperComponent";
import DirectionalNumericWrapperComponent from "./Controls/DirectionalNumericWrapperComponent";
import NumericWrapperComponent from "./Controls/NumericWrapperComponent";
import TextboxCameraWrapperComponent from "./Controls/TextboxCameraWrapperComponent";
import TextboxWrapperComponent from "./Controls/TextboxWrapperComponent";
import RoofDamagedItemsSectionComponent from "./../Pif/RoofDamagedItemsSectionComponent";
import NumericCameraWrapperComponent from "./Controls/NumericCameraWrapperComponent";
import CanvasButtonComponent from "./Controls/CanvasButtonComponent";

import { AssetUploadModel } from "../../ViewModels/AssetUploadModel";
import { FieldAsset } from "../../ViewModels/FieldAsset";
import { PropertyInspectionFormRoof } from "../../ViewModels/PropertyInspectionFormRoof";
import { SectionType } from "../../ViewModels/Enums/SectionType";
import { AssetFieldEnum } from "../../ViewModels/Enums/AssetFieldEnum"; 

@Component({
    template: "#roof-section-template",
    components: {
        BooleanCameraWrapperComponent,
        BooleanWrapperComponent,
        CheckboxWrapperComponent,
        CheckboxCameraWrapperComponent,
        NumericWrapperComponent,
        NumericCameraWrapperComponent,
        TextboxCameraWrapperComponent,
        TextboxWrapperComponent,
        DirectionalNumericWrapperComponent,
        DirectionalCameraWrapperComponent,
        RoofDamagedItemsSectionComponent,
        CanvasButtonComponent,       
    }
})

export default class RoofSectionComponent extends SectionBase<PropertyInspectionFormRoof> {
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

    @Prop({ required: true, type: String })
    north!: string;

    @Prop({ required: true, type: String })
    south!: string;

    @Prop({ required: true, type: String })
    east!: string;

    @Prop({ required: true, type: String })
    west!: string;

    @Prop({ required: true, type: Boolean, default: true })
    validate!: boolean; 

    model: PropertyInspectionFormRoof = new PropertyInspectionFormRoof();

    route: ApiDefaultRoute;
    masterRoofType = MasterDataBuilder.ReturnRoofType();
    masterRoofAge = MasterDataBuilder.ReturnRoofAge();
    masterLayerType = MasterDataBuilder.ReturnLayerType();
    masterRoofPitch = MasterDataBuilder.ReturnRoofPitch();
    masterValleyType = MasterDataBuilder.ReturnValleyType();
    masterGutterMaterial = MasterDataBuilder.ReturnGutterMaterial();
    masterShingleType = MasterDataBuilder.ReturnShingleType();
    masterStormDamage = MasterDataBuilder.ReturnStormDamageType();
    masterHailSize = MasterDataBuilder.ReturnHailSize();
    masterInstallationError = MasterDataBuilder.ReturnInstallationError();
    masterGutterSize = MasterDataBuilder.ReturnGutterSize();
    masterYesNo = MasterDataBuilder.ReturnYesNo();
    masterYesNoNa = MasterDataBuilder.ReturnYesNoNa();
    masterStories = MasterDataBuilder.ReturnStories();
    masterFeltMaterial = MasterDataBuilder.ReturnFeltMaterial();
    masterLayerNumber = MasterDataBuilder.ReturnLayerNumber();
    masterInstallationIssues = MasterDataBuilder.ReturnInstallationError();
    masterFasciaMaterials = MasterDataBuilder.ReturnFasciaMaterial();
    masterFasciaSize = MasterDataBuilder.ReturnFasciaSize();
    masterValleyMetal = MasterDataBuilder.ReturnValleyMetalMaterial();
    
    constructor() {
        super();
    }

    mounted() {
        
        this.route = new ApiDefaultRoute(this.exemplarApiUrl, "PropertyInspectionFormRoofs");  

        this.className = "Property Inspection Form Roof";

        EventBus.$on(PifEvents.LoadRoof, async () => {
            this.LoadSection();
        });

        EventBus.$on(PifEvents.RemoveRoof, async () => {
            this.model = new PropertyInspectionFormRoof();
            this.ready = false;
        });

        EventBus.$on(PifEvents.CreateRoof, async () => {
            this.model = new PropertyInspectionFormRoof();
            this.model.PropertyInspectionFormId = this.propertyInspectionFormId;
            this.model.Id = 0;
            this.ready = true;
        });

        EventBus.$on(PifEvents.SavePif, async () => {
           
            if (this.model.PropertyInspectionFormId != null) {
                if (this.model.Id > 0) {
                    if (this.hasChanges(this.model)) {
                        await this.Update(this.route.Update(this.model.Id, this.currentUserId), this.model, null, null, "Roof section record updated.");
                    }
                } else {
                    await this.Insert(this.route.Insert(), this.model, this.InsertSuccessCallback, this.InsertErrorCallback, "Roof section record created.");
                }
            }
        });

        EventBus.$on(PifEvents.RequestReportData, async () => {
            EventBus.$emit(PifEvents.SendReportData, this.model, SectionType.Roof);
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

    MasterRoofMaterial() {
        return MasterDataBuilder.ReturnRoofMaterial(this.isAllState);
    }

    InsertErrorCallback(data: any) {
        ToastrHelper.DisplayToastError(data, this.className);
    }

    InsertSuccessCallback(model: any) {
        this.model.Id = model.Id;
        this.model.CreatedOn = model.CreatedOn;
        this.model.LastModifiedOn = model.LastModifiedOn;
    }

    isBrittlenessTestVisible(property: string): boolean {


        if (this.model.StormDamage && this.model.BrittlenessTestConducted) {
          
            if (this.model.StormDamageType.includes('Other') && this.model.StormDamageType !== 'Wind' && this.model.StormDamageType !== 'Hail') {

                if (property !== null) {

                    return true;
                }
            } else if (!this.model.StormDamageType.includes('Other') && this.model.StormDamageType !== 'Wind' && this.model.StormDamageType === 'Hail') {

                //@ts-ignore
                if (property === 'BrittlenessTestNorth' && (this.model.HailDamageNorthSf > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestEast' && (this.model.HailDamageEastSf > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestWest' && (this.model.HailDamageWestSf > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestSouth' && (this.model.HailDamageSouthSf > 0)) {

                    return true;
                }

            } else if (!this.model.StormDamageType.includes('Other') && this.model.StormDamageType !== 'Wind' && this.model.StormDamageType !== 'Hail') {

                //@ts-ignore
                if (property === 'BrittlenessTestNorth' && (this.model.HailDamageNorthSf > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestEast' && (this.model.HailDamageEastSf > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestWest' && (this.model.HailDamageWestSf > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestSouth' && (this.model.HailDamageSouthSf > 0)) {

                    return true;
                }

            } else if (!this.model.StormDamageType.includes('Other') && this.model.StormDamageType !== 'Hail' && this.model.StormDamageType === 'Wind') {
                 //@ts-ignore
                if (property === 'BrittlenessTestNorth' && (this.model.WindDamageNorthOneSqft > 0 || this.model.WindDamageNorthTwoSqft > 0 || this.model.WindDamageNorthThreeSqft > 0 || this.model.WindDamageNorthFourSqft > 0 || this.model.WindDamageNorthFiveSqft > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestEast' && (this.model.WindDamageEastOneSqft > 0 || this.model.WindDamageEastTwoSqft > 0 || this.model.WindDamageEastThreeSqft > 0 || this.model.WindDamageEastFourSqft > 0 || this.model.WindDamageEastFiveSqft > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestWest' && (this.model.WindDamageWestOneSqft > 0 || this.model.WindDamageWestTwoSqft > 0 || this.model.WindDamageWestThreeSqft > 0 || this.model.WindDamageWestFourSqft > 0 || this.model.WindDamageWestFiveSqft > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestSouth' && (this.model.WindDamageSouthOneSqft > 0 || this.model.WindDamageSouthTwoSqft > 0 || this.model.WindDamageSouthThreeSqft > 0 || this.model.WindDamageSouthFourSqft > 0 || this.model.WindDamageSouthFiveSqft > 0)) {

                    return true;
                }

            } else if (!this.model.StormDamageType.includes('Other') && this.model.StormDamageType.includes('Wind') && this.model.StormDamageType.includes('Hail')) {
                  //@ts-ignore
                if (property === 'BrittlenessTestNorth' && (this.model.HailDamageNorthSf > 0 || this.model.WindDamageNorthOneSqft > 0 || this.model.WindDamageNorthTwoSqft > 0 || this.model.WindDamageNorthThreeSqft > 0 || this.model.WindDamageNorthFourSqft > 0 || this.model.WindDamageNorthFiveSqft > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestEast' && (this.model.HailDamageEastSf > 0 || this.model.WindDamageEastOneSqft > 0 || this.model.WindDamageEastTwoSqft > 0 || this.model.WindDamageEastThreeSqft > 0 || this.model.WindDamageEastFourSqft > 0 || this.model.WindDamageEastFiveSqft > 0)) {

                    return true;
                }

                //@ts-ignore
                if (property === 'BrittlenessTestWest' && (this.model.HailDamageWestSf > 0 || this.model.WindDamageWestOneSqft > 0 || this.model.WindDamageWestTwoSqft > 0 || this.model.WindDamageWestThreeSqft > 0 || this.model.WindDamageWestFourSqft > 0 || this.model.WindDamageWestFiveSqft > 0)) {

                    return true;
                }

               //@ts-ignore
                if (property === 'BrittlenessTestSouth' && (this.model.HailDamageSouthSf > 0 || this.model.WindDamageSouthOneSqft > 0 || this.model.WindDamageSouthTwoSqft > 0 || this.model.WindDamageSouthThreeSqft > 0 || this.model.WindDamageSouthFourSqft > 0 || this.model.WindDamageSouthFiveSqft > 0)) {

                    return true;
                }

             }
          
        }
    
        return false;
    }

    GetModelSuccessCallback(model: PropertyInspectionFormRoof) {
        this.model = model;
        if (this.model == null && this.error == false) {
            this.model = new PropertyInspectionFormRoof();
            this.model.PropertyInspectionFormId = this.propertyInspectionFormId;
            this.model.Id = 0;
        } 
        this.ready = true;
    }

    ValidateQty(currentValue: number, parentProperty: string, childProperty: string) {

        //@ts-ignore
        this.model[childProperty] = null

        //@ts-ignore
        this.model[parentProperty] = currentValue
    }

    ValidateQtyDamaged(currentValue: number, parentProperty: string, childProperty: string) {

        //@ts-ignore
        this.model[childProperty] = currentValue;

        this.$nextTick(function () {
            //@ts-ignore
            if (currentValue > this.model[parentProperty]) {

                //@ts-ignore
                this.model[childProperty] = null;
            } else {
                //@ts-ignore
                this.model[childProperty] = currentValue;
            }
        });

    }

    async LoadSection() {
        await this.GetModel(this.route.Get(this.propertyInspectionFormId), this.GetModelSuccessCallback);
    }

    @Watch("model.DripEdgeEavePresent")
    private ResetDripEdgeEavePresent() {
        if (!this.model.DripEdgeEavePresent) {
            this.model.DripEdgeEavePainted = null;
            this.model.DripEdgeEaveQty = null;
            this.model.DripEdgeEaveQtyDamaged = null;
        }
    }

    @Watch("model.DripEdgeRakePresent")
    private ResetDripEdgeRake() {
        if (!this.model.DripEdgeRakePresent) {
            this.model.DripEdgeRakePainted = null;
            this.model.DripEdgeRakeQty = null;
            this.model.DripEdgeRakeQtyDamaged = null;
        }
    }
   
    @Watch("model.RoofType")
    private ResetRoofType() {
        if (this.model.RoofType !== 'Other') {
            this.model.RoofTypeOther = "";
        }
    }

    @Watch("model.RoofMaterial")
    private ResetRoofMaterial() {
        if (this.model.RoofMaterial !== 'Other') {
            this.model.RoofMaterialOther = "";
        }
    }

    @Watch("model.IceWaterShield")
    private ResetIceWaterShield() {
        if (!this.model.IceWaterShield) {
            this.model.IceWaterShieldLf = null;
        }
    }

    @Watch("model.DripEdge")
    private ResetDripEdge() {
        if (!this.model.DripEdge) {
            this.model.DripEdgeLf = null;
        }
    }

    @Watch("model.Stories")
    private ResetStories() {
        if (String(this.model.Stories).length == 0 ||  this.model.Stories!=0) {
            this.model.StoriesOther = null;
        }
    }

    @Watch("model.Felt")
    private ResetFelt() {
        if (!this.model.Felt) {
            this.model.FeltDescription = "";
        }
    }

    @Watch("model.LayerType")
    private ResetLayerType() {
        if (this.model.LayerType != "Other") {
            this.model.LayerTypeOther = "";
        }
    }

    private ResetGutters() {

    }

    @Watch("model.GutterPresent")
    private ResetGutterPresent() {
        if (!this.model.GutterPresent) {
            this.model.GutterPainted = null;
            this.model.GutterMaterial = "";
            this.model.GutterMaterialOther = "";
            this.model.GutterSize = "";
            this.model.GutterSizeOther = "";
            this.model.GuttersDamage = "";
            this.model.GutterDescription = "";
            this.model.GutterNorthDamaged = null;
            this.model.GutterEastDamaged = null;
            this.model.GutterSouthDamaged = null;
            this.model.GutterWestDamaged = null;
            this.model.GutterNorthLf = null;
            this.model.GutterEastLf = null;
            this.model.GutterWestLf = null;
            this.model.GutterSouthLf = null;
            this.model.CloggedGutterDamage = null;
            this.model.CloggedGuttersNorth = "";
            this.model.CloggedGuttersEast = "";
            this.model.CloggedGuttersSouth = "";
            this.model.CloggedGuttersWest = "";
        }
    }

    @Watch("model.GuttersDamage")
    private ResetGuttersDamage() {
        if (this.model.GuttersDamage !== "Yes") {
            this.model.GutterNorthDamaged = null;
            this.model.GutterEastDamaged = null;
            this.model.GutterSouthDamaged = null;
            this.model.GutterWestDamaged = null;
            this.model.GutterNorthLf = null;
            this.model.GutterEastLf = null;
            this.model.GutterWestLf = null;
            this.model.GutterSouthLf = null;
        }
    }

    @Watch("model.GutterMaterial")
    private ResetGutterMaterial() {
        if (this.model.GutterMaterial != "Other") {
            this.model.GutterMaterialOther = "";
        }
    }

    @Watch("model.GutterSize")
    private ResetGutterSize() {
        if (this.model.GutterSize != "Other") {
            this.model.GutterSizeOther = "";
        }
    }

    @Watch("model.GutterNorthDamaged")
    private ResetGutterNorthDamaged() {
        if (!this.model.GutterNorthDamaged) {
            this.model.GutterNorthLf = null;
        }
    }

    @Watch("model.GutterSouthDamaged")
    private ResetGutterSouthDamaged() {
        if (!this.model.GutterSouthDamaged) {
            this.model.GutterSouthLf = null;
        }
    }

    @Watch("model.GutterEastDamaged")
    private ResetGutterEastDamaged() {
        if (!this.model.GutterEastDamaged) {
            this.model.GutterEastLf = null;
        }
    }

    @Watch("model.GutterWestDamaged")
    private ResetGutterWestDamaged() {
        if (!this.model.GutterWestDamaged) {
            this.model.GutterWestLf = null;
        }
    }

    @Watch("model.BrittlenessTestNorth")
    private ResetBrittlenessTestNorth() {
        if (!this.model.BrittlenessTestNorth) {
            this.model.BrittlenessTestNorthPass = '';
        }
    }

    @Watch("model.BrittlenessTestSouth")
    private ResetBrittlenessTestSouth() {
        if (!this.model.BrittlenessTestSouth) {
            this.model.BrittlenessTestSouthPass = '';
        }
    }


    @Watch("model.BrittlenessTestEast")
    private ResetBrittlenessTestEast() {
        if (!this.model.BrittlenessTestEast) {
            this.model.BrittlenessTestEastPass = '';
        }
    }

    @Watch("model.BrittlenessTestWest")
    private ResetBrittlenessTestWest() {
        if (!this.model.BrittlenessTestWest) {
            this.model.BrittlenessTestWestPass = '';
        }
    }

    @Watch("model.BrittlenessTestConducted")
    private ResetBrittlenessTestConducted() {
        if (!this.model.BrittlenessTestConducted) {
            this.model.BrittlenessTestNorth = null;
            this.model.BrittlenessTestSouth = null;
            this.model.BrittlenessTestEast = null;
            this.model.BrittlenessTestWest = null;
            this.model.BrittlenessTestNorthPass = "";
            this.model.BrittlenessTestSouthPass = "";
            this.model.BrittlenessTestEastPass = "";
            this.model.BrittlenessTestWestPass = "";
        } 
     }

    @Watch("model.FasciaDamaged")
    private ResetFascia() {
        if (this.model.FasciaDamaged === 'NA') {
            this.model.FasciaNorthDamaged = "";
            this.model.FasciaEastDamaged = "";
            this.model.FasciaSouthDamaged = "";
            this.model.FasciaWestDamaged = "";
            this.model.FasciaNorthLf = null;
            this.model.FasciaEastLf = null;
            this.model.FasciaWestLf = null;
            this.model.FasciaSouthLf = null;
        }
        else if (this.model.FasciaDamaged == 'No') {
            this.model.FasciaNorthDamaged = "No";
            this.model.FasciaEastDamaged = "No";
            this.model.FasciaSouthDamaged = "No";
            this.model.FasciaWestDamaged = "No";
            this.model.FasciaNorthLf = null;
            this.model.FasciaEastLf = null;
            this.model.FasciaWestLf = null;
            this.model.FasciaSouthLf = null;
        }
    }

    @Watch("model.FasciaMaterial")
    private ResetFasciaMaterial() {
        if (this.model.FasciaMaterial != 'Other') {
            this.model.FasciaMaterialOther = "";
        }
    }

    @Watch("model.FasciaSize")
    private ResetFasciaSize() {
        if (String(this.model.FasciaSize).length == 0 || this.model.FasciaSize != 0) {
            this.model.FasciaSizeOther = null;
        }
    }

    @Watch("model.FasciaNorthDamaged")
    private ResetFasciaNorthDamaged() {
        if (this.model.FasciaNorthDamaged !== 'Yes') {
            this.model.FasciaNorthLf = null;
        }
    }

    @Watch("model.FasciaSouthDamaged")
    private ResetFasciaSouthDamaged() {
        if (this.model.FasciaSouthDamaged !== 'Yes') {
            this.model.FasciaSouthLf = null;
        }
    }

    @Watch("model.FasciaEastDamaged")
    private ResetFasciaEastDamaged() {
        if (this.model.FasciaEastDamaged !== 'Yes') {
            this.model.FasciaEastLf = null;
        }
    }

    @Watch("model.FasciaWestDamaged")
    private ResetFasciaWestDamaged() {
        if (this.model.FasciaWestDamaged !== 'Yes') {
            this.model.FasciaWestLf = null;
        }
    }

    @Watch("model.PriorRepairs")
    private ResetPriorRepairs() {
        if (this.model.PriorRepairs != "Yes") {
            this.model.PriorRepairsEast = "";
            this.model.PriorRepairsWest = "";
            this.model.PriorRepairsSouth = "";
            this.model.PriorRepairsNorth = "";
        }
    }

    private InitializeWindDamage() {
        this.model.WindDamageEastFiveSqft = 0;
        this.model.WindDamageEastFourSqft = 0;
        this.model.WindDamageEastOneSqft = 0;
        this.model.WindDamageEastThreeSqft = 0;
        this.model.WindDamageEastTwoSqft = 0;

        this.model.WindDamageNorthFiveSqft = 0;
        this.model.WindDamageNorthFourSqft = 0;
        this.model.WindDamageNorthOneSqft = 0;
        this.model.WindDamageNorthThreeSqft = 0;
        this.model.WindDamageNorthTwoSqft = 0;

        this.model.WindDamageSouthFiveSqft = 0;
        this.model.WindDamageSouthFourSqft = 0;
        this.model.WindDamageSouthOneSqft = 0;
        this.model.WindDamageSouthThreeSqft = 0;
        this.model.WindDamageSouthTwoSqft = 0;

        this.model.WindDamageWestFiveSqft = 0;
        this.model.WindDamageWestFourSqft = 0;
        this.model.WindDamageWestOneSqft = 0;
        this.model.WindDamageWestThreeSqft = 0;
        this.model.WindDamageWestTwoSqft = 0;
    }
    private InitializeHailDamage() {
     if (this.model.HailDamageEastSf == null) {
            this.model.HailDamageEastSf = 0;
        }
        if (this.model.HailDamageNorthSf == null) {
            this.model.HailDamageNorthSf = 0;
        }
        if (this.model.HailDamageSouthSf == null) {
            this.model.HailDamageSouthSf = 0;
        }
        if (this.model.HailDamageWestSf == null) {
            this.model.HailDamageWestSf = 0;
        }
    }

    @Watch("model.StormDamage")
    private ResetStormDamage() {
        if (!this.model.StormDamage) {
            this.model.StormDirection = "";
            this.model.StormDamageType = "";
            this.InitializeWindDamage();
            this.InitializeHailDamage();
            this.model.BrittlenessTestConducted = false;
        }
    }


    @Watch("model.StormDamageType")
    private ResetStormDamageType() {
        if (!this.model.StormDamageType.includes('Wind')) {
            this.InitializeWindDamage();
        } 
    }

    @Watch("model.InstallationError")
    private ResetInstallation() {
        if (!this.model.InstallationError) {
            this.model.InstallationErrorDescription = "";
            this.model.InstallationErrorDescriptionOther = "";
        }
    }

    @Watch("model.InstallationErrorDescription")
    private ResetInstallationError() {
        if (this.model.InstallationErrorDescription.length == 0) {
            this.model.InstallationErrorDescription = "";
            
        } else if (this.model.InstallationErrorDescription.endsWith("Other")) {
            this.model.InstallationErrorDescription = "Other";
        } else{
            this.model.InstallationErrorDescription = this.model.InstallationErrorDescription.replace("Other", "");
            this.model.InstallationErrorDescriptionOther = "";
        }
            
    }
    //else if(this.model.InstallationErrorDescription.includes("Other") && this.model.InstallationErrorDescription.length > 6)
    @Watch("model.OtherConditions")
    private ResetOtherConditions() {
        if (!this.model.OtherConditions) {
            this.model.OtherConditionsDescription = "";
            this.model.OtherConditionsName = "";
            this.model.OtherConditionsNorth = "";
            this.model.OtherConditionsSouth = "";
            this.model.OtherConditionsEast = "";
            this.model.OtherConditionsWest = "";
        }
    }

    @Watch("model.PitchNorth")
    private ResetPitchNorth() {
        if (this.model.PitchNorth != 'Other') {
            this.model.PitchNorthOther = "";
        }
    }

    @Watch("model.PitchEast")
    private ResetPitchEast() {
        if (this.model.PitchEast != 'Other') {
            this.model.PitchEastOther = "";
        }
    }

    @Watch("model.PitchWest")
    private ResetPitchWest() {
        if (this.model.PitchWest != 'Other') {
            this.model.PitchWestOther = "";
        }
    }

    @Watch("model.PitchSouth")
    private ResetPitchv() {
        if (this.model.PitchSouth != 'Other') {
            this.model.PitchSouthOther = "";
        }
    }
        
    @Watch("model.RoofMeasured")
    private ResetRoofMeasured() {
        if (!this.model.RoofMeasured) {
            this.model.RoofPitchZeroSqft = null;
            this.model.RoofPitchSevenSqft = null;
            this.model.RoofPitchTenSqft = null;
            this.model.RoofStoryOneSqft = null;
            this.model.RoofStoryTwoSqft = null;
        }
    }

    @Watch("model.OutBuildingDamage")
    private ResetOutBuildingDamage() {
        if (!this.model.OutBuildingDamage) {
            this.model.OutBuildingNotes = "";
        }
    }

    @Watch("model.BlisterDamage")
    private ResetBlisterDamage() {
        if (!this.model.BlisterDamage) {
            this.model.BlistersEast = "";
            this.model.BlistersNorth = "";
            this.model.BlistersSouth = "";
            this.model.BlistersWest = "";
        }
    }

    @Watch("model.CloggedGutterDamage")
    private ResetCloggedGutterDamage() {
        if (!this.model.CloggedGutterDamage) {
            this.model.CloggedGuttersEast = "";
            this.model.CloggedGuttersNorth = "";
            this.model.CloggedGuttersSouth = "";
            this.model.CloggedGuttersWest = "";
        }
    }

    @Watch("model.CuppedDamage")
    private ResetCuppedDamage() {
        if (!this.model.CuppedDamage) {
            this.model.CuppedEast = "";
            this.model.CuppedNorth = "";
            this.model.CuppedSouth = "";
            this.model.CuppedWest = "";
        }
    }

    @Watch("model.DeckingRottedDamage")
    private ResetDeckingRottedDamage() {
        if (!this.model.DeckingRottedDamage) {
            this.model.DeckingRottedEast = "";
            this.model.DeckingRottedNorth = "";
            this.model.DeckingRottedSouth = "";
            this.model.DeckingRottedWest = "";
        }
    }

    @Watch("model.FlashingNotSealedDamage")
    private ResetFlashingNotSealedDamage() {
        if (!this.model.FlashingNotSealedDamage) {
            this.model.FlashingNotSealedEast = "";
            this.model.FlashingNotSealedNorth = "";
            this.model.FlashingNotSealedSouth = "";
            this.model.FlashingNotSealedWest = "";
        }
    }

    @Watch("model.GranuleLossDamage")
    private ResetGranuleLossDamage() {
        if (!this.model.GranuleLossDamage) {
            this.model.GranuleLossEast = "";
            this.model.GranuleLossNorth = "";
            this.model.GranuleLossSouth = "";
            this.model.GranuleLossWest = "";
        }
    }

    @Watch("model.ManufacturedMarkDamage")
    private ResetManufacturedMarkDamage() {
        if (!this.model.ManufacturedMarkDamage) {
            this.model.ManufacturedMarksEast = "";
            this.model.ManufacturedMarksNorth = "";
            this.model.ManufacturedMarksSouth = "";
            this.model.ManufacturedMarksWest = "";
        }
    }

    @Watch("model.MechanicalMarkDamage")
    private ResetMechanicalMarkDamage() {
        if (!this.model.MechanicalMarkDamage) {
            this.model.MechanicalMarksEast = "";
            this.model.MechanicalMarksNorth = "";
            this.model.MechanicalMarksSouth = "";
            this.model.MechanicalMarksWest = "";
        }
    }


    @Watch("model.NailPopDamage")
    private ResetNailPopDamage() {
        if (!this.model.NailPopDamaged) {
            this.model.NailPopsEast = "";
            this.model.NailPopsNorth = "";
            this.model.NailPopsSouth = "";
            this.model.NailPopsWest = "";
        }
    }


    @Watch("model.RoofDebrisDamaged")
    private ResetRoofDebrisDamage() {
        if (!this.model.RoofDebrisDamaged) {
            this.model.RoofDebrisEast = "";
            this.model.RoofDebrisNorth = "";
            this.model.RoofDebrisSouth = "";
            this.model.RoofDebrisWest = "";
        }
    }

    @Watch("model.ThermalCrackingDamage")
    private ResetThermalCrackingDamage() {
        if (!this.model.ThermalCrackingDamage) {
            this.model.ThermalCrackingEast = "";
            this.model.ThermalCrackingNorth = "";
            this.model.ThermalCrackingSouth = "";
            this.model.ThermalCrackingWest = "";
        }
    }

    @Watch("model.ValleyMetalPresent")
    private ResetValleyMetalPresent() {
        if (!this.model.ValleyMetalPresent) {
            this.model.ValleyMetalMaterial = "";
            this.model.ValleyMetalPainted = null;
            this.model.ValleyMetalQty = null;
            this.model.ValleyMetalQtyDamaged = null;
        }
    }
}
