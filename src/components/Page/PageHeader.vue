<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class PageHeader extends Vue {
  get hasActionsSlot() {
    return !!this.$slots.actions
  }

  get hasBreadcrumbsSlot() {
    return !!this.$slots.breadcrumbs
  }

  get hasSubtitleSlot() {
    return !!this.$slots.subtitle
  }
}
</script>

<template>
  <header class="shadow page-header">
    <div class="px-4">
      <div class="w-full p-4 mx-auto">
        <div v-if="hasBreadcrumbsSlot">
          <slot name="breadcrumbs" />
        </div>

        <div class="justify-end mt-2 md:flex md:items-center md:justify-between">
          <div class="flex-1 min-w-0">
            <page-title>
              <slot />
            </page-title>

            <page-subtitle v-if="hasSubtitleSlot">
              <slot name="subtitle" />
            </page-subtitle>
          </div>

          <!-- Actions -->
          <div
            v-if="hasActionsSlot"
            class="flex w-full mt-4 space-x-4 page-header-actions md:mt-0 md:ml-4 md:w-1/2 md:items-center md:justify-end"
          >
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
