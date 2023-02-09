// Common Imports
import { Component } from "vue-property-decorator";
import { GlobalEvents, GlobalEventBus } from "@ExemplarCommon/eventBus";
import { PageBase } from "@ExemplarCommon/PageBase";

// Component Imports

// Viewmodel Imports


@Component({
  template: "#home-index",
  components: {
  }
})

export default class HomeIndexComponent extends PageBase<null>  {

  constructor() {
    super();
  }

  mounted() {
    console.log("Dashboard Mounted");

    // Set ClassName below:
    this.className = "Dashboards"

    if (!this.viewStatePresent) {
      return;
    }
    //this.ValidateViewState();

    GlobalEventBus.$on(GlobalEvents.Unauthorized, () => {
      this.unauthorized = true;
    });
  }
}
