import { FINISHED, PENDING } from './index.js'

const URL = 'https://66fffdc34da5bd237552cad3.mockapi.io/taskmgr'

export async function getTasks() {
  try {
    const [pendingTasks, finishedTasks] = await Promise.all([
      fetch(`${URL}?status=${PENDING}&sortBy=createdAt&order=desc`).then((response) => {
        if (response.status === 404) return []
        if (response.status === 500) return null
        return response.json()
      }),
      fetch(`${URL}?status=${FINISHED}&sortBy=finishedAt&order=desc`).then((response) => {
        if (response.status === 404) return []
        if (response.status === 500) return null
        return response.json()
      })
    ])
    return { pendingTasks, finishedTasks }
  } catch {
    return null
  }
}

export async function getTask(id) {
  try {
    const response = await fetch(`${URL}/${id}`)
    const task = await response.json()
    return task
  } catch {
    return null
  }
}

export async function updateTask(id, updateTask) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateTask),
      headers: { 'Content-Type': 'application/json' }
    })
    const task = await response.json()
    return task
  } catch {
    return null
  }
}

export async function saveTask(newTask) {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: { 'Content-Type': 'application/json' }
    })
    const task = await response.json()
    return task
  } catch {
    return null
  }
}
