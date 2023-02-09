import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
    template: "#grid-selection-cell-template"
})
export default class GridSelectionCell extends Vue {
    checked: boolean = false;
    iconClass: string = "k-i-checkbox";

    @Prop()
    dataItem: any;

    handleCheckboxChange(event: Event) {
        const input = event.target as HTMLInputElement;
        this.dataItem.editValues[this.$parent.$props.field] = input.checked;
    }

    mounted() {
        this.updateCheck();
    }

    @Watch("dataItem", { deep: true })
    updateCheck(): void {
        this.checked = this.dataItem && this.dataItem[this.$parent.$props.field];
        this.iconClass = `k-icon k-i-checkbox${this.checked ? "-checked" : ""}`
    }
}