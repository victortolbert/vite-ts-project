type TaskType = 'personal' | 'work' | 'miscellaneous'

export interface Todo {
  label: string
  type: TaskType
  isComplete: boolean
}
