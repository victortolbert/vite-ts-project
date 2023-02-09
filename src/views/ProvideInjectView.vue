<script setup>
import AccordionList from '@/components/AccordionList.vue'
import AccordionItem from '@/components/AccordionItem.vue'
</script>

<template>
  <div class="min-h-screen bg-grey-darker p-8">
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
  </div>
</template>

<style src="@/assets/css/app.css" />
