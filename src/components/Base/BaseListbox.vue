<script setup>

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

const selectedPerson = ref(people[0])
</script>

<template>
  <Listbox v-model="selectedPerson" horizontal>
    <ListboxButton>
      {{ selectedPerson.name }}
    </ListboxButton>

    <ListboxOptions class="flex flex-row">
      <ListboxOption v-for="person in people" :key="person" :value="person">
        {{ person.name }}
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>
