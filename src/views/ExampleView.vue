<script lang="ts" setup>
import { ref } from 'vue'
import UserSettingsForm from './UserSettingsForm.vue'
import AnnouncementModal from './AnnouncementModal.vue'
import ExampleClickCountButton from '@/components/ExampleClickCountButton.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import ContactList from '@/components/ContactList.vue'
import FetchJson from '@/components/FetchJson.vue'
import AccordionList from '@/components/AccordionList.vue'
import AccordionItem from '@/components/AccordionItem.vue'

const accountId = ref(7)
const showAnnouncement = ref(true)
</script>

<template>
  <div>
    <ExampleClickCountButton />

    <HelloWorld>
      <h1 slot-scope="{ subject }">
        Hello {{ subject }}!
      </h1>
    </HelloWorld>
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

    <div class="max-w-sm mx-auto">
      <AccordionList>
        <AccordionItem :item-id="1">
          <template #header>
            Item A
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus auctor massa, vitae posuere sem tincidunt eget. Duis non vestibulum diam. Pellentesque eleifend interdum mollis. Donec porttitor dui enim. Maecenas a semper sem. Nunc molestie turpis vitae sem auctor, non venenatis velit ultricies.
          </template>
        </AccordionItem>
        <AccordionItem :item-id="2">
          <template #header>
            Item B
          </template>
          <template #content>
            Vestibulum nec urna non nisi viverra vehicula ut sed metus. Cras scelerisque condimentum nunc ut mattis. Curabitur euismod sagittis efficitur. Cras vel orci consectetur, ullamcorper magna vitae, sodales mauris. Aliquam tempus volutpat mi. Nunc vitae molestie ante. In sed varius tortor.
          </template>
        </AccordionItem>
        <AccordionItem :item-id="3">
          <template #header>
            Item C
          </template>
          <template #content>
            Sed porttitor mattis egestas. Duis nec rhoncus ligula. Etiam pellentesque mattis mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas vel dapibus nulla. Phasellus lobortis nibh et faucibus tincidunt. Phasellus non iaculis turpis, vitae gravida lacus.
          </template>
        </AccordionItem>
      </AccordionList>
    </div>

    <div class="opacity-25">
      <AnnouncementModal
        :show="showAnnouncement"
        @close="showAnnouncement = false"
      />
    </div>

    <div class="min-h-screen bg-grey-darker p-8">
      <div class="max-w-sm mx-auto">
        <UserSettingsForm :account-id="accountId" />
      </div>
    </div>

    <portal-target name="overlays" />
  </div>
</template>

<style src="./ExampleView.css" scoped />
