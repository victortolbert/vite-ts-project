<template>
  <div class="px-8">
    <div class="hidden">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">
          Users
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of all the users in your account including their name, title, preferred
          email and role.
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
        >
          Add user
        </button>
      </div>
    </div>
    <div class="flex flex-col mt-8">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5">
            <!-- Selected row actions, only show when rows are selected. -->
            <div
              class="absolute top-0 flex items-center h-12 space-x-3 left-12 bg-gray-50 sm:left-16"
            >
              <button
                type="button"
                class="inline-flex items-center border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Bulk edit
              </button>
              <button
                type="button"
                class="inline-flex items-center border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Delete all
              </button>
            </div>

            <table class="min-w-full divide-y divide-gray-300 table-fixed">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8">
                    <input
                      type="checkbox"
                      class="absolute w-4 h-4 -mt-2 border-gray-300 text-primary-600 left-4 top-1/2 focus:ring-primary-500 sm:left-6"
                    >
                  </th>
                  <th
                    scope="col"
                    class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Preferred Email
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Role
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <!-- Selected: "bg-gray-50" -->
                <tr>
                  <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                    <!-- Selected row marker, only show when row is selected. -->
                    <div class="absolute inset-y-0 left-0 w-0.5 bg-primary-600" />

                    <input
                      type="checkbox"
                      class="absolute w-4 h-4 -mt-2 border-gray-300 text-primary-600 left-4 top-1/2 focus:ring-primary-500 sm:left-6"
                    >
                  </td>
                  <!-- Selected: "text-primary-600", Not Selected: "text-gray-900" -->
                  <td
                    class="py-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    Victor Tolbert
                  </td>
                  <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    Front-end Developer
                  </td>
                  <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    victor.tolbert@example.com
                  </td>
                  <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    Member
                  </td>
                  <td
                    class="py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6"
                  >
                    <a href="#" class="text-primary-600 hover:text-primary-900">
                      Edit
                      <span class="sr-only">, Victor Tolbert</span>
                    </a>
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
