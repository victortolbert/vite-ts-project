<template>
  <section class="px-6 antialiased text-gray-900">
    <div class="max-w-xl py-12 md:max-w-4xl">
      <h2 class="text-lg font-bold">
        Create Project
      </h2>

      <p class="mt-2 text-lg text-gray-500">
        These are form elements this plugin styles by default.
      </p>

      <div class="grid items-start grid-cols-1 gap-6 mt-8 md:grid-cols-2">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">First Name</span>
            <input type="text" placeholder="john@example.com">
          </label>
          <label class="block">
            <span class="text-gray-700">Last Name</span>
            <input type="email" placeholder="john@example.com">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (email, multiple)</span>
            <input type="email" multiple placeholder="john@example.com">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (password)</span>
            <input type="password" placeholder="john@example.com">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (date)</span>
            <input type="date">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (datetime-local)</span>
            <input type="datetime-local">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (month)</span>
            <input type="month">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (number)</span>
            <input type="number">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (search)</span>
            <input type="search">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (time)</span>
            <input type="time">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (week)</span>
            <input type="week">
          </label>
        </div>
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Input (tel)</span>
            <input type="tel" multiple placeholder="john@example.com">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (url)</span>
            <input type="url" multiple placeholder="john@example.com">
          </label>
          <label class="block">
            <span class="text-gray-700">Select</span>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>
          <label class="block">
            <span class="text-gray-700">Select (multiple)</span>
            <select multiple>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </label>
          <label class="block">
            <span class="text-gray-700">Textarea</span>
            <textarea rows="3" placeholder="Enter some long form content." />
          </label>
          <fieldset class="block">
            <legend class="text-gray-700">
              Checkboxes
            </legend>
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input type="checkbox" checked>
                  <span class="ml-2">Option 1</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input type="checkbox">
                  <span class="ml-2">Option 2</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input type="checkbox">
                  <span class="ml-2">Option 3</span>
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset class="block">
            <legend class="text-gray-700">
              Radio Buttons
            </legend>
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input type="radio" checked name="radio-direct" value="1">
                  <span class="ml-2">Option 1</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input type="radio" name="radio-direct" value="2">
                  <span class="ml-2">Option 2</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input type="radio" name="radio-direct" value="3">
                  <span class="ml-2">Option 3</span>
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div
      v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
      class="max-w-4xl py-12"
    >
      <h2 class="text-lg font-bold">
        Untouched
      </h2>

      <p class="mt-2 text-lg text-gray-500">
        These are form elements we don't handle (yet?), but we use this to make sure we
        haven't accidentally styled them by mistake.
      </p>

      <div class="grid items-start grid-cols-2 gap-6 mt-8">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Input (range)</span>
            <input
              type="range"
              class="block w-full h-2 mt-1 appearance-none bg-primary-300"
            >
          </label>
          <label class="block">
            <span class="text-gray-700">Input (color)</span>
            <input type="color" class="block w-full mt-1">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (file)</span>
            <input type="file" class="block w-full mt-1">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (file, multiple)</span>
            <input type="file" multiple class="block w-full mt-1">
          </label>
        </div>
      </div>
    </div>
  </section>
</template>
