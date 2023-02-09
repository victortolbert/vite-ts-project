<script setup>
import { marked } from 'marked'
</script>

<template>
  <div class="px-8 mt-8">
    <!--  -->
    <div class="w-full max-w-sm lg:max-w-full lg:flex">
      <div
        class="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
        style="background-image: url('https://images.unsplash.com/photo-1454329001438-1752daa90420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80')"
        title="Woman holding a mug"
      ></div>
      <div
        class="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r"
      >
        <div class="mb-8">
          <p class="flex items-center text-sm text-gray-600">
            <svg
              class="w-3 h-3 mr-2 text-gray-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
              />
            </svg>
            Members only
          </p>
          <div class="mb-2 text-xl font-bold text-gray-900">Can coffee make you a better developer?</div>
          <p
            class="text-base text-gray-700"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div class="flex items-center">
          <img
            class="w-10 h-10 mr-4 rounded-full"
            src="/assets/img/avatars/avatar.png"
            alt="Avatar of Jonathan Reinink"
          />
          <div class="text-sm">
            <p class="leading-none text-gray-900">Jonathan Reinink</p>
            <p class="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
    <!--  -->

    <div v-if="true" class="grid grid-cols-4 gap-8 mt-8">
      <div class="w-128d">
        <p-card style="min-height: 512px">
          <template #header>
            <img alt="user header" src="/assets/img/careers-header-iStock-609695302.jpeg" />
          </template>
          <template #title>Ladder Assist</template>
          <template
            #content
          >Adjuster and Technician meet on site at specified time to perform inspection.</template>
          <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button
              icon="pi pi-times"
              label="Cancel"
              class="p-button-secondary"
              style="margin-left: .5em"
            />
          </template>
        </p-card>
      </div>
      <div class="w-128d">
        <p-card style="min-height: 512px">
          <template #header>
            <img alt="user header" src="/assets/img/home-header-bg.jpeg" />
          </template>

          <template #title>Direct Inspection</template>

          <template #content>
            <div
              v-html="marked('Hancock or adjuster sets appointment time with Insured. Inspection reporting provided within 48 hours of inspection. **Insured contact information required**')"
            />
          </template>

          <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button
              icon="pi pi-times"
              label="Cancel"
              class="p-button-secondary"
              style="margin-left: .5em"
            />
          </template>
        </p-card>
      </div>
    </div>
  </div>
</template>
