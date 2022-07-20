<script lang="ts">
const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
]

export default {
  setup() {
    return {
      people,
    }
  },
}
</script>

<template>
  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
        <tr class="text-white bg-primary-500">
          <th scope="col" class="py-1 pl-4 pr-3 text-sm font-semibold text-left sm:pl-6">
            Name
          </th>
          <th
            scope="col"
            class="hidden px-3 py-1 text-sm font-semibold text-left lg:table-cell"
          >
            Title
          </th>
          <th
            scope="col"
            class="hidden px-3 py-1 text-sm font-semibold text-left sm:table-cell"
          >
            Email
          </th>
          <th scope="col" class="px-3 py-1 text-sm font-semibold text-left">
            Role
          </th>
          <th scope="col" class="relative py-1 pl-3 pr-4 sm:pr-6">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="person in people" :key="person.email">
          <td
            class="w-full py-1 pl-4 pr-3 text-sm font-medium text-gray-900 max-w-0 sm:w-auto sm:max-w-none sm:pl-6"
          >
            {{ person.name }}
            <dl class="font-normal lg:hidden">
              <dt class="sr-only">
                Title
              </dt>
              <dd class="mt-1 text-gray-700 truncate">
                {{ person.title }}
              </dd>
              <dt class="sr-only sm:hidden">
                Email
              </dt>
              <dd class="mt-1 text-gray-500 truncate sm:hidden">
                {{ person.email }}
              </dd>
            </dl>
          </td>
          <td class="hidden px-3 py-1 text-sm text-gray-500 lg:table-cell">
            {{ person.title }}
          </td>
          <td class="hidden px-3 py-1 text-sm text-gray-500 sm:table-cell">
            {{ person.email }}
          </td>
          <td class="px-3 py-1 text-sm text-gray-500">
            {{ person.role }}
          </td>
          <td class="py-1 pl-3 pr-4 text-sm font-medium text-right sm:pr-6">
            <a href="#" class="text-primary-600 hover:text-primary-900">
              Edit
              <span class="sr-only">, {{ person.name }}</span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
