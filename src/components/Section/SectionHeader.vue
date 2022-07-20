<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class SectionHeader extends Vue {
  get hasActionsSlot() {
    return !!this.$slots.actions
  }

  get hasSubtitleSlot() {
    return !!this.$slots.subtitle
  }
}
</script>

<template>
  <header>
    <div class="px-4">
      <div class="w-full p-4 mx-auto">
        <div class="justify-end mt-2 md:flex md:items-center md:justify-between">
          <div class="flex-1 min-w-0">
            <section-title>
              <slot />
            </section-title>
            <section-subtitle v-if="hasSubtitleSlot">
              <slot name="subtitle" />
            </section-subtitle>
          </div>
          <!-- Actions -->
          <div
            v-if="hasActionsSlot"
            class="flex w-full mt-4 md:mt-0 md:ml-4 md:w-1/2 md:items-center md:justify-end"
          >
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
