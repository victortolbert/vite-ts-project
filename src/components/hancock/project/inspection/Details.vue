<template>
  <div v-if="ready">
    <!-- Inspection Detail Card -->
    <div
      v-if="model.ProjectInspectionDetails"
      v-on:click="moveInspection"
      v-on:mouseover="hovered = true"
      v-on:mouseleave="hovered = false"
      v-bind:style="{ left: position + 'px' }"
      v-bind:class="[{ ninetyWidth: model.ProjectInspectionDetails.Duration == 90, sixtyWidth: model.ProjectInspectionDetails.Duration == 60, thirtyWidth: model.ProjectInspectionDetails.Duration <= 30, borderLeft: showLeftBorder, flipped: showMoreDetails, selected: isSelected }, 'cursor h-card h-full p-1 text-2xs absolute']"
    >
      <div class="h-full">
        <div
          v-bind:class="[{
            'bg-green-100 text-green-800 border-green-500 hover:border-green-900': model.ProjectInspectionDetails.IsException ? false : !model.ProjectInspectionDetails.ManuallyAssigned,
            'bg-blue-100 text-blue-800 border-blue-500 hover:border-blue-900': model.ProjectInspectionDetails.ManuallyAssigned,
            'bg-purple-100 text-purple-800 border-purple-500 hover:border-purple-900': model.ProjectInspectionDetails.RemovedRoute,
            'bg-red-100 text-red-800 border-red-500 hover:border-red-900': model.ProjectInspectionDetails.IsException,
          }, 'border h-full text-2xs h-card-front p-1 select-none']"
        >
          <h4
            class="font-bold"
          >{{ model.ProjectInspectionDetails.ShortName }} - {{ model.ProjectInspectionDetails.ProjectNumber }}</h4>

          <div
            v-show="!model.ProjectInspectionDetails.HasValidTime"
            class="flex items-center space-x-1 asInvalidTime"
          >
            <span>Invalid Time</span>
            <span>{{ model.ProjectInspectionDetails.InspectionTime }}</span>
          </div>

          <div
            v-show="model.ProjectInspectionDetails.HasValidTime"
            class="flex items-center space-x-1"
          >
            <!-- <span>End</span> -->
            <span
              title="Adjuster"
            >{{ model.ProjectInspectionDetails.AdjusterName }} ({{ model.ProjectInspectionDetails.AdjusterPhone }})</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Inspection Moved -->
    <div
      v-if="!model.ProjectInspectionDetails"
      v-on:click="inspectionMoved"
      v-bind:style="{ left: position + 'px' }"
      v-bind:class="{
        cursor: showOutline,
        showOutline: showOutline,
      }"
      class="absolute h-full p-1 cursor h-card text-2xs"
    >
      <div class="h-full h-card-inner">
        <div class="h-full p-1">
          <div
            class="flex items-center justify-center h-full select-none bg-primary-100"
          >{{ moveMessage }}</div>
        </div>
      </div>
    </div>

    <div v-if="hovered">
      <section
        class="fixed right-0 z-20 w-full px-4 mx-auto mb-1 pointer-events-none bottom-8 sm:px-6"
        style="margin-bottom: 20px"
      >
        <div class="w-full p-4 bg-white border rounded-md shadow-md border-primary-500">
          <div class="flex justify-between w-full space-x-8">
            <div
              class="w-1/3 mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
              style="width: 33.3333%"
            >
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Company</span>
                <span class="text-gray-900">{{ model.ProjectInspectionDetails.CompanyName }}</span>
              </div>
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Claim Number</span>
                <span class="text-gray-900">{{ model.ProjectInspectionDetails.ClaimNumber }}</span>
              </div>
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Project Number</span>
                <span class="text-gray-900">{{ model.ProjectInspectionDetails.ProjectNumber }}</span>
              </div>
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Adjuster</span>
                <span class="text-gray-900">
                  {{ model.ProjectInspectionDetails.AdjusterName }}
                  {{ model.ProjectInspectionDetails.AdjusterPhone }}
                  {{ model.ProjectInspectionDetails.AdjusterAddress }}
                </span>
              </div>
            </div>

            <div
              class="w-1/3 mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
              style="width: 33.3333%"
            >
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Location</span>
                <span
                  class="text-gray-900"
                >{{ model.ProjectInspectionDetails.InspectionAddress }}, {{ model.ProjectInspectionDetails.City }} {{ model.ProjectInspectionDetails.State }} {{ model.ProjectInspectionDetails.PostalCode }}</span>
              </div>
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Inspection Date</span>
                <span class="text-gray-900">{{ model.ProjectInspectionDetails.InspectionDate }}</span>
              </div>
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Inspection Time</span>
                <span class="text-gray-900">{{ model.ProjectInspectionDetails.InspectionTime }}</span>
              </div>
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Service Type(s)</span>
                <span class="text-gray-900">{{ model.ProjectInspectionDetails.ServiceType }}</span>
              </div>
              <div
                v-if="model.ProjectInspectionDetails.ManuallyAssigned && model.ProjectInspectionDetails.ProjectInspectionTechnicianCreatedBy"
                class="flex justify-between py-1 text-xs font-medium"
              >
                <span class="text-gray-500">Assigned By</span>
                <span
                  class="text-gray-900"
                >{{ model.ProjectInspectionDetails.ProjectInspectionTechnicianCreatedBy }}</span>
              </div>
              <div
                v-if="model.ProjectInspectionDetails.IsException && model.ProjectInspectionDetails.OriginalFieldTechId > 0"
                class="flex justify-between py-1 text-xs font-medium"
              >
                <span class="text-gray-500">Assigned Tech</span>
                <span>{{ model.ProjectInspectionDetails.FieldTechName }}</span>
              </div>
            </div>

            <div
              class="w-1/3 mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
              style="width: 33.3333%"
            >
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Duration</span>
                <span class="text-gray-900">{{ model.ProjectInspectionDetails.Duration }}</span>
              </div>
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Estimated Inspection End Time (Duration + Buffer):</span>
                <span
                  class="text-gray-900"
                >{{ model.ProjectInspectionDetails.InspectionEndTimeWithBufferConverted }}</span>
              </div>
              <div class="flex justify-between py-1 text-xs font-medium">
                <span class="text-gray-500">Drive Minutes from Previous Inspection</span>
                <span
                  class="text-gray-900"
                >{{ model.ProjectInspectionDetails.TravelMinutesFromPrevious }}</span>
              </div>
              <div
                v-if="model.ProjectInspectionDetails.RemovedRoute"
                class="flex justify-between py-1 text-xs font-medium"
              >
                <span class="text-gray-500">Original Field Tech</span>
                <span
                  class="text-gray-900"
                >{{ model.ProjectInspectionDetails.OriginalFieldTechName }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
