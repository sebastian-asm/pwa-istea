const URL = 'https://66fffdc34da5bd237552cad3.mockapi.io/taskmgr'

export function get() {}

export async function post(body) {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    })
    return response
  } catch {
    return null
  }
}
