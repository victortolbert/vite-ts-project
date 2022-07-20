<template>
  <nav aria-label="Progress">
    <ol role="list" class="space-y-4 md:flex md:space-y-0 md:space-x-8">
      <li class="md:flex-1">
        <!-- Completed Step -->
        <a
          href="#"
          class="flex flex-col py-2 pl-4 border-l-4 border-primary-600 group hover:border-primary-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <span
            class="text-xs font-semibold tracking-wide uppercase text-primary-600 group-hover:text-primary-800"
          >
            Step 1
          </span>
          <span class="text-sm font-medium">Job details</span>
        </a>
      </li>

      <li class="md:flex-1">
        <!-- Current Step -->
        <a
          href="#"
          class="flex flex-col py-2 pl-4 border-l-4 border-primary-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
          aria-current="step"
        >
          <span class="text-xs font-semibold tracking-wide uppercase text-primary-600">
            Step 2
          </span>
          <span class="text-sm font-medium">Application form</span>
        </a>
      </li>

      <li class="md:flex-1">
        <!-- Upcoming Step -->
        <a
          href="#"
          class="flex flex-col py-2 pl-4 border-l-4 border-gray-200 group hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
        >
          <span
            class="text-xs font-semibold tracking-wide text-gray-500 uppercase group-hover:text-gray-700"
          >
            Step 3
          </span>
          <span class="text-sm font-medium">Preview</span>
        </a>
      </li>
    </ol>
  </nav>
</template>
