import Vue from "Vue";
import { Component, Watch, Prop } from "vue-property-decorator";
import { ApiPropertyInspectionAssetRoutes } from "../../Routes/ApiPropertyInspectionAssetRoutes";
import { MvcAssetUtilityRoutes } from "@ExemplarRoutes/MvcAssetUtilityRoutes";
import { ApiDefaultRoute } from "@ExemplarRoutes/ApiDefaultRoute";
import { Asset } from "../../ViewModels/Asset";
import { ToastrHelper } from "@ExemplarCommon/ToastrHelper";
import { PifEvents, EventBus } from "./../../Events";
import { AssetUploadModel } from "../../ViewModels/AssetUploadModel"
import { AssetDetails } from "../../ViewModels/AssetDetails"
import { forEach, last, find, findIndex, concat, filter, split } from "lodash";
import { UploadHelper } from "../../HelperClasses/UploadHelper";
import "@progress/kendo-ui";
import { BModal, BButton, BDropdown, BDropdownItemButton, BAlert} from 'bootstrap-vue'
// import "@progress/kendo-theme-bootstrap/dist/all.css"
import KendoUpload from "@progress/kendo-upload-vue-wrapper/dist/es/KendoUpload/index";
import KendoSwitch from "@progress/kendo-inputs-vue-wrapper/dist/es/KendoSwitch/index";
import { lazyInject } from "../../IocContainer";
import { IDeleteBatchService } from "@ExemplarServices/IDeleteBatchService";
import { CustomAssetHelper } from "../../HelperClasses/CustomAssetHelper";
import AssetUploadComponent from "../AssetUploadComponent";
import { AssetEmail } from "../../ViewModels/AssetEmail";
import { SectionBase } from "../../SectionBase";
import { ProjectDetails } from "../../ViewModels/ProjectDetails";
import { CustomAssetDetails } from "../../ViewModels/CustomAssetDetails";
import { AssetTypeEnum } from "../../ViewModels/Enums/AssetTypeEnum";
import { AssetFieldEnum } from "../../ViewModels/Enums/AssetFieldEnum";
import { EditModal } from "@ExemplarScripts/Modals/EditModal";
import { IValidator } from "@ExemplarInterfaces/IValidator";
import { PropertyInspectionForm } from "../../ViewModels/PropertyInspectionForm";
import { CustomAsset } from "../../ViewModels/CustomAsset";

Vue.component('kendo-upload', KendoUpload)
Vue.component('kendo-switch', KendoSwitch)

@Component({
    template: "#asset-grid-template",
    components: { AssetUploadComponent, BModal, BButton, BDropdown, BDropdownItemButton, BAlert}
})

export default class AssetGridComponent extends SectionBase<Array<Asset>> {
    @lazyInject("IDeleteBatchService<Array<Asset>>")
    AssetDeleteService!: IDeleteBatchService<Array<Asset>>;

    @lazyInject("IValidator<Asset>")
    validatorService!: IValidator<Asset>;

    @Prop({ required: true, type: String })
    imgPath!: string;

    @Prop({ required: true, type: String })
    imgToken!: string;

    allowMultiples: boolean = false;

    assetCount: string = "";

    assetDownloadRoute: string = "/PropertyInspection/Asset/DownloadAsset";

    assetFieldEnum: any = AssetFieldEnum;

    assetTypeEnum: any = AssetTypeEnum;

    assetUtilityRoutes: MvcAssetUtilityRoutes;

    assetVaultPath: string = <string>$("#assetVaultPath").val();

    editModal: EditModal<Asset> = new EditModal<Asset>(null, null, this.validatorService);

    createAssetRoute: string = "/PropertyInspection/Asset/AutoCreateAsset";

    assetRoute: ApiDefaultRoute;

    customAssetDetails!: CustomAssetDetails;

    deletedAssetsLoaded: boolean = false;

    diagramAssets: Array<Asset> = new Array<Asset>();

    displayAssets: Array<Asset> = new Array<Asset>();

    emailAssetRoute: string = "/PropertyInspection/Asset/EmailAssets";

    fieldAssetsLoaded: boolean = false;

    isDeliverableAsset: boolean = false;

    openAssetModal: boolean = false;

    pifAssets: Array<Asset> = new Array<Asset>();

    pifAssetsRoute: ApiPropertyInspectionAssetRoutes;

    projectDetails: ProjectDetails;

    propertyInspectionFormId: number;

    ready: boolean = false;

    selectAll: boolean = false;

    showAssets: boolean = false;

    showDeletedAssets: boolean = false;

    showFieldAssets: boolean = false;

    uploadAssetType: string = "";

    userId: number = <number>$("#userId").val();

    deliverableAssetTypeIds: string = "5,6,12";

    allAssetTypeIds: string = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16";

    nonFieldAssetTypeIds: string = "1,2,4,5,6,7,9,10,11,12,13,14,15,16";

    fieldAndUserAssetTypeIds: string = "3,8";

    sendAssetModal = {
        open: false,
        data: "",
        validator: "",
        busy: false,
        noCloseOnBackdrop: true,
        noCloseOnEsc: true
    };

    DeleteAssetModal = {
        open: false,
        assetsToDelete: {} as any,
        busy: false,
        title: "",
        promptText: "",
        noCloseOnBackdrop: true,
        noCloseOnEsc: true
    };

    RecoverAssetModal = {
        open: false,
        assetsToRecover: {} as any,
        busy: false,
        promptText: "",
        noCloseOnBackdrop: true,
        noCloseOnEsc: true
    };

    CreateAssetModal = {
        open: false,
        isManual: false,
        assetTypeId: 0,
        title: "",
        promptText: "",
        noCloseOnBackdrop: true,
        noCloseOnEsc: true
    };

    createManualAssetModal = {
        open: false,
        data: new CustomAssetDetails,
        busy: false,
        title: "",
        type: "",
        noCloseOnBackdrop: true,
        noCloseOnEsc: true
    };

    // all vars below this line can be removed when we remove manual photo form creations
    createAssetAssets: Array<CustomAsset> = new Array<CustomAsset>();

    constructor() {
        super();
    }

    async mounted() {
        this.assetUtilityRoutes = new MvcAssetUtilityRoutes();
        this.assetRoute = new ApiDefaultRoute(this.exemplarApiUrl, "Assets");
        this.pifAssetsRoute = new ApiPropertyInspectionAssetRoutes(this.exemplarApiUrl,"PropertyInspectionAssets");
        this.ready = true;

        this.deleteBatchServiceInstance = this.AssetDeleteService;

        EventBus.$on(PifEvents.ShowAssets, async (visible: boolean = false) => {
            this.showAssets = visible;
        })

        EventBus.$on(PifEvents.PifCreated, (pif: PropertyInspectionForm) => {
            if (!this.projectDetails) {
               // this.projectDetails.PropertyInspectionForms = new Array<PropertyInspectionForm>();
            }
            this.projectDetails.PropertyInspectionForms.push(pif);
        })

        EventBus.$on(PifEvents.CloseAssetModal, async () => {
            this.openAssetModal = false;

            if (this.uploadAssetType == "Diagram" && this.diagramAssets.length > 0 && !this.CreateAssetModal.isManual) {
                this.CreateDiagram(this.diagramAssets, true);
                this.diagramAssets = [];
            }
        })

        EventBus.$on(PifEvents.ReportCreated, async (data: any, createPhotoForm: boolean = false) => {
           this.RemoveCurrentDeliverableAsset(data);
            this.pifAssets.push(data);
            this.showDeletedAssets = false;
            this.showFieldAssets = false;
            this.SetDisplayAssets();
            if (createPhotoForm) {
                this.CreatePhotoForm();
            }
        });

        EventBus.$on(PifEvents.NonFieldAssetUploaded, async (data: any) => {
            this.pifAssets.push(data);

            if ((data.AssetTypeId == AssetTypeEnum.UserAsset && this.showFieldAssets == true) || (this.showDeletedAssets == false && data.AssetTypeId != AssetTypeEnum.UserAsset)) {
                this.displayAssets.push(data);
                this.GetAssetCount();
            }
            if (this.uploadAssetType == "Diagram") {
                this.diagramAssets.push(data);
            }
        });

        EventBus.$on(PifEvents.CallingAssets, async () => {
            if (!this.fieldAssetsLoaded) {
                if (!this.fieldAssetsLoaded) {
                    await this.GetModel(this.pifAssetsRoute.Get(this.propertyInspectionFormId, this.fieldAndUserAssetTypeIds), this.LoadFieldAssetsCallback);
                }
            }

            EventBus.$emit(PifEvents.AssetsReceived, this.pifAssets);
        });

        EventBus.$on(PifEvents.SearchAssets, async (propertyInspectionFormId: number = 0, projectDetails: ProjectDetails) => {
            this.projectDetails = projectDetails;
            this.fieldAssetsLoaded = false;
            this.deletedAssetsLoaded = false;
            this.showDeletedAssets = false;
            this.showFieldAssets = false;

            if (propertyInspectionFormId === 0) {

                this.ready = false;
                return;
            }

            this.propertyInspectionFormId = propertyInspectionFormId;

            this.LoadNonFieldAssets();

            this.ready = true;
        });

        EventBus.$on(PifEvents.FieldAssetUploaded, async (data: any) => {
            this.pifAssets.push(data);
            this.SetDisplayAssets();
        });

        EventBus.$on(PifEvents.FieldAssetDeleted, async (asset: Asset) => {

                let deletedAsset: Asset = <Asset>find(this.pifAssets, function (o) { return o.Id === Number(asset.Id); });

                if (deletedAsset) {
                    deletedAsset.IsDeleted = true;
            }
            this.SetDisplayAssets();
        });

        EventBus.$on(PifEvents.FieldAssetReordered, async (asset: Asset) => {
            let reOrderedAsset: Asset = <Asset>find(this.pifAssets, function (o) { return o.Id === Number(asset.Id); });

            if (reOrderedAsset) {
                reOrderedAsset.Order = asset.Order;
            }
        });
    }

    async LoadNonFieldAssets() {
        this.GetModel(this.pifAssetsRoute.Get(this.propertyInspectionFormId, this.nonFieldAssetTypeIds), this.LoadNonFieldAssetsCallback);
    }
    async LoadFieldAssets() {
        this.showFieldAssets = !this.showFieldAssets;
        this.showDeletedAssets = false;

        if (!this.fieldAssetsLoaded) {
            await this.GetModel(this.pifAssetsRoute.Get(this.propertyInspectionFormId, this.fieldAndUserAssetTypeIds), this.LoadFieldAssetsCallback);
        }

        this.SetDisplayAssets();
    }

    async LoadDeletedAssets(load: boolean) {

        this.showFieldAssets = false;

        if (!this.deletedAssetsLoaded) {
            await this.GetModel(this.pifAssetsRoute.Get(this.propertyInspectionFormId, "", true), this.LoadDeletedAssetsCallback);
        }
        this.SetDisplayAssets();
    }

    async DeleteAssetArray(assets: Array<Asset>) {
        for (var i = 0; i < assets.length; i++) {
            await this.deleteAsset(assets[i], `${assets[i].AssetName} Deleted`)

        };
    }

    async deleteAsset(asset: Asset, message: string = "") {
        asset.IsDeleted = true;
        asset.Order = 0;
        asset.UpdatedBy = this.userId;
        await this.Patch(this.assetRoute.Update(asset.Id, this.currentUserId), asset, this.DeleteAssetSuccessCallBack, null, message);

    }

    async InsertAsset() {

        ToastrHelper.DisplayToastWarning(`Your ${this.uploadAssetType} is being created now. You will be notified when completed.`, "Create Asset")
        await this.Insert(this.createAssetRoute, JSON.stringify(this.customAssetDetails), this.AssetCreatedSuccessfullyCallback, null, "");
    }

    CallInitializeUploader(assetTypeId: number) {
        let tmpAssetUploadModel = new AssetUploadModel();
        tmpAssetUploadModel.CompanyId = this.projectDetails.CompanyId;
        tmpAssetUploadModel.ProjectId = this.projectDetails.ProjectId;
        tmpAssetUploadModel.PropertyInspectionFormId = this.propertyInspectionFormId;
        tmpAssetUploadModel.AssetTypeId = assetTypeId == AssetTypeEnum.Diagram ? AssetTypeEnum.UserAsset : assetTypeId;
        EventBus.$emit(PifEvents.InitializeUploader, tmpAssetUploadModel);
    }

    SetDisplayAssets() {

        if (this.showDeletedAssets) {

            this.displayAssets = filter(this.pifAssets, function (o) { return o.IsDeleted; });
        } else
        {
            if (this.showFieldAssets) {

                this.displayAssets = filter(this.pifAssets, function (o) { return o.IsDeleted == false && (o.AssetTypeId == 3 || o.AssetTypeId == 8); });
            } else {

                this.displayAssets = filter(this.pifAssets, function (o) { return o.IsDeleted == false && (o.AssetTypeId != 3 && o.AssetTypeId != 8); });
            }
        }

        this.GetAssetCount();
    }

    GetAssetCount() {
        if (this.showDeletedAssets) {
             this.assetCount = `${(filter(this.displayAssets, function (o) { return o.IsDeleted; })).length} Deleted Asset(s)`;
        } else {
         if (this.showFieldAssets) {
              this.assetCount = `${(filter(this.displayAssets, function (o) { return o.IsDeleted == false && (o.AssetTypeId == 3 || o.AssetTypeId == 8); })).length} Field/User Asset(s)`;

          } else {
             this.assetCount = `${(filter(this.displayAssets, function (o) { return o.IsDeleted == false && (o.AssetTypeId != 3 && o.AssetTypeId != 8); })).length} Non-Field Asset(s)`;
            }
        }
    }

    RecoverAsset(asset: Asset) {
        asset.UpdatedBy = this.userId;
        asset.IsDeleted = false;
        asset.UpdatedBy = this.userId;
        this.Patch(this.assetRoute.Update(asset.Id, this.currentUserId), asset, this.isDeliverableAsset ? this.RecoverDeliverableSuccessCallback : this.RecoverNonDeliverableSuccessCallback, null, `Asset ${asset.AssetName} Recovered`);
    }

    GetAssetType(assetTypeId: number): string {
        switch (assetTypeId) {
            case AssetTypeEnum.PhotoForm:
                return "Photo Form";
            case AssetTypeEnum.Diagram:
                return "Diagram";
            case AssetTypeEnum.Report:
                return "Report";
            default:
                return "";
        }
    }

    ReturnExistingAssets(assetTypeId: number): Array<Asset> {
       return filter(this.pifAssets, function (o) { return o.AssetTypeId === assetTypeId && !o.IsDeleted; });
     }

    DeselectAssets() {
        forEach(this.displayAssets, (asset) => {
            asset.IsSelected = false;
        });
        this.DeleteAssetModal.open = false;
    }

    RemoveUnderscore(assetName: string, assetTypeId: number): string {

        if (assetTypeId == AssetTypeEnum.FieldAsset) {

            var splitName = split(assetName, '_', 2);
            if (splitName) {
                return splitName[0];
            }
            else {
                return assetName;
            }
        }
        else {
            return assetName;
        }
    }

    ParseEmailAssets(assets: Array<Asset>): Array<AssetDetails> {

        let lst = new Array<AssetDetails>();
        forEach(assets, (asset => {
            if (asset.AssetTypeId != AssetTypeEnum.FieldAsset || asset.AssetTypeId == AssetTypeEnum.FieldAsset && (asset.HasMetaData == null || asset.HasMetaData)) {
                lst.push(new AssetDetails(asset.Id, asset.AssetName, asset.AssetTypeId, asset.Description, asset.FileName, asset.FullPath));
            }
        }));

        return lst;
    }

    DisplayRecoverDeletePrompt(asset: Asset) {
        this.RecoverAssetModal.assetsToRecover = asset;
        this.RecoverAssetModal.promptText = `Recovering this ${this.uploadAssetType} will soft delete the current ${this.uploadAssetType}. Do you wish to Continue?`;
        this.RecoverAssetModal.open = true;
        this.RecoverAssetModal.busy = true;
    }

    DisplayCreateAssetPrompt(asset: Asset, skipPrompt: boolean = false) {

        if (!skipPrompt) {

            this.CreateAssetModal.promptText = `Creating this ${this.uploadAssetType} will soft delete the current ${this.uploadAssetType}. Do you wish to Continue?`;

            this.CreateAssetModal.title = `Create ${this.GetAssetType(asset.AssetTypeId)} Asset`;

            this.CreateAssetModal.open = true;

        } else {
            this.onCreateAssetContinueClicked();
        }
    }

    urlBuilder(fullPath: string): string {
        return UploadHelper.GetAssetUrl(fullPath, this.imgPath, this.imgToken);
    }

    CreateDiagram(selectedAssets: Array<Asset>, skipPrompt: boolean = false) {
        if (!CustomAssetHelper.ValidateCustomAssetResult(selectedAssets, true)) {
            return;
        }
        this.uploadAssetType = "Diagram";

        let asset: Asset | null;

        this.customAssetDetails = CustomAssetHelper.CreateCustomAssetDetails(this.projectDetails, this.userId, this.propertyInspectionFormId, CustomAssetHelper.ConvertToCustomAsset(selectedAssets), AssetTypeEnum.Diagram);

        this.InsertAsset();
    }

    CreatePhotoForm() {

        this.uploadAssetType = "Photo Form";

        this.customAssetDetails = CustomAssetHelper.CreateCustomAssetDetails(this.projectDetails, this.userId, this.propertyInspectionFormId, [], AssetTypeEnum.PhotoForm);

        this.InsertAsset();
    }

    hideEditAssetModal = (event: any) => {
        if (event.type === "hide" && event.trigger === "header-close") {
            event.preventDefault();
            this.onCancelEditClicked();
        }
    }

    // Button Events

    async onSaveEditClicked() {

        if (!this.editModal.validate()) {
            return;
        }

        if (!this.editModal.hasChanges(this.editModal.data, true)) {
            return;
        }

        this.editModal.data.UpdatedBy = this.userId;
        await this.Update(this.assetRoute.Update(this.editModal.data.Id, this.currentUserId), this.editModal.data, this.EditSuccessCallback, null, "Asset Updated!")
        this.editModal.open = false;
    }

    async onSendAssetClicked() {
        this.sendAssetModal.validator = "";
        if (!this.sendAssetModal.data) {
            this.sendAssetModal.validator = "Please enter at least one Email Address";
            return;
        }

        if (this.sendAssetModal.data.charAt(this.sendAssetModal.data.length - 1) == ',') {
            this.sendAssetModal.data = this.sendAssetModal.data.substring(0, this.sendAssetModal.data.length - 1);
        }

        this.sendAssetModal.data = this.sendAssetModal.data.replace(/ /g, "");
        var emails = this.sendAssetModal.data.split(",");
        var validEmail = true;



        emails.forEach((email) => {
            if (!this.ValidateEmail(email)) {
                validEmail = false;
                return;
            }
        });

        if (!validEmail) {
            if (emails.length == 1) {
                this.sendAssetModal.validator = "Please enter a valid Email Address";
                return;
            }
            else {
                this.sendAssetModal.validator = "One or more email addresses is not valid. Verify that each email is separated by a comma.";
                return;
            }
        }

        let assetsToEmail: Array<AssetDetails> = this.ParseEmailAssets(filter(this.displayAssets, function (o) { return o.IsSelected; }));

        this.sendAssetModal.open = false;
        if (assetsToEmail.length > 0) {

            let propertyInspectionForm: PropertyInspectionForm = <PropertyInspectionForm>find(this.projectDetails.PropertyInspectionForms, { 'Id': Number(this.propertyInspectionFormId) });
            let streetAddressTwo = this.projectDetails.StreetAddress2 ? this.projectDetails.StreetAddress2 : "";
            let lossLocation: string = this.projectDetails.StreetAddress1 + " " + streetAddressTwo + "\n" + this.projectDetails.City + ", " + this.projectDetails.State + " " + this.projectDetails.PostalCode;
            let assetEmail: AssetEmail = new AssetEmail(this.projectDetails.Adjuster, this.sendAssetModal.data, this.projectDetails.ClaimNumber, this.projectDetails.CompanyShortName, this.projectDetails.HasCustomAssetEmail, this.projectDetails.InsuredName, lossLocation, this.projectDetails.MaxMailSize, this.projectDetails.ProjectId, this.propertyInspectionFormId, propertyInspectionForm.FormName, this.userId, assetsToEmail);
            ToastrHelper.DisplayToastWarning("Emailing Assets....");
            await this.EmailAsset(this.emailAssetRoute, assetEmail);


        } else {
            ToastrHelper.DisplayToastWarning("No valid Assets to Email.");
        }
        this.DeselectAssets();
    }

    async onDownLoadClicked() {
        let assetIds: Array<number> = new Array<number>();
        let selectedAssets: Array<Asset> = filter(this.displayAssets, function (o) { return o.IsSelected; });

        if (selectedAssets.length == 0) {
            ToastrHelper.DisplayToastWarning("Please select one or more assets to download.", "Download Asset(s)");
            return;
        }
        forEach(selectedAssets, (asset => {
            assetIds.push(asset.Id);
        }));
        this.DeselectAssets();
        await this.GetModel(this.assetUtilityRoutes.GetAssetDownload(this.projectDetails.ProjectNumber, JSON.stringify(assetIds)), this.AssetDownloadedSuccessCallback);
    }

    async onDownloadOpenAssetClicked(asset: Asset) {
        ToastrHelper.DisplayToastWarning(
            `Your ${this.GetAssetType(asset.AssetTypeId)} is being downloaded now. You will be notified when completed.`,
            "Download Asset");
        await this.GetModel(this.assetUtilityRoutes.GetAssetDownloadOpen(asset.FullPath, asset.AssetName, asset.CreatedOn), this.AssetDownloadedSuccessCallback, this.AssetDownloadedErrorCallback);
    }

    async onEditClicked(asset: Asset) {
        this.editModal.showModal(asset);
    }

    async OnDeleteAssetContinueClicked() {

        for (var i = 0; i < this.DeleteAssetModal.assetsToDelete.length; i++) {
            await this.deleteAsset(this.DeleteAssetModal.assetsToDelete[i], `${this.DeleteAssetModal.assetsToDelete[i].AssetName} Deleted`)
        };

        this.DeleteAssetModal.open = false;
        this.DeleteAssetModal.busy = false;
        this.DeselectAssets();
        this.GetAssetCount();
    }

    onSendAssetCancelClicked() {
        forEach(this.displayAssets, (asset) => {
            asset.IsSelected = false;
        });
        this.sendAssetModal.open = false;
    }

    onCancelEditClicked() {
        if (this.editModal.hasChanges(this.editModal.data)) {
            this.editModal.showUnsavedChangesWarning = true;
        } else {
            this.editModal.open = false;
        }

    }

    onCreateAssetContinueClicked() {
        this.CreateAssetModal.open = false;
        if (this.CreateAssetModal.assetTypeId == AssetTypeEnum.Diagram) {
            this.CallInitializeUploader(this.CreateAssetModal.assetTypeId);
        }
        if (this.CreateAssetModal.assetTypeId == AssetTypeEnum.PhotoForm) {

            if (this.CreateAssetModal.isManual) {
                this.CreateManualPhotoForm();
            } else {
                this.CreateAssetModal.open = false;
                this.CreatePhotoForm();
                this.DeselectAssets();
            }
        }
    }

    onRecoverClicked(asset: Asset) {

        if (asset.AssetTypeId == AssetTypeEnum.PhotoForm || asset.AssetTypeId == AssetTypeEnum.Diagram || asset.AssetTypeId == AssetTypeEnum.Report) {
            {
                this.isDeliverableAsset = true;

                if (this.ReturnExistingAssets(asset.AssetTypeId).length > 0) {
                   this.DisplayRecoverDeletePrompt(asset);
                } else {
                    this.RecoverAsset(asset);
                }
            }
        }
        else {
            this.isDeliverableAsset = false;
            this.RecoverAsset(asset);
        }
    }

    OnRecoverAssetContinueClicked() {
        this.RecoverAsset(this.RecoverAssetModal.assetsToRecover);
        this.RecoverAssetModal.open = false;
        this.RecoverAssetModal.busy = false;
        this.DeselectAssets();
    }

    onEmailAssetClicked() {

        this.sendAssetModal.data = this.projectDetails.AssetEmailRecipients;

        if (this.projectDetails.AssetEmailRecipients) {
            if (this.projectDetails.AssetEmailRecipients.length > 0) {
                this.sendAssetModal.data = this.projectDetails.AssetEmailRecipients + ',';
            }
        }

        this.sendAssetModal.validator = "";
        this.sendAssetModal.open = true;
    }

    onSelectAllClicked() {
        forEach(this.displayAssets, (asset) => {
            if (!asset.IsDeleted) {
                asset.IsSelected = !this.selectAll;
            }
        });
        this.selectAll = !this.selectAll;
    }

    onDeleteAssetsClicked() {
        let selectedAssets: Array<Asset> = filter(this.displayAssets, function (o) { return o.IsSelected; });
        if (selectedAssets.length > 0) {

            this.DeleteAssetModal.assetsToDelete = selectedAssets;

            this.DeleteAssetModal.promptText = "Are you sure you want to delete the selected Asset(s)?";

            this.DeleteAssetModal.title = "Confirm Delete";

            this.DeleteAssetModal.open = true;

        } else {
            ToastrHelper.DisplayToastWarning("Please select one or more assets to delete.", "Delete Asset(s)")
        }
    }

    onUploadAssetClicked(assetTypeId: number, type: string = "") {
        this.allowMultiples = false;
        switch (assetTypeId) {
            case AssetTypeEnum.Diagram: {

                this.CreateAssetModal.isManual = false;
                if (type == 'manual') {
                    this.CreateAssetModal.isManual = true;
                }

                this.uploadAssetType = "Diagram";
                this.allowMultiples = true;

                if (!this.CreateAssetModal.isManual && this.ReturnExistingAssets(assetTypeId).length > 0) {
                    this.CreateAssetModal.promptText = "Uploading this Diagram will soft delete the current one. Do you wish to Continue?";
                    this.CreateAssetModal.title = "Upload Diagram";
                    this.CreateAssetModal.open = true;
                    this.CreateAssetModal.assetTypeId = assetTypeId;
                    return;
                }
                break;
            }
            case AssetTypeEnum.HoverEsx: {
                this.uploadAssetType = "Hover Esx";
                break;
            }

            case AssetTypeEnum.HoverInvoice: {
                this.uploadAssetType = "Hover Invoice";
                break;
            }

            case AssetTypeEnum.HoverMeasurements: {
                this.uploadAssetType = "Hover Measurements";
                break;
            }

            case AssetTypeEnum.UserAsset: {
                this.uploadAssetType = "User Asset";
                break;
            }

            case AssetTypeEnum.HoverXml: {
                this.uploadAssetType = "Hover Xml";
                break;
            }
        }

        this.CallInitializeUploader(assetTypeId);
    }

    onCreatePhotoFormClicked(type: string) {
        this.CreateAssetModal.isManual = false;

        if (type == 'manual') {
            this.CreateAssetModal.isManual = true;
        }

        this.CreateAssetModal.assetTypeId = AssetTypeEnum.PhotoForm;
        this.uploadAssetType = "Photo Form";

        if (this.ReturnExistingAssets(AssetTypeEnum.PhotoForm).length > 0) {
           this.DisplayCreateAssetPrompt(new Asset, false);
        } else {

            if (this.CreateAssetModal.isManual) {
                this.CreateManualPhotoForm();
            } else {
                this.CreatePhotoForm();
            }
        }
    }

    // Callbacks

    async EditSuccessCallback() {
        var index = findIndex(this.displayAssets, { Id: this.editModal.data.Id });
        this.displayAssets.splice(index, 1, this.editModal.data);
    }

    AssetCreatedSuccessfullyCallback(model: any) {

        if (model.AssetTypeId === AssetTypeEnum.PhotoForm) {
            ToastrHelper.DisplayToastSuccess("Photo Form Created Successfully!");
        } else if (model.AssetTypeId === AssetTypeEnum.Diagram) {
            ToastrHelper.DisplayToastSuccess("Diagram Created Successfully!");
        } else {
            ToastrHelper.DisplayToastSuccess("Asset Created Successfully!");
        }

        this.RemoveCurrentDeliverableAsset(model);

        this.pifAssets.push(model);

        this.DeselectAssets();

        this.showFieldAssets = false;

        this.showDeletedAssets = false;

        this.SetDisplayAssets();
    }

    LoadNonFieldAssetsCallback(model: Array<Asset>) {
        this.pifAssets = model;
        this.SetDisplayAssets();
    }
    //Only add the deleted assets if they aren't already added to the pifAssets
    LoadDeletedAssetsCallback(model: Array<Asset>) {
        this.deletedAssetsLoaded = true;
        model.forEach((asset: Asset) => {
            let deletedAsset: Asset = <Asset>find(this.pifAssets, function (o) { return o.Id === Number(asset.Id); });
            if (!deletedAsset) {
                this.pifAssets = concat(this.pifAssets, asset);
            }
        });
    }

    //Only load the field assets if they aren't already added to the pifAssets
    LoadFieldAssetsCallback(model: Array<Asset>) {
        this.fieldAssetsLoaded = true;
        model.forEach((asset: Asset) => {
            let fieldAsset: Asset = <Asset>find(this.pifAssets, function (o) { return o.Id === Number(asset.Id); });
            if (!fieldAsset) {
                this.pifAssets = concat(this.pifAssets, asset);
            }
        });
    }

    RecoverDeliverableSuccessCallback(model: Asset) {
        let recoveredAsset: Asset = <Asset>find(this.pifAssets, { 'Id': Number(model.Id) });
        recoveredAsset.IsDeleted = false;

        let assetToDelete: Array<Asset> = filter(this.pifAssets, function (o) { return o.AssetTypeId === model.AssetTypeId && !o.IsDeleted; });
        this.RemoveCurrentDeliverableAsset(model);
        this.SetDisplayAssets();
    }

    RecoverNonDeliverableSuccessCallback(model: Asset) {

        let recoveredAsset: Asset = <Asset>find(this.displayAssets, { 'Id': Number(model.Id) });

        recoveredAsset.IsDeleted = false;

        this.GetAssetCount();
    }

    AssetDownloadedSuccessCallback(model: any) {
        ToastrHelper.DisplayToastSuccess("Download Successful!");

        var binaryString = atob(model.FileContents);
        var binaryLen = binaryString.length;
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }

        var blob = new Blob([bytes], { type: "application/octet-stream" });

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob);
            return;
        }
        var downloadUrl = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = downloadUrl;
        a.download = model.FileName.trim();

        document.body.appendChild(a);
        a.click();
    }

    RemoveCurrentDeliverableAsset(asset: Asset) {
        let assetsToDelete: Array<Asset> = filter(this.pifAssets, function (o) { return o.AssetTypeId === asset.AssetTypeId && !o.IsDeleted; });
        forEach(assetsToDelete, (deleteAsset => {
            if (deleteAsset.Id != asset.Id) {
                deleteAsset.IsDeleted = true;
            }
        }))
    }

    DeleteAssetSuccessCallBack(model: Asset) {
        let deletedAsset: Asset = <Asset>find(this.displayAssets, function (o) { return o.Id === Number(model.Id); });

        if (deletedAsset) {
            deletedAsset.IsDeleted = true;
        }
    }

    AssetDownloadedErrorCallback(model: any) {
        ToastrHelper.DisplayToastError(`Asset ${model.AssetName} not found`);
    }

    async CreateManualPhotoForm() {

        this.uploadAssetType = "Photo Form";

        this.createAssetAssets = new Array<CustomAsset>();

        let selectedAssets: Array<Asset> = filter(this.pifAssets, function (o) { return o.IsSelected; });

        let defaultAssets: Array<Asset> = new Array<Asset>();

        let asset: Asset | null;

        if (!CustomAssetHelper.ValidateCustomAssetResult(selectedAssets)) {
            return;
        }

        // Search for and add 5 default photos. If multiple photos exist for 1 field, select earliest upload

        asset = CustomAssetHelper.ReturnDefaultCustomAsset(this.pifAssets, AssetFieldEnum.Address);

        if (asset) {
            defaultAssets.push(asset);
        }

        asset = CustomAssetHelper.ReturnDefaultCustomAsset(this.pifAssets, AssetFieldEnum.FrontRisk);
        if (asset) {
            defaultAssets.push(asset);

        }

        asset = CustomAssetHelper.ReturnDefaultCustomAsset(this.pifAssets, AssetFieldEnum.PitchGauge);
        if (asset) {
            defaultAssets.push(asset);
        }

        asset = CustomAssetHelper.ReturnDefaultCustomAsset(this.pifAssets, AssetFieldEnum.ShingleGauge);
        if (asset) {

            defaultAssets.push(asset);
        }

        asset = CustomAssetHelper.ReturnDefaultCustomAsset(this.pifAssets, AssetFieldEnum.LayerQty);
        if (asset) {
            defaultAssets.push(asset);
        }

        // If selected asset is already a default asset - deselect
        forEach(defaultAssets, (defaultAsset => {
            let tempAsset: Asset = <Asset>find(selectedAssets, function (o) { return o.Id === defaultAsset.Id; });
            if (tempAsset) {
                tempAsset.IsSelected = false;
            }
        }));

        selectedAssets = filter(selectedAssets, function (o) { return o.IsSelected; });

        // Combine selected assets with default assets.
        forEach(selectedAssets, (tempAsset => {
            if (tempAsset.HasMetaData) {
                defaultAssets.push(tempAsset);
            }
        }));

        var createAssets = JSON.parse(JSON.stringify(defaultAssets));
        forEach(createAssets, (tempAsset => {
            tempAsset.AssetName = this.RemoveUnderscore(tempAsset.AssetName, tempAsset.AssetTypeId)
        }));
        this.customAssetDetails = CustomAssetHelper.CreateCustomAssetDetails(this.projectDetails, this.userId, this.propertyInspectionFormId, CustomAssetHelper.ConvertToCustomAsset(createAssets), AssetTypeEnum.PhotoForm);

        forEach(this.customAssetDetails.Assets, (asset => {
            asset.ImageBase64String = "";
        }));

        ToastrHelper.DisplayToastWarning(`Your ${this.uploadAssetType} is being created now. You will be notified when completed.`, "Create Asset")

        forEach(this.pifAssets, (asset) => {
            asset.IsSelected = false;
        });

        await this.Insert("/PropertyInspection/Asset/ManuallyCreateAsset", JSON.stringify(this.customAssetDetails), this.AssetCreatedSuccessfullyCallback, null, "");
    }

    onCreateDiagramClicked() {

        var diagramAssets = filter(this.pifAssets, function (o) { return o.IsSelected; });

        if (!CustomAssetHelper.ValidateCustomAssetResult(diagramAssets, true)) {
            return;
        }

        this.uploadAssetType = "Diagram";

        this.createAssetAssets = new Array<CustomAsset>();

        let asset: Asset | null;

        this.customAssetDetails = CustomAssetHelper.CreateCustomAssetDetails(this.projectDetails, this.userId, this.propertyInspectionFormId, CustomAssetHelper.ConvertToCustomAsset(diagramAssets), AssetTypeEnum.Diagram);

        this.InsertAsset();
    }
}
