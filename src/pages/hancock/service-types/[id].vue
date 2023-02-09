<script>
export default {
  props: ['id'],
  created() {
    this.$store.dispatch('fetchServiceType', this.id).catch(error => {
      this.$router.push({
        name: 'error-display',
        params: { error: error }
      })
    })
  },
  computed: {
    serviceType() {
      return this.$store.state.serviceType
    }
  }
}
</script>

<template>
  <article class="p-8 m-6 prose bg-white rounded shadow">
    <router-link to="/hancock/service-types">&larr; Back</router-link>

    <div v-if="serviceType">
      <h2>{{ serviceType.Name }}</h2>

      <!-- <span>{{ serviceType.id }}</span> -->

      <div class="space-y-6">
        <div>
          <label class="block text-xs tracking-wider uppercase" for="short-name">Short Name</label>
          <span id="short-name">{{ serviceType.ShortName }}</span>
        </div>
        <div>
          <label class="block text-xs tracking-wider uppercase" for="short-name">Description</label>
          <span id="customer-description">{{ serviceType.CustomerDescription }}</span>
        </div>
        <div>
          <label class="block text-xs tracking-wider uppercase" for="is-active">Is Active</label>
          <span id="is-active">{{ serviceType.IsActive }}</span>
        </div>
        <div>
          <label
            class="block text-xs tracking-wider uppercase"
            for="on-external-form"
          >On External Form</label>
          <span id="on-external-form">{{ serviceType.OnExternalForm }}</span>
        </div>
        <div>
          <label class="block text-xs tracking-wider uppercase" for="created-by-name">Created By</label>
          <span id="created-by-name">{{ serviceType.CreateByName }}</span>
        </div>
        <div>
          <label class="block text-xs tracking-wider uppercase" for="created-on">Created ON</label>
          <span id="created-on">{{ serviceType.CreatedOn }}</span>
        </div>
        <div>
          <label class="block text-xs tracking-wider uppercase" for="duration">Duration</label>
          <span id="duration">{{ serviceType.Duration }}</span>
        </div>
      </div>
    </div>
  </article>
</template>
