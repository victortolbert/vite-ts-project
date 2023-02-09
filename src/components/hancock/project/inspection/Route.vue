<template>
  <div v-if="routesReady" class="flex w-full h-20">
    <div
      class="absolute z-10 flex flex-col flex-shrink-0 w-40 h-20 p-1 text-xs bg-white -ml-480 inspection-label"
      style="margin-left: -1920px"
    >
      <div class="h-full px-3 py-2 select-none bg-primary-50">
        <a
          v-if="route.ProjectInspectionDetails.length"
          v-on:click="openEditModal()"
          role="button"
          class="font-bold underline cursor-pointer text-primary-500 hover:underline"
        >{{ route.FieldTechName }}</a>
        <span v-else class="font-bold text-gray-500">{{ route.FieldTechName }}</span>

        <span v-if="model.FieldTechId > 0" class="flex items-baseline space-x-1">
          <span class="text-sm">{{ route.Miles }}</span>
          <span class="text-gray-500">Minutes</span>
        </span>
      </div>
    </div>

    <inspection-details-component
      ref="CalendarSlot0"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[0]"
      :start-time="this.divMappers[0].startTime"
      :position="slot1Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot1"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[1]"
      :start-time="this.divMappers[1].startTime"
      :show-left-border="true"
      :position="slot2Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot2"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[2]"
      :start-time="this.divMappers[2].startTime"
      :position="slot3Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot3"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[3]"
      :start-time="this.divMappers[3].startTime"
      :show-left-border="true"
      :position="slot4Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot4"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[4]"
      :start-time="this.divMappers[4].startTime"
      :position="slot5Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot5"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[5]"
      :start-time="this.divMappers[5].startTime"
      :show-left-border="true"
      :position="slot6Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot6"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[6]"
      :start-time="this.divMappers[6].startTime"
      :position="slot7Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot7"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[7]"
      :start-time="this.divMappers[7].startTime"
      :show-left-border="true"
      :position="slot8Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot8"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[8]"
      :start-time="this.divMappers[8].startTime"
      :position="slot9Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot9"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[9]"
      :start-time="this.divMappers[9].startTime"
      :show-left-border="true"
      :position="slot10Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot10"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[10]"
      :start-time="this.divMappers[10].startTime"
      :position="slot11Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot11"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[11]"
      :start-time="this.divMappers[11].startTime"
      :show-left-border="true"
      :position="slot12Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot12"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[12]"
      :start-time="this.divMappers[12].startTime"
      :position="slot13Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot13"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[13]"
      :start-time="this.divMappers[13].startTime"
      :show-left-border="true"
      :position="slot14Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot14"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[14]"
      :start-time="this.divMappers[14].startTime"
      :position="slot15Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot15"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[15]"
      :start-time="this.divMappers[15].startTime"
      :show-left-border="true"
      :position="slot16Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot16"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[16]"
      :start-time="this.divMappers[16].startTime"
      :position="slot17Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot17"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[17]"
      :start-time="this.divMappers[17].startTime"
      :show-left-border="true"
      :position="slot18Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot18"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[18]"
      :start-time="this.divMappers[18].startTime"
      :position="slot19Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot19"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[19]"
      :start-time="this.divMappers[19].startTime"
      :show-left-border="true"
      :position="slot20Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot20"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[20]"
      :start-time="this.divMappers[20].startTime"
      :position="slot21Left"
    ></inspection-details-component>
    <inspection-details-component
      ref="CalendarSlot21"
      :autoscheduler-id="autoschedulerId"
      :model="CalendarSlot[21]"
      :start-time="this.divMappers[21].startTime"
      :show-left-border="true"
      :position="slot22Left"
    ></inspection-details-component>
    <div v-if="editModal.open">
      <b-modal
        id="editModal"
        v-model="editModal.open"
        header-class="card-header"
        :no-close-on-backdrop="editModal.noCloseOnBackdrop"
        :no-close-on-esc="editModal.noCloseOnEsc"
        v-on:hide="onHide"
        size="md"
      >
        <div slot="modal-title">
          <h2
            class="text-lg font-semibold text-primary-500"
          >{{ editModal.data.FieldTechName }} Route</h2>
        </div>
        <div class="modalMessage validation" v-show="editModal.validator">
          <label class="col-sm-12">{{ editModal.validator }}</label>
        </div>

        <div class="flexRowBetween label">
          <div class="flex items-center justify-between">
            <span>Inspection Date</span>
            <span>{{ editModal.data.ProjectInspectionDetails[0].InspectionDate }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span>Total Travel Minutes</span>
            <span>{{ editModal.data.Miles }} Minutes</span>
          </div>
        </div>

        <div v-for="ProjectInspectionDetails in editModal.data.ProjectInspectionDetails">
          <div class="flexRowStart">
            <div class="flex items-center flexColumnCenter modalTime">
              <span>{{ ProjectInspectionDetails.inspectionTime }}</span>
              <span
                v-show="ProjectInspectionDetails.milesFromPreviousInspection > 0"
                style="font-size: small"
              >({{ ProjectInspectionDetails.milesFromPreviousInspection }} minutes from previous location)</span>
            </div>
            <div class="modalDetails">
              <div class="flex items-center justify-between">
                <span>Company</span>
                <span>{{ ProjectInspectionDetails.CompanyName }}</span>
              </div>

              <div class="flex items-center justify-between">
                <span>Claim</span>
                <span>{{ ProjectInspectionDetails.ClaimNumber }}</span>
              </div>

              <div class="flex items-center justify-between">
                <span>Adjuster</span>
                <span>{{ ProjectInspectionDetails.AdjusterName }}</span>
              </div>

              <div class="flex items-center justify-between">
                <span>Service Type</span>
                <span>{{ ProjectInspectionDetails.ServiceType }}</span>
              </div>

              <div class="flex items-center justify-between">
                <span>Address</span>
                <span>{{ ProjectInspectionDetails.InspectionAddress }} {{ ProjectInspectionDetails.City }}, {{ ProjectInspectionDetails.PostalCode }}</span>
              </div>

              <div class="flex items-center justify-between">
                <span>Miles From Previous Inspection</span>
                <span>{{ ProjectInspectionDetails.TravelMinutesFromPrevious }}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label class="label">Assign Route To</label>
          <dropdown-component
            @onChanged="ServiceTechSelected($event)"
            :bind-list="bindServiceTechList"
            :uri="serviceAreaTechnicianUri"
          ></dropdown-component>
        </div>
        <div slot="modal-footer">
          <div v-if="editModal.showUnsavedChangesWarning">
            <b-alert
              show
              variant="warning"
            >You have unsaved changes. Are you sure you want to cancel?</b-alert>
          </div>
          <div v-if="editModal.showUnsavedChangesWarning" class="text-right">
            <b-button variant="outline-primary" v-on:click.prevent="confirmed">Yes</b-button>
            <b-button
              variant="primary"
              v-on:click.prevent="editModal.showUnsavedChangesWarning = false"
            >No</b-button>
          </div>
          <div>
            <b-button variant="outline-primary" v-on:click.prevent="editModal.open = false">Cancel</b-button>
            <b-button
              variant="primary"
              v-bind:disabled="editModal.busy"
              v-on:click.prevent="onSaveClicked"
            >Save</b-button>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>
