<script>
export default {
  data() {
    return {
      center: { lat: 33.699741, lng: -84.328613 },
      markers: [
        {
          position: {
            lat: 34.108660,
            lng: -84.205280,
          },
        },
        {
          position: {
            lat: 33.699741,
            lng: -84.328613,
          },
        },
        {
          position: {
            lat: 51.165218,
            lng: 7.067116,
          },
        },
        {
          position: {
            lat: 51.09256,
            lng: 6.84074,
          },
        },
      ],
    }
  },
}
</script>

<template>
  <page-wrapper>
    <div class="aspect-w-16 aspect-h-6">
      <g-map-map
        :center="center"
        :zoom="9"
        map-type-id="terrain"
        style="width: 100vw; height: 20rem"
      >
        <g-map-cluster :zoomOnClick="true">
          <g-map-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          />
        </g-map-cluster>
      </g-map-map>
    </div>Claims By Customer
    Claims By Region
    Claims By State
  </page-wrapper>
</template>
