<script setup>
// Data Provider Components
import ContactList from '@/components/ContactList.vue'
import FetchJson from '@/components/FetchJson.vue'
</script>

<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-md mx-auto">
      <FetchJson url="/contacts.json" class="mb-8">
        <ContactList
          slot-scope="{ response: contacts }"
          :contacts="contacts"
        />
      </FetchJson>

      <FetchJson url="/albums.json">
        <div slot-scope="{ response: albums, loading }" class="card">
          <h1 class="text-2xl font-bold mb-6">
            Top Death Metal Albums
          </h1>
          <div v-if="loading" class="text-grey-darker">
            Loading...
          </div>
          <div v-else>
            <div class="album-grid">
              <div v-for="album in albums" class="album-grid-item">
                <img :src="album.artwork" class="" alt="">
                <h2 class="album-title">
                  {{ album.title }}
                </h2>
                <p class="album-artist">
                  {{ album.artist }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </FetchJson>
    </div>
  </div>
</template>

<style src="@/assets/css/app.css" />
