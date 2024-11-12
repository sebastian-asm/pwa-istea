const URL = 'https://66fffdc34da5bd237552cad3.mockapi.io/taskmgr'

export async function getTasks() {
  try {
    const response = await fetch(`${URL}?sortBy=createdAt&order=desc`)
    const tasks = await response.json()
    return tasks
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
