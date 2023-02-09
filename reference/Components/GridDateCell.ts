import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
    template: "#grid-date-cell-template"
})
export default class GridDateCell extends Vue {
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
        this.formattedDate = new Date(this.value).toLocaleDateString('en-US');
    }
}