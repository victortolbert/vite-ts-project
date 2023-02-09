<template>
  <article class="mt-4">
    <section-header class="bg-white border rounded shadow">
      Field Tech Availability Manager
      <template
        v-show="!searched"
        #subtitle
      >Please select a Field Tech from the dropdown</template>

      <template #actions>
        <div class="w-full h-field">
          <label
            class="block text-sm font-medium text-gray-700 h-label"
          >Select a technician from the list below:</label>
          <div>
            <dropdown-component
              ref="techlist"
              @onChanged="OnTechSelected($event)"
              :bind-list="bindServiceTechList"
              :uri="serviceAreaTechnicianUri"
            ></dropdown-component>
          </div>
        </div>
      </template>
    </section-header>

    <section v-show="showLoader" class="md:px-6">
      <base-box class="flex items-center justify-center min-h-full mt-4">
        <page-loading-indicator></page-loading-indicator>
      </base-box>
    </section>

    <template v-if="!showLoader && selectedFieldTechId > 0">
      <base-box v-show="searched" class="mt-4">
        <header v-show="selectedFieldTechId > 0">
          <div class="items-center justify-between p-4 pb-0 sm:flex">
            <h2
              class="text-lg font-semibold text-black"
            >{{ selectedFieldTechName }} ({{ selectedFieldTechArea }})</h2>
          </div>
        </header>

        <div class="items-start justify-between w-full mt-4 md:flex md:space-x-4">
          <section id="available" class="w-full lg:w-1/2">
            <header
              class="flex items-center justify-between px-4 py-2 bg-brand-50 xavailabilityRowHeader"
            >
              <h3 class="font-medium text-black">Available</h3>
              <button
                v-on:click="AddAvailabilityRecord(true)"
                type="button"
                class="inline-flex items-center px-2 rounded whitespace-nowrap xblueLink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <i-heroicons-solid-plus-sm />
                <span>Add Availability</span>
              </button>
            </header>

            <!-- Available Items -->
            <div class="pb-4 mt-2 space-y-1">
              <div v-for="availability in availDataSource">
                <div class="flex items-center justify-between">
                  <div class="flex-1 px-4">
                    <a href="#" class="hover:underline">{{ availability.ServiceAreaName }}</a>
                  </div>
                  <div class="flex-1 text-center">
                    <span>{{ availability.StartDate }} thru {{ availability.EndDate }}</span>
                  </div>
                  <div class="flex-1 px-4 text-right">
                    <button
                      v-on:click="ConfirmDelete(availability, RemoveAvailabilitySuccessCallback)"
                      type="button"
                      class="inline-flex items-center px-2 rounded whitespace-nowrap xblueLink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      <i-heroicons-solid-trash />
                      <span class="ml-1">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="not-available" class="w-full lg:w-1/2">
            <header
              class="flex items-center justify-between px-4 py-2 bg-brand-50 xavailabilityRowHeader"
            >
              <h3 class="font-medium text-black">Not Available</h3>
              <button
                v-on:click="AddAvailabilityRecord(false)"
                type="button"
                class="inline-flex items-center px-2 rounded whitespace-nowrap xblueLink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <i-heroicons-solid-plus-sm />
                <span>Add Not Available</span>
              </button>
            </header>

            <!-- Not Available Items -->
            <div class="pb-4 mt-2 space-y-1">
              <div v-for="availability in notAvailDataSource">
                <div class="flex items-center justify-between">
                  <div class="flex-1 px-4">
                    <a href="#" class="hover:underline">{{ availability.ServiceAreaName }}</a>
                  </div>
                  <div class="flex-1 text-center">
                    <span>{{ availability.StartDate }} thru {{ availability.EndDate }}</span>
                  </div>
                  <div class="flex-1 px-4 text-right">
                    <button
                      v-on:click="ConfirmDelete(availability, RemoveAvailabilitySuccessCallback)"
                      type="button"
                      class="inline-flex items-center px-2 rounded whitespace-nowrap xblueLink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      <i-heroicons-solid-trash />
                      <span class="ml-1">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </base-box>

      <div v-if="deleteService.open">
        <b-modal
          ref="deleteModal"
          v-model="deleteService.open"
          :no-close-on-backdrop="deleteService.noCloseOnBackdrop"
          :no-close-on-esc="deleteService.noCloseOnEsc"
          title="Confirm Delete"
          ok-title="Yes"
          cancel-title="Cancel"
          v-on:hide="onHide"
          v-on:ok.prevent="DeleteConfirmed"
          header-class="card-header"
        >
          <p v-if="deleteService">{{ deleteService.promptText }}</p>
        </b-modal>
      </div>
    </template>

    <edit-component
      :display-modal="showEditForm"
      :model="model"
      :title="title"
      :is-insert="true"
      :route="fieldTechAvailabilityRoute.Insert()"
      :success-callback="AddAvailabilityCallback"
      :model-validator="fieldTechAvailabilityValidator"
    >
      <template #form>
        <form class="formContainerStacked">
          <div v-if="!model.IsAvailable">
            <div class="formLabel">
              Please indicate a start and end date that {{ selectedFieldTechName }} will not
              be available to service the {{ selectedFieldTechArea }} area:
            </div>
          </div>

          <div class="mt-4 h-field" v-if="model.IsAvailable">
            <label
              class="block h-label"
            >Please select the area {{ selectedFieldTechName }} will be available in:</label>

            <div class="mt-1">
              <dropdown-component
                ref="AreaList"
                @onChanged="onAreaChanged($event)"
                :bind-list="bindAreaList"
                :uri="serviceAreaUri"
              ></dropdown-component>
            </div>
          </div>

          <div class="mt-4 h-field">
            <label class="block h-label">Please select a Start Date</label>
            <div class="mt-1">
              <kendo-datepicker
                style="width: 100%; background-color: white; min-width: 320px"
                v-model="model.StartDate"
                :format="'MMMM/dd/yyyy'"
              ></kendo-datepicker>
            </div>
          </div>

          <div class="mt-4 h-field">
            <label class="block h-label">Please select an End Date</label>
            <div class="mt-1">
              <kendo-datepicker
                style="width: 100%; background-color: white; min-width: 320px"
                v-model="model.EndDate"
                :format="'MMMM/dd/yyyy'"
              ></kendo-datepicker>
            </div>
          </div>
        </form>
      </template>
    </edit-component>
  </article>
</template>
