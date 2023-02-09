/// <reference path="../ioccontainer.ts" />
import { AutoSchedulerBase } from "../AutoSchedulerBase";
import { Component, Prop, Watch } from "vue-property-decorator";
import { AutoSchedulerEvents, EventBus } from "../AutoSchedulerEvents"
import { CalenderSlot } from "./../ViewModels/CalenderSlot";


/* tslint:disable:object-literal-shorthand */
@Component({
    template: "#inspection-details-template",
    components: {}
})
export default class InspectionDetailsComponent extends AutoSchedulerBase<CalenderSlot> {
    @Prop({ required: true, type: Object })
    model!: CalenderSlot;

    @Prop({ required: false, type: String })
    startTime!: string;

    @Prop({ required: true, type: Number })
    position: number;

    @Prop({ required: false, type: Boolean })
    showLeftBorder: boolean;

    @Prop({ required: false, type: Boolean })
    showMoreDetails: boolean;

    @Prop({ required: true, type: Number })
    autoschedulerId: number;

    moveModel!: CalenderSlot;

    exemplarLegacyUrl: string = <string>$("#exemplarLegacyUrl").val() + "Project/Detail/";

    moveMessage: string = "";

    newStartTime: string = "";

    widthCss: string = "";
    isSelected: boolean = false;

    showOutline: boolean = this.model.showOutline;

    hovered: boolean = false;

    constructor() {
        super();
    }

    mounted() {

        EventBus.$on(AutoSchedulerEvents.UnSelectDiv, () => {
            this.moveMessage = "";
            this.isSelected = false;
            this.showOutline = false;
        });

        this.ready = true;
    }

    CalculateWidthCSS() {

        switch (this.model.ProjectInspectionDetails.Duration) {
            case 90:
                return "fullWidth";
            default:
                return "fullWidth";
        }
    }

    moveInspection() {
        if (this.autoschedulerId > 0)
            return;

        //Stops text highlighting from triggering moveInspection
        if (!!window.getSelection()?.toString().trim()) {
            return;
        }
        var selected = this.isSelected;

        EventBus.$emit(AutoSchedulerEvents.UnSelectDiv);

        if (!selected) {
            this.isSelected = true;
        } else {
            this.isSelected = false;
        }

        if (!this.model.ProjectInspectionDetails.HasValidTime) {
            EventBus.$emit(AutoSchedulerEvents.ShowTimeModal, this.model.ProjectInspectionDetails);

        } else {
            EventBus.$emit(AutoSchedulerEvents.MoveInspection, this.model.ProjectInspectionDetails, this.isSelected);
        }
    }

    inspectionMoved() {
        if (this.model.ProjectInspectionDetails && !this.model.ProjectInspectionDetails.HasValidTime) {
            EventBus.$emit(AutoSchedulerEvents.ShowTimeModal, this.model.ProjectInspectionDetails);
        } else {
            EventBus.$emit(AutoSchedulerEvents.InspectionMoved, this.model.RouteId, this.startTime);
        }
    }
}
