<script>
import users from '~/data/users.json'

export default {
  name: 'Sorting',
  data: () => ({
    users: users.slice(0, 10)
  }),
  methods: {
    nameLength (row) {
      return row.name.length
    },
    dateSort (a, b, sortOrder) {
      let date1 = new Date(a.registered).getTime()
      let date2 = new Date(b.registered).getTime()
      return date1 - date2 * sortOrder
    }
  }
}
</script>

<template>
  <page-wrapper>
    <base-box>
      <div class="card prose">
        <VTable :data="users">
          <template #head>
            <VTh :sortKey="nameLength" defaultSort="desc">
              Name
            </VTh>
            <VTh sortKey="age">Age</VTh>
            <VTh sortKey="address.state">State</VTh>
            <VTh :customSort="dateSort">Registered at</VTh>
          </template>
          <template #body="{ rows }">
            <tr v-for="row in rows" :key="row.guid">
              <td>{{ row.name }}</td>
              <td>{{ row.age }}</td>
              <td>{{ row.address.state }}</td>
              <td>{{ row.registered }}</td>
            </tr>
          </template>
        </VTable>
      </div>
    </base-box>
  </page-wrapper>
</template>

