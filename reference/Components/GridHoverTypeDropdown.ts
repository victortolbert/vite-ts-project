import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import GridDropdownBase from "./GridDropdownBase";

@Component({
    template: "#grid-hovertype-dropdown-template"
})
export default class GridHoverTypeDropdown extends GridDropdownBase {


    generateData(): Array<DropdownListValues> {
        var model: [DropdownListValues] = [new DropdownListValues('Select a Hover Type', '0')];

        model.push(new DropdownListValues('Not Enabled', '1'));
        model.push(new DropdownListValues('Roof Only', '2'));
        model.push(new DropdownListValues('Complete', '3'));
        model.push(new DropdownListValues('Roof Only - XML', '4'));
        model.push(new DropdownListValues('Complete - XML', '5'));

        return model;
    }
}