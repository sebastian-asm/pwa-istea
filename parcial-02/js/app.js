import { getTasks } from './utils/index.js'

async function init() {
  const tasks = await getTasks()
  if (tasks && tasks.length > 0) {
    const pendingTasks = tasks.filter((task) => task.status === 'pending')
    const finishTasks = tasks.filter((task) => task.status === 'finish')
    console.log({ pendingTasks, finishTasks })
  }
}

init()
