<script lang="ts" setup>
import { computed, onMounted, reactive, toRefs } from 'vue'
import type { TodoItem } from '@/types'

const state = reactive({
  newTask: {
    label: '',
    type: 'personal',
  } as TodoItem,
  taskItems: [] as TodoItem[],
  listFilter: 'all',
})

const filteredTasks = computed(() => {
  if (state.listFilter === 'complete') {
    return state.taskItems.filter(
      (item: TodoItem) => item.isComplete === true,
    )
  }
  else if (state.listFilter === 'incomplete') {
    return state.taskItems.filter(
      (item: TodoItem) => item.isComplete === false,
    )
  }
  else {
    return state.taskItems
  }
})

const addTask = () => {
  state.taskItems.push({
    ...state.newTask,
    isComplete: false,
  })
}
const { newTask, listFilter } = toRefs(state)

onMounted(() => {
  console.log('newTask', newTask)
  console.log('listFilter', listFilter)
})
</script>

<template>
  <div class="todo-page">
    <h1>Todo</h1>
    <form @submit.prevent>
      <div class="mb1">
        <label for="task-label">Task Label:</label>
        <input id="task-label" v-model="newTask.label" type="text">
      </div>
      <div class="mb1">
        <label for="task-type">Take Type:</label>
        <select id="task-type" v-model="newTask.type" name="task-type">
          <option value="personal">
            Personal
          </option>
          <option value="work">
            Work
          </option>
          <option value="miscellaneous">
            Miscellaneous
          </option>
        </select>
      </div>
      <button @click="addTask">
        Add Task
      </button>
    </form>
    <h2>Task List</h2>
    <div>
      <button @click="listFilter = 'all'">
        All
      </button> |
      <button @click="listFilter = 'incomplete'">
        Incomplete
      </button> |
      <button @click="listFilter = 'complete'">
        Complete
      </button>
    </div>
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="`task-${index}`">
        <input v-model="task.isComplete" type="checkbox">
        {{ task.label }} ({{
          task.type
        }})
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-page {
  max-width: 800px;
  margin: 0 auto;
}
ul {
  list-style: none;
}
.mb1 {
  margin-bottom: 1rem;
}
</style>
