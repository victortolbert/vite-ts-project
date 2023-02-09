import { Container, interfaces } from "inversify";
import { Component } from "./component";
import { IocContainer } from "./IocContainer";
import AssetExportsIndexComponent from "../../Areas/AssetExport/Scripts/AssetExportsIndex";
import AutoSchedulerIndexComponent from "../../Areas/Technician/Scripts/AutoScheduler/AutoSchedulerIndex";
import UserIndexComponent from "../../Areas/User/Scripts/UserIndex";
import PropertyInspectionsIndexComponent from "../../Areas/PropertyInspection/Scripts/PropertyInspectionsIndex";
import TerritoriesIndexComponent from "../../Areas/Territory/Scripts/TerritoriesIndex";
import ServiceTypesIndexComponent from "../../Areas/ServiceType/Scripts/ServiceTypesIndex";
import CustomersIndexComponent from "../../Areas/Customer/Scripts/CustomersIndex";
import SamplesIndexComponent from "../../Areas/Samples/Scripts/SamplesIndex";
import ServiceAreasIndexComponent from "../../Areas/ServiceArea/Scripts/ServiceAreasIndex";
import UtilitiesIndexComponent from "../../Areas/Utility/Scripts/UtilitiesIndex";
import HomeIndexComponent from "../../scripts/Home/Scripts/HomeIndex";
import RolesIndexComponent from "../../Areas/Role/Scripts/RolesIndex";
import PortalIndexComponent from "../../Areas/Portal/Scripts/PortalIndex";
import Vue from "Vue";
import AnnouncementsIndexComponent from "../../Areas/Announcement/Scripts/AnnouncementIndex";
import ExemplarFeatureIndexComponent from "../../Areas/ExemplarFeature/Scripts/ExemplarFeatureIndex";
import ExemplarFeatureFunctionIndexComponent from "../../Areas/ExemplarFeatureFunction/Scripts/ExemplarFeatureFunctionIndex";
import BillingIndexComponent from "../../Areas/Billing/Scripts/BillingIndex";
import ProjectIndexComponent from "../../Areas/Project/Scripts/ProjectIndex";
export declare type PageComponentCreatedHandler = () => void;

/**
 * Main application bootrapper, which will handle dynamic loading of the module responsible for the current area/controller/view.
 */
export class Application {

  public pageComponentCreated!: PageComponentCreatedHandler;

  private _controllerName!: string;
  private _viewName!: string;
  private _pageComponent!: Component;
  private _iocContainer!: interfaces.Container;

  get container(): HTMLElement {
    return $("body").get(0);
  }

  get controllerName(): string {
    return this._controllerName;
  }

  get pageComponent(): Component {
    return this._pageComponent;
  }

  get iocContainer(): interfaces.Container {
    return this._iocContainer;
  }

  /** Loads the typescript module for the current area/controller/view. */
  load(): void {
    const load = new Promise(async () => {


      this._controllerName = $("body").data("ts-controller");

      this._viewName = $("body").data("ts-view");

      console.log("ControllerName: " + this._controllerName + " | ViewName: " + this._viewName);

      await this.setupContainer();

      try {
        if (this.controllerName) {
          this.loadComponent();
        } else {
          // No page level component found
          console.log("[Application] No page-level component");
        }
      } catch (e) {
        console.log("[Application] load error: %s", e);
      }

      // Body initially hidden to prevent flash of unstyled content (FOUC).
      $(document.body).show();

      if (this._pageComponent) {
        this._pageComponent.onShow();
      }

    });
  }

  /** Setup the IoC container pulling in the area specific registrations */
  private async setupContainer(): Promise<void> {
    const iocContainer = new IocContainer();   // setup the Common IOC Container

    try {
      const container = await import("./IocContainer");
      const shareIocContainer = new container.IocContainer();
      shareIocContainer.configureIocContainer();
      this._iocContainer = shareIocContainer.container;
      // Setup the Area Specific IOC Container
    } catch (err) {
      console.log("[Application] Error loading Area IOC Config - $s", err);

      // this._iocContainer = commonContainer.container;
    }
  }

  /** Loads all component scripts for a given area. */
  private loadComponent(): void {
    this.createPageComponent(this._controllerName + this._viewName);
  }

  /** Creates the component required for a page to function. */
  private createPageComponent(componentName: string): void {

    let pageComponent: any;
    var componentFound: boolean = true;

    console.log("Component Name: " + componentName)

    switch (componentName) {
      case "AnnouncementsIndex":
        pageComponent = AnnouncementsIndexComponent;
        break;
      case "AssetExportsIndex":
        pageComponent = AssetExportsIndexComponent;
        break;
      case "AutoSchedulerIndex":
        pageComponent = AutoSchedulerIndexComponent;
        break;
      case "BillingsIndex":
        pageComponent = BillingIndexComponent;
        break;
      case "CustomersIndex":
        pageComponent = CustomersIndexComponent;
        break;
      case "ExemplarFeaturesIndex":
        pageComponent = ExemplarFeatureIndexComponent;
        break;
      case "ExemplarFeatureFunctionsIndex":
        pageComponent = ExemplarFeatureFunctionIndexComponent;
        break;
      case "HomeIndex":
        pageComponent = HomeIndexComponent;
        break;
      case "ProjectsIndex":
        pageComponent = ProjectIndexComponent;
        break;
      case "PropertyInspectionsIndex":
        pageComponent = PropertyInspectionsIndexComponent;
        break;
      case "PortalIndex":
        pageComponent = PortalIndexComponent;
        break;
      case "RolesIndex":
        pageComponent = RolesIndexComponent;
        break;
      case "SamplesIndex":
        pageComponent = SamplesIndexComponent;
        break;
      case "ServiceAreasIndex":
        pageComponent = ServiceAreasIndexComponent;
        break;
      case "ServiceTypesIndex":
        pageComponent = ServiceTypesIndexComponent;
        break;
      case "TerritoriesIndex":
        pageComponent = TerritoriesIndexComponent;
        break;
      case "UsersIndex":
        pageComponent = UserIndexComponent;
        break;
      case "UtilitiesIndex":
        pageComponent = UtilitiesIndexComponent;
        break;
      default:
        componentFound = false;
    }

    //...then set the page component as a component on the root Vue instance
    if (componentFound) {

      const rootVue = new Vue({
        el: "#root",
        components: {
          pageComponent
        }
      });
      return;
    }

    if (this._pageComponent && this.pageComponentCreated) {
      this.pageComponentCreated();
    }
    console.log("Page Component: " + pageComponent);
  }

  /**
   * Handler for when the dynamic import for a script fails.
   * @param message The reason for the import failure.
   * @param stack The stack trace where the error occurred.
   */
  private onImportChunkRejected(reason: any): void {
    console.log("Application: An error occurred while loading the component. Controller: " + this.controllerName);

    if (reason.message !== undefined) {
      console.log("Error: " + reason.message);
    }

    if (reason.stack !== undefined) {
      console.log("Stack: " + reason.stack);
    }
  }
}

const app: Application = new Application();
export default app;
