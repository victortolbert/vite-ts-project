<template>
  <div>
    <div class="flex justify-between">
      <label for="message" class="block text-sm font-medium text-warm-gray-900">Message</label>
      <span id="message-max" class="text-sm text-warm-gray-500">Max. 500 characters</span>
    </div>
    <div class="mt-1">
      <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md" aria-describedby="message-max" />
    </div>
  </div>
</template>
