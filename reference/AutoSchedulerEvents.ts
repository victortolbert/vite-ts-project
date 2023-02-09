import Vue from "Vue";


// Used to pass events between components rather than raising global events.
// See https://alligator.io/vuejs/global-event-bus/
export const EventBus = new Vue();

export enum AutoSchedulerEvents {
  AvailabilityClicked = "availability-clicked",
  Availability = "availability-clicked",
  MoveInspection = "move-inspection",
  InspectionMoved = "inspection-moved",
  UnSelectDiv = "unselect-div",
  ShowTimeModal = "show-time-modal"
}
