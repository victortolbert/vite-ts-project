import { Component, Watch, Prop } from "vue-property-decorator";
import { AutoSchedulerEvents, EventBus } from "../AutoSchedulerEvents"
import { forEach, filter, findIndex } from "lodash";
import { PageBase } from "@ExemplarCommon/PageBase";
import { FieldTechAvailabilityRoute } from "../Routes/FieldTechAvailabilityRoute";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { FieldTechAvailability } from "../ViewModels/FieldTechAvailability";
import { FieldTechAvailabilityList } from "../ViewModels/FieldTechAvailabilityList";
import { FieldTechAvailabilityInsert } from "../ViewModels/FieldTechAvailabilityInsert";
import { IDeleteService } from "@ExemplarServices/IDeleteService";
import { lazyInject } from "./../IocContainer";
import KendoDropDown from "@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index";
import { DatePicker } from '@progress/kendo-dateinputs-vue-wrapper'
import Vue from "Vue";
import { BModal, BButton } from 'bootstrap-vue'
import { IValidator } from "@ExemplarInterfaces/IValidator";
import EditModalComponent from "@ExemplarComponents/EditModalComponent";
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";
import { AvailableDates } from "../ViewModels/AvailableDates"

Vue.component('kendo-dropdownlist', KendoDropDown)
Vue.component('kendo-datepicker', DatePicker)
@Component({
    template: "#availability-template",
    components: {
        BModal, BButton, EditModalComponent, DropdownComponent
    }
})

export default class AvailabilityComponent extends PageBase<FieldTechAvailability> {
    @lazyInject("IDeleteService<FieldTechAvailability>")
    AvailabilityDeleteService!: IDeleteService<FieldTechAvailability>;

    @lazyInject("IValidator<FieldTechAvailabilityInsert>")
    fieldTechAvailabilityValidator!: IValidator<FieldTechAvailabilityInsert>;

    @Prop({ required: true, type: String })
    createdByUserId: number | string;

    @Prop({ required: false, type: String })
    searchedUserProp: string = '';

    @Prop({ required: true, type: String })
    serviceAreaTechnicianUri: string;

    @Prop({ required: true, type: String })
    serviceAreaUri: string;

    regionIds: string = '';

    bindServiceTechList: boolean = false;

    bindAreaList: boolean = true;

    fieldTechAvailabilityList: FieldTechAvailabilityList = new FieldTechAvailabilityList();

    availDataSource: Array<FieldTechAvailability> = new Array<FieldTechAvailability>();

    notAvailDataSource: Array<FieldTechAvailability> = new Array<FieldTechAvailability>();

    searched: boolean = false;

    selectedFieldTechId: number = 0;

    selectedFieldTechName: string = "";

    selectedFieldTechArea: string = "";

    showEditForm: boolean = false;

    title: string = "";

    fieldTechAvailabilityRoute: FieldTechAvailabilityRoute = new FieldTechAvailabilityRoute(`${this.exemplarApiUrl}`);

    model = new FieldTechAvailabilityInsert();
     
    constructor() {
        super();
    }

    async mounted() {

        this.showLoader = false;
       
        this.fieldTechAvailabilityRoute = new FieldTechAvailabilityRoute(`${this.exemplarApiUrl}`);
         
        this.deleteServiceInstance = this.AvailabilityDeleteService;

        GlobalEventBus.$on(GlobalEvents.CloseEditModal, () => {
            this.showEditForm = false;
        });

        EventBus.$on(AutoSchedulerEvents.AvailabilityClicked, async () => {
            this.availDataSource = new Array<FieldTechAvailability>();
            this.notAvailDataSource = new Array<FieldTechAvailability>();
            this.bindServiceTechList = true;
            // @ts-ignore
            this.$refs.techlist.reset();
            this.selectedFieldTechId = 0;
        })
    }

    ProcessAvailableDates(fieldTechAvailability: Array<FieldTechAvailability>) {

        forEach(fieldTechAvailability, (item) => {
            this.model.AvailableDates.push(new AvailableDates(item.ServiceTechUserId, item.StartDate, item.EndDate, item.ServiceAreaId, item.IsAvailable));
        });
    }

    async AddAvailabilityRecord(isAvailable: boolean) {
        this.bindAreaList = true;
        this.model = new FieldTechAvailabilityInsert();
        this.model.CreatedBy = this.currentUserId;
        this.model.IsAvailable = isAvailable;
        this.model.FieldTechUserId = this.selectedFieldTechId
        if (!isAvailable) {
            this.model.ServiceAreaId = this.fieldTechAvailabilityList.ServiceAreaId;
        }
        this.title = isAvailable ? "Add Availability" : "Add Not Available";
        this.ProcessAvailableDates(this.availDataSource);
        this.ProcessAvailableDates(this.notAvailDataSource);
        this.showEditForm = true;
    }

     AddNotAvailable() {
        this.model = new FieldTechAvailabilityInsert();
        this.model.CreatedBy = this.currentUserId;
        this.model.IsAvailable = true;
        this.title = "Add Availability";
        this.bindAreaList=true;
        this.showEditForm = true;
    }

    LoadAvailabilityCallback(model: FieldTechAvailabilityList) {
        this.showLoader = false;
        this.searched = true;
        if (model) {
            this.fieldTechAvailabilityList = model;
            this.selectedFieldTechName = model.ServiceTechName;
            this.selectedFieldTechArea = model.ServiceAreaName;
        }
        this.availDataSource = <Array<FieldTechAvailability>>filter(this.fieldTechAvailabilityList.FieldTechAvailability, { IsAvailable: true });
        
        this.notAvailDataSource = <Array<FieldTechAvailability>>filter(this.fieldTechAvailabilityList.FieldTechAvailability, { IsAvailable: false });
    }

    RemoveAvailabilitySuccessCallback(model: FieldTechAvailability) {
        var idx = findIndex(this.fieldTechAvailabilityList.FieldTechAvailability, { Id: Number(model.Id) });
        if (idx > -1) {
            this.fieldTechAvailabilityList.FieldTechAvailability.splice(idx, 1);
        }
        this.availDataSource = <Array<FieldTechAvailability>>filter(this.fieldTechAvailabilityList.FieldTechAvailability, { IsAvailable: true });
        this.notAvailDataSource = <Array<FieldTechAvailability>>filter(this.fieldTechAvailabilityList.FieldTechAvailability, { IsAvailable: false });
    }

    // Callbacks

    AddAvailabilityCallback(model: FieldTechAvailabilityList) {
        this.fieldTechAvailabilityList.FieldTechAvailability = [];
        forEach(model.FieldTechAvailability, (fieldTechAvailability => {
            this.fieldTechAvailabilityList.FieldTechAvailability.push(fieldTechAvailability);
        }));

        this.availDataSource = <Array<FieldTechAvailability>>filter(this.fieldTechAvailabilityList.FieldTechAvailability, { IsAvailable: true });
        this.notAvailDataSource = <Array<FieldTechAvailability>>filter(this.fieldTechAvailabilityList.FieldTechAvailability, { IsAvailable: false });
    }

    //Events

    async OnTechSelected(e: any) {
        this.selectedFieldTechId = e.sender.value();
        this.selectedFieldTechName = e.sender.text();

        if (this.selectedFieldTechId > 0) {
            this.showLoader = true;
            // Get availability for selected user
            await this.GetModel(this.fieldTechAvailabilityRoute.GetAllAsync(this.selectedFieldTechId), this.LoadAvailabilityCallback);
        }
    }

    onAreaChanged(e: any) {
        this.model.ServiceAreaId = e.sender.value();
    }
}

