import Vue from "Vue";

// Used to pass events between components rather than raising global events.
// See https://alligator.io/vuejs/global-event-bus/
export const GlobalEventBus = new Vue();

export enum GlobalEvents {



  CloseEditModal = "close-edit-modal",
  CloseEditForm = "close-edit-form",
  CloseAuditLog = "close-audit-log",
  Unauthorized = "unauthorized",
  Validated = "validated"

}
