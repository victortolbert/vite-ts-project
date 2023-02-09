<script>
import users from '~/data/users.json'

export default {
  data: () => ({
    users: users.splice(0, 10)
  })
}
</script>

<template>
  <page-wrapper>
    <base-box>
      <div class="prose dark:prose-invert">
        <v-table :data="users">
          <template #head>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </template>
          <template #body="{ rows }">
            <tr v-for="row in rows" :key="row.id">
              <td>{{ row.name }}</td>
              <td>{{ row.age }}</td>
              <td>{{ row.email }}</td>
              <td>
                {{ row.address.street }},
                {{ row.address.city }}
                {{ row.address.state }}
              </td>
            </tr>
          </template>
        </v-table>
      </div>
    </base-box>
  </page-wrapper>
</template>

