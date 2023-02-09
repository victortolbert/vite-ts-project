<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'
const faqs = reactive([
  {
    Id: 1,
    Question: 'What regions does Hancock service?',
    Answer: 'Hancock offers permanent state coverage and national catastrophe coverage as we respond to weather events. Please see our [coverage map](/Map) to check service coverage.'
  },
  {
    Id: 2,
    Question: 'Does Hancock provide roofing services?',
    Answer: 'Hancock no longer offers roofing installation or repairs and strictly handles roof inspections for carrier partners.'
  },
  {
    Id: 3,
    Question: 'How long after I schedule a Direct Inspection can I expect to receive deliverables?',
    Answer: 'We can typically accommodate the inspection within 24-48 hours and the deliverables are sent to the adjuster within 24 hours of completion.'
  },
  {
    Id: 4,
    Question: 'It appears that Hancock does not cover my area. Is there any way I can receive assistance?',
    Answer: 'We want to work with you. We will work with our field management staff to collaborate on resource needs and work to accommodate your request.  Please reach out to us via our contact page if this is something you would like us to pursue for you.'
  },
  {
    Id: 5,
    Question: 'My company would like to partner with Hancock, who should I contact?',
    Answer: 'Please contact us at 770-569-1669.'
  },
  {
    Id: 6,
    Question: 'What services do you provide?',
    Answer: 'Ladder Assists, Direct Inspects, Tarping and Board ups, and Underwriting Inspections. For a full list of services, please visit our [services page](/Services).'
  },
])
</script>

<template>
  <page-wrapper>
    <div class="flex items-center justify-center p-16 rounded-lg shadow-lg bg-primary-500">
      <div class="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <Disclosure
          v-for="faq in faqs"
          :key="`faq-${faq.Id}`"
          v-slot="{ open }"
          as="div"
          class="mt-2"
        >
          <DisclosureButton
            class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg text-primary-900 bg-primary-100 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75"
          >
            <span>{{ faq.Question }}</span>
            <ChevronUpIcon
              :class="open ? 'transform rotate-180' : ''"
              class="w-5 h-5 text-primary-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">{{ faq.Answer }}</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </page-wrapper>
</template>
