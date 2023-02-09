import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  template: "#billing-issues-cell-template"
})
export default class BillingIssuesCell extends Vue {
  showButton: boolean = false;

  @Prop()
  dataItem: any;

  handleClick() {
    this.dataItem!.$emitGridEvent("issuesbuttonclick", this.dataItem!.BillingIssues)
  }

  mounted() {
    this.updateStatus();
    this.showButton = !!this.dataItem?.BillingIssues;
  }

  @Watch("dataItem", { deep: true })
  updateStatus(): void {
    this.showButton = !!this.dataItem?.BillingIssues;
  }
}
