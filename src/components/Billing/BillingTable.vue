<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <header class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">
          Billing
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          A table of placeholder stock market data that does not make any sense.
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
        >
          Export
        </button>
      </div>
    </header>
    <div class="flex flex-col mt-8">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Transaction ID
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Share
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Commision
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Net amount
                  </th>
                  <th
                    scope="col"
                    class="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6"
                  >
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td
                    class="py-2 pl-4 pr-3 text-sm text-gray-500 whitespace-nowrap sm:pl-6"
                  >
                    AAPS0L
                  </td>
                  <td
                    class="px-2 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    Chase &amp; Co.
                  </td>
                  <td class="px-2 py-2 text-sm text-gray-900 whitespace-nowrap">
                    CAC
                  </td>
                  <td class="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                    +$4.37
                  </td>
                  <td class="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                    $3,509.00
                  </td>
                  <td class="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                    12.00
                  </td>
                  <td class="px-2 py-2 text-sm text-gray-500 whitespace-nowrap">
                    $4,397.00
                  </td>
                  <td
                    class="relative py-2 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6"
                  >
                    <a href="#" class="text-primary-600 hover:text-primary-900">
                      Edit
                      <span class="sr-only">, AAPS0L</span>
                    </a>
                  </td>
                </tr>

                <!-- More transactions... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
