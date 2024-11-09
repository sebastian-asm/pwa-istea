const URL_API = 'https://66fffdc34da5bd237552cad3.mockapi.io/feed'

export async function getFeed() {
  try {
    const resp = await fetch(`${URL_API}?sortBy=createdAt&order=desc`)
    const data = await resp.json()
    return data
  } catch {
    return null
  }
}

export async function addFeed(body) {
  try {
    const resp = await fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    return resp
  } catch {
    return null
  }
}
