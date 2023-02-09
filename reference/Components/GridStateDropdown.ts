import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { DropdownListValues } from "@ExemplarViewModels/DropdownListValues"
import GridDropdownBase from "./GridDropdownBase";

@Component({
    template: "#grid-state-dropdown-template"
})
export default class GridStateDropdown extends GridDropdownBase {

    generateData(): Array<DropdownListValues> {
        var model: [DropdownListValues] = [new DropdownListValues('Select a State', '0')];
        model.push(new DropdownListValues('Alabama', '1'));
        model.push(new DropdownListValues('Alaska', '2'));
        model.push(new DropdownListValues('Arizona', '3'));
        model.push(new DropdownListValues('Arkansas', '4'));
        model.push(new DropdownListValues('California', '5'));
        model.push(new DropdownListValues('Colorado', '6'));
        model.push(new DropdownListValues('Connecticut', '7'));
        model.push(new DropdownListValues('Delaware', '8'));
        model.push(new DropdownListValues('District of Columbia', '9'));
        model.push(new DropdownListValues('Florida', '10'));
        model.push(new DropdownListValues('Georgia', '11'));
        model.push(new DropdownListValues('Hawaii', '12'));
        model.push(new DropdownListValues('Idaho', '13'));
        model.push(new DropdownListValues('Illinois', '14'));
        model.push(new DropdownListValues('Indiana', '15'));
        model.push(new DropdownListValues('Iowa', '16'));
        model.push(new DropdownListValues('Kansas', '17'));
        model.push(new DropdownListValues('Kentucky', '18'));
        model.push(new DropdownListValues('Louisiana', '19'));
        model.push(new DropdownListValues('Maine', '20'));
        model.push(new DropdownListValues('Maryland', '21'));
        model.push(new DropdownListValues('Massachusetts', '22'));
        model.push(new DropdownListValues('Michigan', '23'));
        model.push(new DropdownListValues('Minnesota', '24'));
        model.push(new DropdownListValues('Mississippi', '25'));
        model.push(new DropdownListValues('Missouri', '26'));
        model.push(new DropdownListValues('Montana', '27'));
        model.push(new DropdownListValues('Nebraska', '28'));
        model.push(new DropdownListValues('Nevada', '29'));
        model.push(new DropdownListValues('New Hampshire', '30'));
        model.push(new DropdownListValues('New Jersey', '31'));
        model.push(new DropdownListValues('New Mexico', '32'));
        model.push(new DropdownListValues('New York', '33'));
        model.push(new DropdownListValues('North Carolina', '34'));
        model.push(new DropdownListValues('North Dakota', '35'));
        model.push(new DropdownListValues('Ohio', '36'));
        model.push(new DropdownListValues('Oklahoma', '37'));
        model.push(new DropdownListValues('Oregon', '38'));
        model.push(new DropdownListValues('Pennsylvania', '39'));
        model.push(new DropdownListValues('Rhode Island', '40'));
        model.push(new DropdownListValues('South Carolina', '41'));
        model.push(new DropdownListValues('South Dakota', '42'));
        model.push(new DropdownListValues('Tennessee', '43'));
        model.push(new DropdownListValues('Texas', '44'));
        model.push(new DropdownListValues('Utah', '45'));
        model.push(new DropdownListValues('Vermont', '46'));
        model.push(new DropdownListValues('Virginia', '47'));
        model.push(new DropdownListValues('Washington', '48'));
        model.push(new DropdownListValues('West Virginia', '49'));
        model.push(new DropdownListValues('Wisconsin', '50'));
        model.push(new DropdownListValues('Wyoming', '51'));
        return model;
    }
}