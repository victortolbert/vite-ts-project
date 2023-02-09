import { Component, Watch, Prop} from "vue-property-decorator";
import { PropertyInspectionFormRoofDamagedItem } from "../../ViewModels/PropertyInspectionFormRoofDamagedItem"; 
import { PifEvents, EventBus } from "./../../Events";
import { SectionBase } from "../../SectionBase";
import { filter } from "lodash";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { AssetUploadModel } from "../../ViewModels/AssetUploadModel"; 
import { MasterDataBuilder } from "../../HelperClasses/MasterDataBuilder";
import { FieldAsset } from "../../ViewModels/FieldAsset"; 
import { SectionType } from "../../ViewModels/Enums/SectionType";
import { AssetTypeEnum } from "../../ViewModels/Enums/AssetTypeEnum"; 
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";

//Components
import BooleanCameraWrapperComponent from "./Controls/BooleanCameraWrapperComponent";
import BooleanWrapperComponent from "./Controls/BooleanWrapperComponent";
import NumericWrapperComponent from "./Controls/NumericWrapperComponent";
import NumericCameraWrapperComponent from "./Controls/NumericCameraWrapperComponent";
import CheckboxWrapperComponent from "./Controls/CheckboxWrapperComponent";

@Component({
    template: "#roof-damaged-items-section-template",
    components: {
        BooleanCameraWrapperComponent,
        BooleanWrapperComponent,
        NumericWrapperComponent,
        CheckboxWrapperComponent,
        NumericCameraWrapperComponent
    }
})

export default class RoofDamagedItemsSectionComponent extends SectionBase<PropertyInspectionFormRoofDamagedItem> {
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

    model: PropertyInspectionFormRoofDamagedItem = new PropertyInspectionFormRoofDamagedItem();

    route: ApiDefaultRoute;

    masterBoxVent = MasterDataBuilder.ReturnBoxVent();
    masterPowerVentMaterial = MasterDataBuilder.ReturnPowerVentMaterial();
    masterRidgeVentMaterial = MasterDataBuilder.ReturnRidgeVentMaterial();
    masterValleyMetal = MasterDataBuilder.ReturnValleyMetalMaterial();
    masterPipeBootMaterial = MasterDataBuilder.ReturnPipebootMaterial();

    constructor() {
        super();
    }

    mounted() {

        this.route = new ApiDefaultRoute(this.exemplarApiUrl, "PropertyInspectionFormRoofDamagedItems");

        this.className = "Property Inspection Form Roof Damaged Item";

        this.LoadSection();

        EventBus.$on(PifEvents.RemoveRoof, async () => {
            this.model = new PropertyInspectionFormRoofDamagedItem();
            this.ready = false;
        });

        EventBus.$on(PifEvents.SavePif, async () => {
             if (this.model.PropertyInspectionFormId != null) {
                if (this.model.Id > 0) {
                    if (this.hasChanges(this.model)) {
                        await this.Update(this.route.Update(this.model.Id, this.currentUserId), this.model, null, null, "Roof Damaged Item section record updated.");
                    }
                } else {
                    await this.Insert(this.route.Insert(), this.model, this.InsertSuccessCallback, this.InsertErrorCallback, "Roof Damaged Item section record created.");
                }
            }
        });

        EventBus.$on(PifEvents.RequestReportData, async () => {
            EventBus.$emit(PifEvents.SendReportData, this.model, SectionType.RoofDamageItem);
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
        this.model.Id = model.Id;
        this.model.CreatedOn = model.CreatedOn;
        this.model.LastModifiedOn = model.LastModifiedOn;
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

    GetModelSuccessCallback(model: PropertyInspectionFormRoofDamagedItem) {
        this.model = model;
        if (this.model == null && this.error == false) {
            this.model = new PropertyInspectionFormRoofDamagedItem();
            this.model.PropertyInspectionFormId = this.propertyInspectionFormId;
            this.model.Id = 0;
        } 
        this.ready = true;
    }

    async LoadSection() {
        await this.GetModel(this.route.Get(this.propertyInspectionFormId), this.GetModelSuccessCallback);
    }

    @Watch("model.BoxVentsPresent")
    private ResetBoxVentsPresent() {
        if (! this.model.BoxVentsPresent) {
            this.model.BoxVentsMaterial = "";
            this.model.BoxVentsPainted = null;
            this.model.BoxVentsQty = null;
            this.model.BoxVentsQtyDamaged = null;
        }
    }

    @Watch("model.CanVentsPresent")
    private ResetCanVentsPresent() {
        if (!this.model.CanVentsPresent) {
             this.model.CanVentsPainted = null;
            this.model.CanVentsQty = null;
            this.model.CanVentsQtyDamaged = null;
        }
    }
    @Watch("model.ChimneyCapSmallPresent")
    private ResetChimneyCapSmallPresent() {
        if (!this.model.ChimneyCapSmallPresent) {
            this.model.ChimneyCapSmallPainted = null;
            this.model.ChimneyCapSmallQty = null;
            this.model.ChimneyCapSmallQtyDamaged = null;
        }
    }

    @Watch("model.ChimneyCapMediumPresent")
    private ResetChimneyCapMediumPresent() {
        if (!this.model.ChimneyCapMediumPresent) {
            this.model.ChimneyCapMediumPainted = null;
            this.model.ChimneyCapMediumQty = null;
            this.model.ChimneyCapMediumQtyDamaged = null;
        }
    }

    @Watch("model.ChimneyCapLargePresent")
    private ResetChimneyCapLargePresent() {
        if (!this.model.ChimneyCapLargePresent) {
            this.model.ChimneyCapLargePainted = null;
            this.model.ChimneyCapLargeQty = null;
            this.model.ChimneyCapLargeQtyDamaged = null;
        }
    }

    @Watch("model.DryerExhaustPresent")
    private ResetDryerExhaustPresent() {
        if (!this.model.DryerExhaustPresent) {
            this.model.DryerExhaustPainted = null;
            this.model.DryerExhaustQty = null;
            this.model.DryerExhaustQtyDamaged = null;
        }
    }

    @Watch("model.FlashingPresent")
    private ResetFlashingPresent() {
        if (!this.model.FlashingPresent) {
            this.model.FlashingPainted = null;
            this.model.FlashingQty = null;
            this.model.FlashingQtyDamaged = null;
        }
    }

    @Watch("model.FlatRoofScupperDrainPresent")
    private ResetFlatRoofScupperDrainPresent() {
        if (!this.model.FlatRoofScupperDrainPresent) {
            this.model.FlatRoofScupperDrainPainted = null;
            this.model.FlatRoofScupperDrainQty = null;
            this.model.FlatRoofScupperDrainQtyDamaged = null;
        }
    }

    @Watch("model.GableVentPresent")
    private ResetGableVentPresent() {
        if (!this.model.GableVentPresent) {
             this.model.GableVentQty = null;
            this.model.GableVentQtyDamaged = null;
        }
    }

    @Watch("model.HvacFourPresent")
    private ResetHvacFourPresent() {
        if (!this.model.HvacFourPresent) {
             this.model.HvacFourPainted = null;
            this.model.HvacFourQty = null;
            this.model.HvacFourQtyDamaged = null;
        }
    }

    @Watch("model.HvacSixPresent")
    private ResetHvacSixPresent() {
        if (!this.model.HvacSixPresent) {
            this.model.HvacSixPainted = null;
            this.model.HvacSixQty = null;
            this.model.HvacSixQtyDamaged = null;
        }
    }

    @Watch("model.HvacEightPresent")
    private ResetHvacEightPresent() {
        if (!this.model.HvacEightPresent) {
            this.model.HvacEightPainted = null;
            this.model.HvacEightQty = null;
            this.model.HvacEightQtyDamaged = null;
        }
    }

    @Watch("model.HvacOtherPresent")
    private ResetHvacOtherPresent() {
        if (!this.model.HvacOtherPresent) {
            this.model.HvacOtherPainted = null;
            this.model.HvacOtherSize = null;
            this.model.HvacOtherQty = null;
            this.model.HvacOtherQtyDamaged = null;
        }
    }

    @Watch("model.MastheadPresent")
    private ResetMastheadPresent() {
        if (!this.model.MastheadPresent) {
            this.model.MastheadPainted = null;
            this.model.MastheadQty = null;
            this.model.MastheadQtyDamaged = null;
        }
    }

    @Watch("model.OffRidgeVentsPresent")
    private ResetOffRidgeVentsPresent() {
        if (!this.model.OffRidgeVentsPresent) {
            this.model.OffRidgeVentsMaterial = "";
            this.model.OffRidgeVentsQty = null;
            this.model.OffRidgeVentsQtyDamaged = null;
        }
    }

    @Watch("model.LeadPipebootPresent")
    private ResetLeadPipebootPresent() {
        if (!this.model.LeadPipebootPresent) {
            this.model.LeadPipebootPainted = null;
            this.model.LeadPipebootQty = null;
            this.model.LeadPipebootQtyDamaged = null;
        }
    }

    @Watch("model.PlasticPipebootPresent")
    private ResetPlasticPipebootPresent() {
        if (!this.model.PlasticPipebootPresent) {
             this.model.PlasticPipebootPainted = null;
            this.model.PlasticPipebootQty = null;
            this.model.PlasticPipebootQtyDamaged = null;
        }
    }

    @Watch("model.PowerVentsPresent")
    private ResetPowerVentsPresent() {
        if (!this.model.PowerVentsPresent) {
            this.model.PowerVentsMaterial = "";
            this.model.PowerVentsPainted = null;
            this.model.PowerVentsQty = null;
            this.model.PowerVentsQtyDamaged = null;
        }
    }

    @Watch("model.PowerVentCoversPresent")
    private PowerVentCoversPresent() {
        if (!this.model.PowerVentCoversPresent) {
            this.model.PowerVentCoversMaterial = "";
            this.model.PowerVentCoversPainted = null;
            this.model.PowerVentCoversQty = null;
            this.model.PowerVentCoversQtyDamaged = null;
        }
    }

    @Watch("model.RainDivertersPresent")
    private ResetRainDivertersPresent() {
        if (!this.model.RainDivertersPresent) {
            this.model.RainDivertersQty = null;
            this.model.RainDivertersQtyDamaged = null;
        }
    }

    @Watch("model.RidgeVentsPresent")
    private ResetRidgeVentsPresent() {
        if (!this.model.RidgeVentsPresent) {
            this.model.RidgeVentsMaterial = "";
            this.model.RidgeVentsPainted = null;
            this.model.RidgeVentsQty = null;
            this.model.RidgeVentsQtyDamaged = null;
        }
    }

    @Watch("model.SatelliteDishPresent")
    private ResetSatelliteDishPresent() {
        if (!this.model.SatelliteDishPresent) {
             this.model.SatelliteDishQty = null;
            this.model.SatelliteDishQtyDamaged = null;
        }
    }

    @Watch("model.SkylightsPresent")
    private ResetSkylightsPresent() {
        if (!this.model.SkylightsPresent) {
             this.model.SkylightsPainted = null;
            this.model.SkylightsQty = null;
            this.model.SkylightsQtyDamaged = null;
        }
    }

    @Watch("model.SoffitVentsPresent")
    private ResetSoffitVentsPresent() {
        if (!this.model.SoffitVentsPresent) {
            this.model.SoffitVentsPainted = null;
            this.model.SoffitVentsQty = null;
            this.model.SoffitVentsQtyDamaged = null;
        }
    }

    @Watch("model.SolarPanelPresent")
    private ResetSolarPanelPresent() {
        if (!this.model.SolarPanelPresent) {
            this.model.SolarPanelPainted = null;
            this.model.SolarPanelQty = null;
            this.model.SolarPanelQtyDamaged = null;
        }
    }

    @Watch("model.SwampCoolerPresent")
    private ResetSwampCoolerPresent() {
        if (!this.model.SwampCoolerPresent) {
            this.model.SwampCoolerPainted = null;
            this.model.SwampCoolerQty = null;
            this.model.SwampCoolerQtyDamaged = null;
        }
    }

    @Watch("model.TurbinesPresent")
    private ResetTurbinesPresent() {
        if (!this.model.TurbinesPresent) {
             this.model.TurbinesPainted = null;
            this.model.TurbinesQty = null;
            this.model.TurbinesQtyDamaged = null;
        }
    }

    @Watch("model.OtherPresent")
    private ResetOtherPresent() {
        if (!this.model.OtherPresent) {
            this.model.OtherQty = null;
            this.model.OtherQtyDamaged = null;
        }
    }


}
