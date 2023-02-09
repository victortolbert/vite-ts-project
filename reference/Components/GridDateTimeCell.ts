import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import GridDateCell from "./GridDateCell";

@Component({
    template: "#grid-date-cell-template"
})
export default class GridDateTimeCell extends GridDateCell {
    @Prop()
    dataItem: any;

    formattedDate = "";
    value: string;

    mounted() {
        this.update();
    }

    @Watch("dataItem", { deep: true })
    update(): void {
        this.value = this.dataItem && this.dataItem[this.$parent.$props.field];
        this.formattedDate = new Date(this.value).toLocaleString('en-US');
    }
}