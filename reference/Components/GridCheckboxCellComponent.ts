import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    template: "#grid-checkbox-cell-template"
})
export default class GridCheckboxCell extends Vue {
    checked: boolean = false;
    iconClass: string = "k-i-checkbox";

    @Prop()
    dataItem: any;

    handleCheckboxChange(event: Event) {
        const input = event.target as HTMLInputElement;
        this.dataItem.editValues[this.$parent.$props.field] = input.checked;
    }

    mounted() {
        this.checked = this.dataItem && this.dataItem[this.$parent.$props.field];
        this.iconClass = `k-icon k-i-checkbox${this.checked ? "-checked": ""}`
    }
}