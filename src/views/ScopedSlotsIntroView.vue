<script>
// Passing Data Up Using Scoped Slots
// https://learn.adamwathan.com/advanced-vue/passing-data-up-using-scoped-slots
import ContactListPseudoSlot from '@/components/ContactListPseudoSlot.vue'

export default {
  components: {
    ContactListPseudoSlot,
  },
  data() {
    return {}
  },
}
</script>

<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <ContactListPseudoSlot :pseudo-slot="({ contact }) => contact.name.first">
        <a slot-scope="{ contact }" :href="`/contacts/${contact.id}`">
          {{ contact.name.first }}
        </a>
      </ContactListPseudoSlot>
    </div>
  </div>
</template>

<style src="@/assets/css/app.css" />
