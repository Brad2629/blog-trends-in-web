export type Task = {
  text: string
  checked: boolean
}

export type TaskId = {
  id: string
}

export type TaskWithId = Task & TaskId
