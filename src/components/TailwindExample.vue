<script setup lang="ts">
</script>

<template>
  <article>
    <section class="px-8">
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
        <dt id="timezone-option-label" class="text-sm font-medium text-gray-500">
          Automatic timezone
        </dt>
        <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <button
            type="button"
            class="
                relative
                inline-flex
                flex-shrink-0
                h-6
                w-11
                border-2
                border-transparent
                rounded-full
                cursor-pointer
                transition-colors
                ease-in-out
                duration-200
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-primary-500
                sm:ml-auto
                bg-primary-600
              "
            role="switch"
            aria-checked="true"
            :class="{ 'bg-gray-200': !true }"
            aria-labelledby="timezone-option-label"
          >
            <span
              aria-hidden="true"
              class="
                  inline-block
                  h-5
                  w-5
                  rounded-full
                  bg-white
                  shadow
                  transform
                  ring-0
                  transition
                  ease-in-out
                  duration-200
                  translate-x-5
                "
            />
          </button>
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt class="text-sm font-medium text-gray-500">
          Name
        </dt>
        <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <span class="flex-grow">Chelsea Hagon</span>
          <span class="ml-4 flex-shrink-0">
            <button
              type="button"
              class="
                bg-white
                rounded-md
                font-medium
                text-primary-600
                hover:text-primary-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-primary-500
              "
            >
              Update
            </button>
          </span>
        </dd>
      </div>
    </section>

    <section class="px-8">
      <ul role="list" class=" mt-2 divide-y divide-gray-200">
        <li class="py-4 flex items-center justify-between">
          <div class="flex flex-col">
            <p id="privacy-option-3-label" class=" text-sm font-medium text-gray-900">
              Interior
            </p>
            <p id="privacy-option-3-description" class="text-sm text-gray-500">
              Integer amet, nunc hendrerit adipiscing nam. Elementum ame
            </p>
          </div>
          <!-- Enabled: "bg-teal-500", Not Enabled: "bg-gray-200" -->
          <button
            type="button"
            class="
                bg-gray-200
                ml-4
                relative
                inline-flex
                flex-shrink-0
                h-6
                w-11
                border-2
                border-transparent
                rounded-full
                cursor-pointer
                transition-colors
                ease-in-out
                duration-200
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-primary-500
              "
            role="switch"
            aria-checked="true"
            aria-labelledby="privacy-option-3-label"
            aria-describedby="privacy-option-3-description"
          >
            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
            <span
              aria-hidden="true"
              class="
                  translate-x-0
                  inline-block
                  h-5
                  w-5
                  rounded-full
                  bg-white
                  shadow
                  transform
                  ring-0
                  transition
                  ease-in-out
                  duration-200
                "
            />
          </button>
        </li>
        <li class="py-4 flex items-center justify-between">
          <div class="flex flex-col">
            <p id="privacy-option-3-label" class=" text-sm font-medium text-gray-900">
              Exterior
            </p>
            <p id="privacy-option-3-description" class="text-sm text-gray-500">
              Integer amet, nunc hendrerit adipiscing nam. Elementum ame
            </p>
          </div>
          <!-- Enabled: "bg-teal-500", Not Enabled: "bg-gray-200" -->
          <button
            type="button"
            class="
                bg-gray-200
                ml-4
                relative
                inline-flex
                flex-shrink-0
                h-6
                w-11
                border-2
                border-transparent
                rounded-full
                cursor-pointer
                transition-colors
                ease-in-out
                duration-200
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-primary-500
              "
            role="switch"
            aria-checked="true"
            aria-labelledby="privacy-option-3-label"
            aria-describedby="privacy-option-3-description"
          >
            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
            <span
              aria-hidden="true"
              class="
                  translate-x-0
                  inline-block
                  h-5
                  w-5
                  rounded-full
                  bg-white
                  shadow
                  transform
                  ring-0
                  transition
                  ease-in-out
                  duration-200
                "
            />
          </button>
        </li>
      </ul>
    </section>
  </article>
</template>
