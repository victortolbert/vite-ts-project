<template>
  <section class="px-8 mt-8 font-sans antialiased text-gray-900 bg-gray-200">
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div v-for="n in 8" class="w-full p-4 sm:w-1/2 md:w-1/2 xl:w-1/4">
          <a
            href="#"
            class="block overflow-hidden bg-white rounded-lg shadow-md c-card hover:shadow-xl"
          >
            <div class="relative pb-48 overflow-hidden">
              <img
                class="absolute inset-0 object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              />
            </div>
            <div class="p-4">
              <span
                class="inline-block px-2 py-1 text-xs font-semibold leading-none tracking-wide uppercase rounded-full text-emerald-800 bg-emerald-200"
              >Active</span>
              <h2 class="mt-2 mb-2 font-bold">Ladder Assist {{ n }}</h2>
              <p
                class="text-sm"
              >Adjuster and Technician meet on site at specified time to perform inspection.</p>
              <div class="flex items-center mt-3">
                <span class="text-sm font-semibold">ab</span>&nbsp;
                <span class="text-xl font-bold">45,00</span>&nbsp;
                <span class="text-sm font-semibold">€</span>
              </div>
            </div>
            <div class="p-4 text-xs text-gray-700 border-t border-b">
              <span class="flex items-center mb-1">
                <i class="mr-2 text-gray-900 far fa-clock fa-fw"></i> 3 Tage
              </span>
              <span class="flex items-center">
                <i class="mr-2 text-gray-900 far fa-address-card fa-fw"></i> Ermäßigung mit Karte
              </span>
            </div>
            <div class="flex items-center p-4 text-sm text-gray-600">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-yellow-500 fill-current"
              >
                <path
                  d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-yellow-500 fill-current"
              >
                <path
                  d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-yellow-500 fill-current"
              >
                <path
                  d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-yellow-500 fill-current"
              >
                <path
                  d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-400 fill-current"
              >
                <path
                  d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                />
              </svg>
              <span class="ml-2">34 Bewertungen</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-card {
  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
}
</style>
