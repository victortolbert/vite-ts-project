import { AutoSchedulerBase } from "../AutoSchedulerBase";
import { EditModal } from "@ExemplarDataAccess/Modals/EditModal";
import { Component, Watch, Prop } from "vue-property-decorator";
import { Route } from "../ViewModels/Route";
import { CalenderSlot } from "../ViewModels/CalenderSlot";
import { forEach, find } from "lodash";
import InspectionDetailsComponent from "./InspectionDetailsComponent";
import { ProjectInspectionDetails } from "../ViewModels/ProjectInspectionDetails";
import { DivMapperModel } from "../ViewModels/DivMapperModel";
import { lazyInject } from "./../TechnicianIocContainer";
import { BModal, BButton, BFormSelect} from 'bootstrap-vue'
import { IValidator } from "@ExemplarInterfaces/IValidator";
import { AutoSchedulerEvents, EventBus } from "../AutoSchedulerEvents"
import DropdownComponent from "@ExemplarComponents/Controls/DropdownComponent";

/* tslint:disable:object-literal-shorthand */
@Component({
    template: "#route-template",
    components: {
        InspectionDetailsComponent, BModal, BButton, BFormSelect, DropdownComponent
    }
})
export default class RouteComponent extends AutoSchedulerBase<Route> {
    @lazyInject("IValidator<Route>")
    validatorService!: IValidator<Route>;

    @Prop({ required: true, type: Object })
    route: Route;

    @Prop({ required: true, type: Number })
    position: number;

    @Prop({ required: false, type: String })
    area: string;

    @Prop({ required: true, type: Number })
    autoschedulerId: number;

    @Prop({ required: true, type: String })
    serviceAreaTechnicianUri: string;

    routesReady: boolean = false

    bindServiceTechList: boolean = false;

    editModal: EditModal<Route> = new EditModal<Route>(this.editSuccessCallback, null, this.validatorService);

    projectInspectionDetails: ProjectInspectionDetails = new ProjectInspectionDetails();

    model: Route = new Route();

    calenderSlot: Array<CalenderSlot> = new Array<CalenderSlot>();

    fieldTechOptions: Array<string> = new Array<string>("Adams, Stuart", "Adams, Mark", "Allen, Caleb ", "Allen, Richard", "Anglin Mark", "Arnold, Jesse ", "Back, Toma", "Northeast", "Back, Hunter ", "Balk, Bryan ", "Barnett, Matt ", "Barnett, Brody");

    hovered: boolean = false;

    showHover: boolean = false;

    selectedFieldTechId: number = 0;

    selectedFieldTechName: string = "";

    divMappers: Array<DivMapperModel> = [];

    constructor() {
        super();
    }

     onHover(state: boolean) {

         this.hovered = state;
         if (this.calenderSlot[4].ProjectInspectionDetails) {
             this.hovered = true;
             this.projectInspectionDetails = this.calenderSlot[4].ProjectInspectionDetails;
         } else {
             this.hovered = false;
         }
    }


    @Watch("position")
    async positionUpdated() {
        this.routesReady = false;
        this.initialize();
    }

    @Watch("route", { deep: true })
    async timeUpdated() {
        this.initialize();
    }

    initialize() {
        this.assignDivs();

        this.model = this.route;
        this.calenderSlot = new Array(21);

        var i: number;
        for (i = 0; i <= 21; i++) {
            this.calenderSlot[i] = new CalenderSlot();
            this.calenderSlot[i].RouteId = this.model.Id;
            this.calenderSlot[i].IsException = this.model.IsException;
        }

        this.assignInspectionsToCalenderSlot();

        this.routesReady = true;
    }

    mounted() {

        EventBus.$on(AutoSchedulerEvents.MoveInspection, (inspectionDetail: ProjectInspectionDetails, showOutline: boolean) => {

            this.assignDivs();

            //Reset Grid
            forEach(this.divMappers, function (value, key) {
                console.log("data: " + JSON.stringify((value.inspectionDetailsComponent).$data));
               (value.inspectionDetailsComponent).$data.showOutline = false;
               (value.inspectionDetailsComponent).$data.moveMessage = "";
           });

            // Find the div that was just clicked.
            var divToMove = <DivMapperModel>find(this.divMappers, ['startTime', inspectionDetail.InspectionTime]);


            // Look at previous route to determine if we can move selected div to this route. We can't if there is already an inspection in that slot.
            if (divToMove.slotPosition > 0) {
                var preceedingDiv = <DivMapperModel>find(this.divMappers, ['slotPosition', divToMove.slotPosition - 1]);
                if (this.calenderSlot[preceedingDiv.slotPosition].ProjectInspectionDetails) {
                    return;
                }
            }

            // Look at next route to determine if we can move selected div to this route. We can't if there is already an inspection in that slot.
            if (divToMove.slotPosition < 21) {
                var followingDiv = <DivMapperModel>find(this.divMappers, ['slotPosition', divToMove.slotPosition + 1]);
                if (this.calenderSlot[followingDiv.slotPosition].ProjectInspectionDetails) {
                    return;
                }
            }

            var isExceptionDiv = (divToMove.inspectionDetailsComponent).$data.isException;
            (divToMove.inspectionDetailsComponent).$data.showOutline = showOutline;


            if (showOutline && (isExceptionDiv && inspectionDetail.OriginalFieldTechId > 0 || !isExceptionDiv)) {

                (divToMove.inspectionDetailsComponent).$data.moveMessage = "Move Here";
            } else {
                (divToMove.inspectionDetailsComponent).$data.showOutline = false;
            }


        });

        this.initialize();
    }

    assignInspectionsToCalenderSlot() {

        forEach(this.model.ProjectInspectionDetails, (value, key) => {
            var startTime = value.InspectionTime;

            if (!value.HasValidTime) {
                this.calenderSlot[0].ProjectInspectionDetails = value;
            }
            else {
                switch (value.InspectionTime) {
                    case "07:00:00": {
                        this.calenderSlot[0].ProjectInspectionDetails = value;
                        break;
                    }
                    case "07:30:00": {
                        this.calenderSlot[1].ProjectInspectionDetails = value;
                        break;
                    }
                    case "08:00:00": {
                        this.calenderSlot[2].ProjectInspectionDetails = value;
                        break;
                    }
                    case "08:30:00": {
                        this.calenderSlot[3].ProjectInspectionDetails = value;
                        break;
                    }
                    case "09:00:00": {
                        this.calenderSlot[4].ProjectInspectionDetails = value;
                        break;
                    }
                    case "09:30:00": {
                        this.calenderSlot[5].ProjectInspectionDetails = value;
                        break;
                    }
                    case "10:00:00": {
                        this.calenderSlot[6].ProjectInspectionDetails = value;
                        break;
                    }
                    case "10:30:00": {
                        this.calenderSlot[7].ProjectInspectionDetails = value;
                        break;
                    }
                    case "11:00:00": {
                        this.calenderSlot[8].ProjectInspectionDetails = value;
                        break;
                    }
                    case "11:30:00": {
                        this.calenderSlot[9].ProjectInspectionDetails = value;
                        break;
                    }
                    case "12:00:00": {
                        this.calenderSlot[10].ProjectInspectionDetails = value;
                        break;
                    }
                    case "12:30:00": {
                        this.calenderSlot[11].ProjectInspectionDetails = value;
                        break;
                    }
                    case "13:00:00": {
                        this.calenderSlot[12].ProjectInspectionDetails = value;
                        break;
                    }
                    case "13:30:00": {
                        this.calenderSlot[13].ProjectInspectionDetails = value;
                        break;
                    }
                    case "14:00:00": {
                        this.calenderSlot[14].ProjectInspectionDetails = value;
                        break;
                    }
                    case "14:30:00": {
                        this.calenderSlot[15].ProjectInspectionDetails = value;
                        break;
                    }
                    case "15:00:00": {
                        this.calenderSlot[16].ProjectInspectionDetails = value;
                        break;
                    }
                    case "15:30:00": {
                        this.calenderSlot[17].ProjectInspectionDetails = value;
                        break;
                    }
                    case "16:00:00": {
                        this.calenderSlot[18].ProjectInspectionDetails = value;
                        break;
                    }
                    case "16:30:00": {
                        this.calenderSlot[19].ProjectInspectionDetails = value;
                        break;
                    }
                    case "17:00:00": {
                        this.calenderSlot[20].ProjectInspectionDetails = value;
                        break;
                    }
                    case "17:30:00": {
                        this.calenderSlot[21].ProjectInspectionDetails = value;
                        break;
                    }
                    default: {
                        this.calenderSlot[0].ProjectInspectionDetails = value;
                        break;
                    }
                }
            }
        });
    }

    assignDivs() {

        this.divMappers[0] = new DivMapperModel("07:00:00", 0, <InspectionDetailsComponent>this.$refs.calenderSlot0);
        this.divMappers[1] = new DivMapperModel("07:30:00", 1, <InspectionDetailsComponent>this.$refs.calenderSlot1);
        this.divMappers[2] = new DivMapperModel("08:00:00", 2, <InspectionDetailsComponent>this.$refs.calenderSlot2);
        this.divMappers[3] = new DivMapperModel("08:30:00", 3, <InspectionDetailsComponent>this.$refs.calenderSlot3);
        this.divMappers[4] = new DivMapperModel("09:00:00", 4, <InspectionDetailsComponent>this.$refs.calenderSlot4);
        this.divMappers[5] = new DivMapperModel("09:30:00", 5, <InspectionDetailsComponent>this.$refs.calenderSlot5);
        this.divMappers[6] = new DivMapperModel("10:00:00", 6, <InspectionDetailsComponent>this.$refs.calenderSlot6);
        this.divMappers[7] = new DivMapperModel("10:30:00", 7, <InspectionDetailsComponent>this.$refs.calenderSlot7);
        this.divMappers[8] = new DivMapperModel("11:00:00", 8, <InspectionDetailsComponent>this.$refs.calenderSlot8);
        this.divMappers[9] = new DivMapperModel("11:30:00", 9, <InspectionDetailsComponent>this.$refs.calenderSlot9);
        this.divMappers[10] = new DivMapperModel("12:00:00", 10, <InspectionDetailsComponent>this.$refs.calenderSlot10);
        this.divMappers[11] = new DivMapperModel("12:30:00", 11, <InspectionDetailsComponent>this.$refs.calenderSlot11);
        this.divMappers[12] = new DivMapperModel("13:00:00", 12, <InspectionDetailsComponent>this.$refs.calenderSlot12);
        this.divMappers[13] = new DivMapperModel("13:30:00", 13,<InspectionDetailsComponent>this.$refs.calenderSlot13);
        this.divMappers[14] = new DivMapperModel("14:00:00", 14, <InspectionDetailsComponent>this.$refs.calenderSlot14);
        this.divMappers[15] = new DivMapperModel("14:30:00", 15, <InspectionDetailsComponent>this.$refs.calenderSlot15);
        this.divMappers[16] = new DivMapperModel("15:00:00", 16, <InspectionDetailsComponent>this.$refs.calenderSlot16);
        this.divMappers[17] = new DivMapperModel("15:30:00", 17, <InspectionDetailsComponent>this.$refs.calenderSlot17);
        this.divMappers[18] = new DivMapperModel("16:00:00", 18, <InspectionDetailsComponent>this.$refs.calenderSlot18);
        this.divMappers[19] = new DivMapperModel("16:30:00", 19, <InspectionDetailsComponent>this.$refs.calenderSlot19);
        this.divMappers[20] = new DivMapperModel("17:00:00", 20, <InspectionDetailsComponent>this.$refs.calenderSlot20);
        this.divMappers[21] = new DivMapperModel("17:30:00", 21, <InspectionDetailsComponent>this.$refs.calenderSlot21);

    }

    openEditModal() {
        this.bindServiceTechList = true;
        this.editModal.open = true;
        this.editModal.title = this.area + " Route"
        this.editModal.showModal(JSON.parse(JSON.stringify(this.model)), false);
    }

    editSuccessCallback() {
    }

    ServiceTechSelected(e: any) {
        this.selectedFieldTechId = e.sender.value();
        this.selectedFieldTechName = e.sender.text();
    }
    onSaveClicked() {
        this.editModal.open = false;
        if (this.editModal.validate()) {
            this.model.FieldTechName = this.selectedFieldTechName;
            this.model.FieldTechId = this.selectedFieldTechId;
        }
    }
}
