import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { ProjectGridItem } from "../../../Scripts/ViewModels/ProjectGridItem";

interface IProjectGridItemWithActions extends ProjectGridItem {
  Actions: {
    flag: { disabled: boolean, show: boolean },
    schedule: { disabled: boolean, show: boolean },
  },
  $emitGridEvent: (name: string, ...data: any[]) => void,
}
@Component({
  template: "#project-grid-buttons-template"
})
export default class BillingIssuesCell extends Vue {
  flagClass: string = "";
  scheduleClass: string = "";

  @Prop()
  dataItem: IProjectGridItemWithActions;

  handleFlag(): void {
    !this.dataItem!.Actions.flag.disabled && this.dataItem!.$emitGridEvent("flagbuttonclicked", this.dataItem!.Id);
  }

  handleScheduler(): void {
    !this.dataItem!.Actions.schedule.disabled && this.dataItem!.$emitGridEvent("schedulerbuttonclicked", this.dataItem!.Id);
  }

  mounted(): void {
    this.updateStatus();
  }

  @Watch("dataItem", { deep: true })
  updateStatus(): void {
    this.flagClass = this.dataItem!.Actions.flag.disabled ? "disabled" : "";
    this.scheduleClass = this.dataItem!.Actions.schedule.disabled ? "disabled" : "";
  }
}
