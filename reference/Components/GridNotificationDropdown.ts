import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import GridDropdownBase from "./GridDropdownBase";

@Component({
    template: "#grid-notification-dropdown-template"
})
export default class GridNotificationDropdown extends GridDropdownBase {


    generateData(): Array<DropdownListValues> {
        var model: [DropdownListValues] = [new DropdownListValues('Select a Notification', '0')];

        model.push(new DropdownListValues('ClaimDeliverables', '5'));
        model.push(new DropdownListValues('InspectionAssigned', '3'));
        model.push(new DropdownListValues('InspectionRescheduled', '7'));
        model.push(new DropdownListValues('InspectionReviewed', '4'));
        model.push(new DropdownListValues('InspectionScheduled', '2'));
        model.push(new DropdownListValues('NotificationToHancock', '6'));
        model.push(new DropdownListValues('ProjectCreated', '1'));     
        
        return model;
    }
}